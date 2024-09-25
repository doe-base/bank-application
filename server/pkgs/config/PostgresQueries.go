package config

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"os"
	"time"
)

type DashBoardData struct {
	Email         string  `json:"email"`
	FirstName     string  `json:"firstname"`
	LastName      string  `json:"lastname"`
	MiddleName    string  `json:"middlename"`
	AccountNumber string  `json:"accountnumber"`
	AccoutType    string  `json:"accounttype"`
	Balance       float32 `json:"balance"`
	HideBalance   bool    `json:"hidebalance"`
	SepcialMessage
	ProfileData
}
type ProfileData struct {
	PhoneNumber string `json:"phonenumber"`
	Gender      string `json:"gender"`
	DateOfBirth string `json:"dateofbirth"`
	BVN         string `json:"bvn"`
}
type SepcialMessage struct {
	Message     string `json:"message"`
	MessageCode int    `json:"messagecode"`
}

func CreateNewCustomer(loginID, firstName, lastName, middleName, email string) error {
	pgConnectionString := os.Getenv("PostgreConnectionString")
	// connect to postgres
	db, err := sql.Open("postgres", pgConnectionString)
	if err != nil {
		return err
	}
	defer db.Close()
	// test postgres connection
	if err2 := db.Ping(); err2 != nil {
		return err2
	}
	var customerid int
	sqlStatement := `
   	INSERT INTO customers ( LoginID, FirstName, LastName, MiddleName, DateOfBirth, Email, PhoneNumber, Address, City, State, PostalCode, Country, Gender, BankVerificationNumber) 
	VALUES ( $1, $2, $3, $4, '1990-01-01', $5, '123-456-7890', '123 Elm St', 'New York', 'NY', '10001', 'USA', 'Male', 'BVN123456789')
	RETURNING customerid;`

	err3 := db.QueryRow(sqlStatement, loginID, firstName, lastName, middleName, email).Scan(&customerid)
	if err3 != nil {
		return err3
	}
	var accountid int
	sqlStatement2 := `
		INSERT INTO accounts (CustomerID, AccountNumber, AccountType, Balance, DateOpened, HideBalance, CURRENTTIMESTAMP)
		VALUES ($1, '1234567890', 'Individual', 1500.50, '2023-08-01', false, CURRENT_TIMESTAMP)
		RETURNING accountid;`

	err4 := db.QueryRow(sqlStatement2, customerid).Scan(&accountid)
	if err4 != nil {
		return err4
	}

	sqlStatement3 := `
	INSERT INTO message_info (AccountID, InfoMessage, MessageCode, CURRENTTIMESTAMP)
	VALUES ($1, 'We require you to complete a routine bank visit', 3, CURRENT_TIMESTAMP);`
	_, err5 := db.Exec(sqlStatement3, accountid)
	if err5 != nil {
		return err5
	}

	return nil
}

func CheckIfUserExisAlready(email string) bool {
	pgConnectionString := os.Getenv("PostgreConnectionString")
	// connect to postgres
	db, err := sql.Open("postgres", pgConnectionString)
	if err != nil {
		return false
	}
	defer db.Close()
	// test postgres connection
	if err := db.Ping(); err != nil {
		return false
	}

	row := db.QueryRow("SELECT COUNT(*) FROM customers WHERE email = $1", email)
	var count int
	if err := row.Scan(&count); err != nil {
		return false
	}

	return count > 0
}

func GetUserEmailFromPostgresDB(loginID string) (string, string, error) {
	pgConnectionString := os.Getenv("PostgreConnectionString")
	// connect to postgres
	db, err := sql.Open("postgres", pgConnectionString)
	if err != nil {
		return "", "Can not connect to postgres", err
	}
	defer db.Close()
	// test postgres connection
	if err := db.Ping(); err != nil {
		return "", "Can not ping postgres sever", err
	}

	row := db.QueryRow("SELECT email FROM customers WHERE loginid = $1", loginID)
	var email string
	if err := row.Scan(&email); err != nil {
		if err == sql.ErrNoRows {
			return "", "No rows were returned!", err
		} else {
			return "", "Error scanning row", err
		}
	}

	return email, "operation successful", nil
}

func GetDashBoardData(loginID string, w http.ResponseWriter) {

	pgConnectionString := os.Getenv("PostgreConnectionString")

	db, err := sql.Open("postgres", pgConnectionString)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Internal Server Error"))
		return
	}
	defer db.Close()

	if err := db.Ping(); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Internal Server Error"))
		return
	}

	row := db.QueryRow("SELECT customerid, email, firstname, lastname, middlename, dateofbirth, phonenumber, gender, bankverificationnumber FROM customers WHERE loginid = $1", loginID)
	var email, firstname, lastname, middlename, phonenumber, gender, bankverificationnumber string
	var dateofbirth time.Time
	var customerid int

	if err := row.Scan(&customerid, &email, &firstname, &lastname, &middlename, &dateofbirth, &phonenumber, &gender, &bankverificationnumber); err != nil {
		if err == sql.ErrNoRows {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Internal Server Error"))
			return
		} else {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Internal Server Error"))
			return
		}
	}
	row2 := db.QueryRow("SELECT accountid, accountnumber, balance, hidebalance, accounttype FROM accounts WHERE customerid = $1", customerid)
	var accoutid int
	var accountnumber, accounttype string
	var balance float32
	var hidebalance bool

	if err := row2.Scan(&accoutid, &accountnumber, &balance, &hidebalance, &accounttype); err != nil {
		if err == sql.ErrNoRows {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Internal Server Error"))
			return
		} else {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Internal Server Error"))
			return
		}
	}

	row3 := db.QueryRow("SELECT infomessage, messagecode FROM message_info WHERE accountid = $1", accoutid)
	var infomessage string
	var messagecode int
	if err := row3.Scan(&infomessage, &messagecode); err != nil {
		if err == sql.ErrNoRows {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Internal Server Error"))
			return
		} else {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Internal Server Error"))
			return
		}
	}

	var newDashBoardData DashBoardData
	newDashBoardData.Email = email
	newDashBoardData.FirstName = firstname
	newDashBoardData.LastName = lastname
	newDashBoardData.MiddleName = middlename
	newDashBoardData.AccountNumber = accountnumber
	newDashBoardData.Balance = balance
	newDashBoardData.HideBalance = hidebalance
	newDashBoardData.AccoutType = accounttype
	newDashBoardData.SepcialMessage.Message = infomessage
	newDashBoardData.SepcialMessage.MessageCode = messagecode

	newDashBoardData.ProfileData.BVN = bankverificationnumber
	formattedDate := dateofbirth.Format("2006-01-02")

	newDashBoardData.ProfileData.DateOfBirth = formattedDate
	newDashBoardData.ProfileData.Gender = gender
	newDashBoardData.ProfileData.PhoneNumber = phonenumber
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(newDashBoardData)
}

func MapSessionToJWT(session, jwt string) error {
	pgConnectionString := os.Getenv("PostgreConnectionString")

	db, err := sql.Open("postgres", pgConnectionString)
	if err != nil {
		return err
	}
	defer db.Close()

	if err := db.Ping(); err != nil {
		return err
	}

	if _, err := db.Exec(`INSERT INTO login_sessions (session_id, jwt_key, created_at, expires_at) 
						VALUES ($1, $2, NOW(), NOW() + INTERVAL '1 hours');`, session, jwt); err != nil {
		return err
	}
	return nil
}

func GetJWTToken(session string) (string, error) {
	pgConnectionString := os.Getenv("PostgreConnectionString")

	db, err := sql.Open("postgres", pgConnectionString)
	if err != nil {
		return "", err
	}
	defer db.Close()

	if err := db.Ping(); err != nil {
		return "", err
	}

	row := db.QueryRow("SELECT jwt_key FROM login_sessions WHERE session_id = $1", session)
	var jwt string
	if err := row.Scan(&jwt); err != nil {
		return "", err
	}

	return jwt, nil
}

func DeleteSession(session string, w http.ResponseWriter) {
	// This function will not stop the logout process if anything goes wrong
	pgConnectionString := os.Getenv("PostgreConnectionString")

	db, err := sql.Open("postgres", pgConnectionString)
	if err != nil {
		return
	}
	defer db.Close()

	if err := db.Ping(); err != nil {
		return
	}

	row := db.QueryRow("DELETE FROM login_sessions WHERE session_id = $1;", session)
	var jwt string
	if err := row.Scan(&jwt); err != nil {
		return
	}
}
