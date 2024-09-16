package auth

import (
	"bank-app-server/pkgs/config"
	"bank-app-server/pkgs/utils"
	"encoding/json"
	"fmt"
	"net/http"
)

type ErrorResponse struct {
	LoginIDNotFound bool `json:"loginIDNotFound"`
	OTPInvalid      bool `json:"otpInvalid"`
}

func HandleLogin(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(w, r)
	go utils.CleanupExpiredSessions()

	loginID := r.FormValue("loginID")
	if loginID == "" {
		http.Error(w, "Token is required", http.StatusBadRequest)
		return
	}

	email, message, err := config.GetUserEmailFromPostgresDB(loginID)
	fmt.Println(message)
	if err != nil {
		if message == "No rows were returned!" {
			response := ErrorResponse{LoginIDNotFound: true, OTPInvalid: false}
			json.NewEncoder(w).Encode(response)
		} else {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Internal Server Error"))
			return
		}
	} else {
		SendVerificationMail(w, email)
	}

}
