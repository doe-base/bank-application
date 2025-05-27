package registration

import (
	"os"

	"github.com/go-mail/mail"
)

func SendLoginIDMail(loginID, email, firstName string) error {

	m := mail.NewMessage()
	m.SetHeader("From", os.Getenv("SENDER_MAIL"))
	m.SetHeader("To", email)
	m.SetAddressHeader("Cc", os.Getenv("SENDER_MAIL"), "Elite Banking Community")
	m.SetHeader("Subject", "Authentication code")
	m.SetBody("text/html", "Dear "+firstName+", your login ID is: <br></br> <h1>"+loginID+"</h1> <br></br><br></br> Use this code to login in to your Elite Community Banking App.")

	d := mail.NewDialer(os.Getenv("EMAIL_HOST"), 465, os.Getenv("SENDER_MAIL"), os.Getenv("APP_PASSWORD"))
	d.StartTLSPolicy = mail.MandatoryStartTLS

	if err := d.DialAndSend(m); err != nil {
		return err
	}

	return nil
}
