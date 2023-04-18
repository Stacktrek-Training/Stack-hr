CREATE DATABASE "STACK-HR";

 CREATE TABLE EMPLOYEES ("employee_id" SERIAL PRIMARY KEY, "firstname" VARCHAR(100), "middlename" VARCHAR(100), "lastname" VARCHAR(100), "address" VARCHAR(100), "contact" VARCHAR(100), "date_inserted" TIMESTAMP DEFAULT NOW(), "date_updated" TIMESTAMP DEFAULT NOW(), "job_title" VARCHAR(100));

//For Stack-Expense
 CREATE table CATEGORIES ("category_Id" SERIAL PRIMARY KEY, "category_Name" VARCHAR (50));

CREATE TABLE transaction (
    id SERIAL PRIMARY KEY,
    employee_Id INTEGER NOT NULL,
    date DATE NOT NULL,
    total_Amount NUMERIC(10, 2) NOT NULL,
    receipt_Image BYTEA,
    inserted_At TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_At TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reports (
    report_id SERIAL PRIMARY KEY,
    transaction_Id INTEGER NOT NULL,
    date DATE NOT NULL,
    category_Id INTEGER NOT NULL,
    description TEXT,
    amount NUMERIC(10, 2) NOT NULL
);


