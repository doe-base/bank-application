package registration

import (
	"encoding/json"
	"math/rand"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/go-mail/mail"
)

type EmailResponse struct {
	Email string `json:"email"`
}
type AuthCode struct {
	Code      int
	CreatedAt time.Time
}

func generateAuthCode() AuthCode {
	OTPToken := generateRandomNumber(1000000000)
	return AuthCode{
		Code:      OTPToken,
		CreatedAt: time.Now(),
	}
}

var OTPTokenObject AuthCode

func SendVerificationMail(w http.ResponseWriter, email, firstName, lastName, middleName string) {

	OTPTokenObject = generateAuthCode()

	m := mail.NewMessage()
	m.SetHeader("From", os.Getenv("SENDER_MAIL"))
	m.SetHeader("To", email)
	m.SetAddressHeader("Cc", os.Getenv("SENDER_MAIL"), "Elite Banking Community")
	m.SetHeader("Subject", "Authentication code")
	m.SetBody("text/html", "Use the code below to verify your email. Note that this code will become invalid after 10 minutes <br></br> <h1>"+strconv.Itoa(OTPTokenObject.Code)+"</h1> <br></br><br></br> If you didn't initiate this, kindly delete this message. Thank you. Elite Banking Community support team.")

	d := mail.NewDialer(os.Getenv("EMAIL_HOST"), 465, os.Getenv("SENDER_MAIL"), os.Getenv("APP_PASSWORD"))
	d.StartTLSPolicy = mail.MandatoryStartTLS

	if err := d.DialAndSend(m); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Internal Server Error"))
		return
	} else {
		response := map[string]string{
			"email":      email,
			"firstName":  firstName,
			"lastName":   lastName,
			"middleName": middleName,
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
		return
	}
}

func generateRandomNumber(digits int) int {
	rand.Seed(time.Now().UnixNano())
	randomNumber := rand.Intn(digits)
	return randomNumber
}
