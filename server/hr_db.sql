CREATE DATABASE "STACK-HR";

<<<<<<< HEAD
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


=======

CREATE TABLE "EMPLOYEES"(employee_id SERIAL PRIMARY KEY, first_name VARCHAR, middle_name VARCHAR, last_name VARCHAR,province VARCHAR, city VARCHAR, municipality VARCHAR, baranggay VARCHAR, zipcode INTEGER,mobile_number INTEGER, telephone_number VARCHAR, work_email VARCHAR, personal_email VARCHAR,emergency_contact_person VARCHAR, emergency_contact_email VARCHAR,emergency_contact_number INTEGER, relationship VARCHAR, job_title VARCHAR, date_created DATE, date_updated DATE, status INTEGER);

 CREATE TABLE "SALARIES" ("salary_id" SERIAL PRIMARY KEY, "employee_id" INTEGER, "salary" DECIMAL, "status" INTEGER, "date_created" DATE, "date_updated" DATE);
>>>>>>> c2c20088a622e87d3bcf03517b1b2bd1d51c4ca7
