package auth

import (
	"encoding/json"
	"fmt"
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

func SendVerificationMail(w http.ResponseWriter, userMail string) {

	OTPTokenObject = generateAuthCode()

	m := mail.NewMessage()
	m.SetHeader("From", os.Getenv("SENDER_MAIL"))
	m.SetHeader("To", userMail)
	m.SetAddressHeader("Cc", os.Getenv("SENDER_MAIL"), "Elite Banking Community")
	m.SetHeader("Subject", "Authentication code")
	m.SetBody("text/html", "Use the code below to authenticate login session. Note that this code will become invalid after 10 minutes <br></br> <h1>"+strconv.Itoa(OTPTokenObject.Code)+"</h1> <br></br><br></br> If you didn't initiate a login on your account, kindly delete this message. Thank you. Elite Banking Community support team.")

	d := mail.NewDialer(os.Getenv("EMAIL_HOST"), 465, os.Getenv("SENDER_MAIL"), os.Getenv("APP_PASSWORD"))
	d.StartTLSPolicy = mail.MandatoryStartTLS

	if err := d.DialAndSend(m); err != nil {
		fmt.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Internal Server Error"))
		return
	} else {
		response := map[string]string{
			"email": userMail,
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
