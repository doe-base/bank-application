package auth

import (
	"bank-app-server/pkgs/config"
	"bank-app-server/pkgs/utils"
	"net/http"
	"os"
	"strings"
	"time"
)

func Logout(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(w, r)
	w.Header().Set("Access-Control-Allow-Origin", os.Getenv("BANK_APP_DOMAIN"))
	utils.CleanupExpiredSessions()

	token := r.FormValue("token")
	sessionID := strings.Trim(token, "\"")

	config.DeleteSession(sessionID, w)

	cookie := &http.Cookie{
		Name:     "login-session",
		Value:    "",
		Expires:  time.Now().Add(-1 * time.Hour),
		HttpOnly: true,
	}
	http.SetCookie(w, cookie)

}
