package utils

import (
	"database/sql"
	"os"
)

func CleanupExpiredSessions() error {
	pgConnectionString := os.Getenv("PostgreConnectionString")

	db, err := sql.Open("postgres", pgConnectionString)
	if err != nil {
		return err
	}
	defer db.Close()

	if err := db.Ping(); err != nil {
		return err
	}

	db.Exec(`DELETE FROM login_sessions WHERE expires_at <= NOW();`)
	return nil
}
