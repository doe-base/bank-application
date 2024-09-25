package registration

import (
	"bank-app-server/pkgs/config"
	"bank-app-server/pkgs/utils"
	"net/http"
)

type ErrorResponse struct {
	LoginIDNotFound bool `json:"loginIDNotFound"`
	OTPInvalid      bool `json:"otpInvalid"`
}

func HandleUserRegistration(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(w, r)
	go utils.CleanupExpiredSessions()

	firstName := r.FormValue("firstName")
	lastName := r.FormValue("lastName")
	middleName := r.FormValue("middleName")
	email := r.FormValue("email")

	if firstName == "" || lastName == "" || email == "" {
		http.Error(w, "Token is required", http.StatusBadRequest)
		return
	}

	userExist := config.CheckIfUserExisAlready(email)

	if userExist {
		http.Error(w, "User already exists", http.StatusConflict)
		return
	}

	SendVerificationMail(w, email, firstName, lastName, middleName)
}
