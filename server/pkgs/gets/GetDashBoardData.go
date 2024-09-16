package gets

import (
	"bank-app-server/pkgs/auth"
	"bank-app-server/pkgs/config"
	"bank-app-server/pkgs/utils"
	"net/http"
	"os"
	"strings"
)

func GetDashBoardData(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(w, r)
	w.Header().Set("Access-Control-Allow-Origin", os.Getenv("BANK_APP_DOMAIN"))

	//Verify cookie
	_, err := r.Cookie("login-session")
	if err != nil {
		if err == http.ErrNoCookie {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Unauthorized access"))
			return
		}
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Bad request"))
		return
	}
	session, _ := auth.Store.Get(r, "login-session")
	userLoginIDFromCookieStore, ok := session.Values["user_id"].(string)
	if !ok || userLoginIDFromCookieStore == "" {
		http.Error(w, "Invalid or missing session", http.StatusUnauthorized)
		return
	}

	//Get the session token
	token := r.FormValue("token")
	sessionID := strings.Trim(token, "\"")

	//Get the JWT thats mapped to the session token in the database
	jwt, err := config.GetJWTToken(sessionID)
	if err != nil {
		http.Error(w, "Failed to get JWT token", http.StatusInternalServerError)
		return
	}
	//Get the User Login Id from the JWT
	userLoginID, err := auth.VerifyJWT(jwt)
	if err != nil {
		http.Error(w, "Failed to validate token", http.StatusInternalServerError)
		return
	}

	// Verify the user login id from the cookie matches the login id from the JWT token
	if userLoginIDFromCookieStore == userLoginID {
		config.GetDashBoardData(userLoginID, w)
	} else {
		http.Error(w, "Invalid session", http.StatusUnauthorized)
		return

	}

}
