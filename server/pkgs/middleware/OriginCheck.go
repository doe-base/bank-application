package middleware

import (
	"net/http"
	"os"
)

// isAllowedOrigin checks if the request's origin matches the expected origin.
func isAllowedOrigin(r *http.Request) bool {
	origin := r.Header.Get("Origin")
	for _, allowedOrigin := range [3]string{os.Getenv("WEBSITE_DOMAIN"), os.Getenv("BANK_APP_DOMAIN")} {
		if origin == allowedOrigin {
			return true
		}
	}
	return false
}

// middleware to reject requests from unexpected origins.
func OriginCheckMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if !isAllowedOrigin(r) {
			http.Error(w, "Forbidden: Invalid origin", http.StatusForbidden)
			return
		}
		next.ServeHTTP(w, r)
	})
}
