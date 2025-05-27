package auth

import (
	"bank-app-server/pkgs/utils"
	"fmt"
	"net/http"
)

func TestCookie(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(w, r)

	c, err := r.Cookie("login-cookie")
	if err != nil {
		if err == http.ErrNoCookie {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("111"))
			return
		}
		// For any other type of error, return a bad request status
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("222"))
		return
	}
	sessionToken := c.Value
	section := r.URL.Query().Get("section")

	if section == sessionToken {
		fmt.Println("we're a go")
	}
}
