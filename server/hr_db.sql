CREATE DATABASE "STACK-HR";

CREATE TABLE "EMPLOYEES"(employee_id SERIAL PRIMARY KEY, first_name VARCHAR, middle_name VARCHAR, last_name VARCHAR,province VARCHAR, city VARCHAR, municipality VARCHAR, baranggay VARCHAR, zipcode INTEGER,mobile_number VARCHAR, telephone_number VARCHAR, work_email VARCHAR, personal_email VARCHAR,emergency_contact_person VARCHAR, emergency_contact_email VARCHAR,emergency_contact_number VARCHAR, relationship VARCHAR, job_title VARCHAR, date_created DATE, date_updated DATE, status INTEGER);

CREATE TABLE "SALARIES" (salary_id SERIAL PRIMARY KEY, salary DECIMAL, status INTEGER, date_created DATE, date_updated DATE, employee_id INTEGER UNIQUE REFERENCES "EMPLOYEES"(employee_id));
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





