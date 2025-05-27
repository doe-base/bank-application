package auth

import (
	"bank-app-server/pkgs/config"
	"bank-app-server/pkgs/utils"
	"net/http"
	"os"

	"github.com/gorilla/sessions"
)

type SuccessResponse struct {
	Authenticated bool `json:"authenticated"`
}

var Store *sessions.CookieStore

func CreateLoginSessionCookie(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(w, r)
	go utils.CleanupExpiredSessions()
	w.Header().Set("Access-Control-Allow-Origin", os.Getenv("BANK_APP_DOMAIN"))

	token := r.FormValue("sessionToken")
	if token == "" {
		http.Error(w, "Token is required", http.StatusBadRequest)
		return
	}

	jwt, err := config.GetJWTToken(token)
	if err != nil {
		http.Error(w, "Failed to get JWT token", http.StatusInternalServerError)
		return
	}

	userLoginID, err := VerifyJWT(jwt)
	if err != nil {
		http.Error(w, "Failed to validate token", http.StatusInternalServerError)
		return
	}

	Store = sessions.NewCookieStore([]byte(token))
	session, _ := Store.Get(r, "login-session")

	session.Values["user_id"] = userLoginID
	session.Options = &sessions.Options{
		Domain:   os.Getenv("BANK_APP_DOMAIN1"),
		Path:     "/",
		MaxAge:   3600,
		HttpOnly: true,
		Secure:   true,
		SameSite: http.SameSiteStrictMode,
	}

	if err := session.Save(r, w); err != nil {
		http.Error(w, "Failed to save session", http.StatusInternalServerError)
		return
	}

	config.GetDashBoardData(userLoginID, w)
}
