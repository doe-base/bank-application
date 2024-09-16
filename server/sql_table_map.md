+-------------------+            +------------------+          +---------------------+
|     Customers     |            |      Accounts    |          |      Branches       |
+-------------------+            +------------------+          +---------------------+
| CustomerID (PK)   | <--------+ | AccountID (PK)   |          | BranchID (PK)       |
| FirstName         |            | CustomerID (FK)  |          | BranchName          |
| LastName          |            | AccountNumber    |          | Address             |
| DateOfBirth       |            | AccountType      |          | City                |
| Email             |            | Balance          |          | State               |
| PhoneNumber       |            | DateOpened       |          | PostalCode          |
| Address           |            | BranchID (FK)    | ----+    | Country             |
| City              |            +------------------+     |    | PhoneNumber         |
| State             |                                     |    +---------------------+
| PostalCode        |                                     |
| Country           |                                     |
+-------------------+                                     |
                                                          |
                                                          |
 +------------------+                                     |
 |  Transactions    |                                     |
 +------------------+                                     |
 | TransactionID (PK)|                                    |
 | AccountID (FK)    | <----------------------------------+
 | TransactionType   |
 | Amount            |
 | TransactionDate   |
 | Description       |
 +------------------+

+---------------------+             +-------------------+
|     Employees       |             |  AccountOwnership  |
+---------------------+             +-------------------+
| EmployeeID (PK)     |             | AccountID (FK)     |
| FirstName           |             | CustomerID (FK)    |
| LastName            |             +-------------------+
| DateOfBirth         |
| Email               |                  +--------------------+
| PhoneNumber         |                  |       Loans        |
| Position            |                  +--------------------+
| BranchID (FK)       |                  | LoanID (PK)        |
+---------------------+                  | CustomerID (FK)    |
                                         | LoanType           |
                                         | Amount             |
                                         | InterestRate       |
                                         | StartDate          |
                                         | EndDate            |
                                         | Status             |
                                         +--------------------+
                                                 |
                                                 |
                                                 V
                                          +--------------------+
                                          |      Payments      |
                                          +--------------------+
                                          | PaymentID (PK)     |
                                          | LoanID (FK)        |
                                          | PaymentDate        |
                                          | Amount             |
                                          | Method             |
                                          | Description        |
                                          +--------------------+
