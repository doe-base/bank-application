package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"bank-app-server/pkgs/auth"
	"bank-app-server/pkgs/gets"
	"bank-app-server/pkgs/middleware"
	"bank-app-server/pkgs/registration"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func main() {
	// Load environment variables from the .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	var router *mux.Router = mux.NewRouter()

	// Middleware
	router.Use(middleware.OriginCheckMiddleware)

	// HandleFunctions
	router.HandleFunc("/login-post", auth.HandleLogin).Methods("POST", "OPTIONS")
	router.HandleFunc("/verify-otp-post", auth.VerifyOTP).Methods("POST", "OPTIONS")
	router.HandleFunc("/create-session-cookie", auth.CreateLoginSessionCookie).Methods("POST", "OPTIONS")
	router.HandleFunc("/get-bashboard-data", gets.GetDashBoardData).Methods("POST", "OPTIONS")
	router.HandleFunc("/close-session", auth.Logout).Methods("POST", "OPTIONS")
	router.HandleFunc("/registration-form", registration.HandleUserRegistration).Methods("POST", "OPTIONS")
	router.HandleFunc("/otp-verify-registration", registration.VerifyOTP).Methods("POST", "OPTIONS")

	//Connect to postgres and listen port
	port := os.Getenv("PORT")
	fmt.Printf("Starting server on port.............. %s \n", os.Getenv("PORT"))
	http.ListenAndServe(":"+port, router)

}
