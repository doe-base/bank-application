package registration

import (
	"bank-app-server/pkgs/config"
	"bank-app-server/pkgs/utils"
	cryptoRand "crypto/rand"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"math/rand"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var jwtKey = []byte(os.Getenv("JWT_KEY"))

type Claims struct {
	UserID string `json:"user_id"`
	jwt.RegisteredClaims
}

func generateJWT(userID string) (string, error) {
	expirationTime := time.Now().Add(1 * time.Hour)
	claims := &Claims{
		UserID: userID,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(expirationTime),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		return "", err
	}
	return tokenString, nil
}
func VerifyJWT(tokenString string) (string, error) {
	claims := &Claims{}
	token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
		// Ensure the signing method is HMAC (optional)
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return jwtKey, nil
	})

	if err != nil {
		return "", err
	}

	if !token.Valid {
		return "", fmt.Errorf("invalid token")
	}

	return claims.UserID, nil
}
func GenerateSessionID() (string, error) {
	sessionID := make([]byte, 32)
	if _, err := io.ReadFull(cryptoRand.Reader, sessionID); err != nil {
		return "", err
	}
	return hex.EncodeToString(sessionID), nil
}
func generateLoginID() string {
	rand.Seed(time.Now().UnixNano())

	prefix := "EB"

	randomDigits := ""
	for i := 0; i < 12; i++ {
		randomDigits += fmt.Sprintf("%d", rand.Intn(10)) // Random digit between 0-9
	}

	// Combine prefix and random digits
	return prefix + randomDigits
}

func VerifyOTP(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(w, r)
	go utils.CleanupExpiredSessions()

	otp := r.FormValue("otp")
	firstName := r.FormValue("firstName")
	lastName := r.FormValue("lastName")
	middleName := r.FormValue("middleName")
	email := r.FormValue("email")

	if firstName == "" || lastName == "" || email == "" || otp == "" {
		http.Error(w, "Token is required", http.StatusBadRequest)
		return
	}

	// verify code isn't expired
	expirationDuration := 10 * time.Minute
	if time.Since(OTPTokenObject.CreatedAt) > expirationDuration {
		http.Error(w, "Invalid OTP", http.StatusUnauthorized)
		return
	}

	if otp == strconv.Itoa(OTPTokenObject.Code) {
		loginID := generateLoginID()
		err := config.CreateNewCustomer(loginID, firstName, lastName, middleName, email)
		if err != nil {
			fmt.Println(err)
			http.Error(w, "Error creating user", http.StatusInternalServerError)
			return
		}

		// Send the user's LoginID via email
		err2 := SendLoginIDMail(loginID, email, firstName)
		if err2 != nil {
			fmt.Println(err2)
			http.Error(w, "Internal server erro", http.StatusInternalServerError)
			return
		}

		jwtKey, err := generateJWT(loginID)
		if err != nil {
			http.Error(w, "Error generating token", http.StatusInternalServerError)
			return
		}

		sessionID, err := GenerateSessionID()
		if err != nil {
			http.Error(w, "Error generating session ID", http.StatusInternalServerError)
			return
		}

		if err := config.MapSessionToJWT(sessionID, jwtKey); err != nil {
			http.Error(w, "Error mapping session to JWT", http.StatusInternalServerError)
			return
		}

		redirectURL := os.Getenv("BANK_APP_DOMAIN") + "/auth?token=" + sessionID
		response := map[string]string{
			"redirect_url": redirectURL,
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
		return
	}
	http.Error(w, "Invalid OTP", http.StatusUnauthorized)
}
