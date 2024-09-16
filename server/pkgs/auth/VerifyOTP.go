package auth

import (
	"bank-app-server/pkgs/config"
	"bank-app-server/pkgs/utils"
	"crypto/rand"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
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
	if _, err := io.ReadFull(rand.Reader, sessionID); err != nil {
		return "", err
	}
	return hex.EncodeToString(sessionID), nil
}

func VerifyOTP(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(w, r)
	go utils.CleanupExpiredSessions()

	otp := r.FormValue("OTP")
	loginID := r.FormValue("loginID")

	// verify code isn't expired
	expirationDuration := 10 * time.Minute
	if time.Since(OTPTokenObject.CreatedAt) > expirationDuration {
		http.Error(w, "Invalid OTP", http.StatusUnauthorized)
		return
	}

	if otp == strconv.Itoa(OTPTokenObject.Code) {
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
			fmt.Println(err)
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
