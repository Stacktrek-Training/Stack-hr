CREATE DATABASE "STACK-HR";

CREATE TABLE "EMPLOYEES"(employee_id SERIAL PRIMARY KEY, first_name VARCHAR, middle_name VARCHAR, last_name VARCHAR, province VARCHAR, city VARCHAR, municipality VARCHAR, baranggay VARCHAR, zipcode VARCHAR,mobile_number VARCHAR, telephone_number VARCHAR, work_email VARCHAR, personal_email VARCHAR,emergency_contact_person VARCHAR, emergency_contact_email VARCHAR,emergency_contact_number VARCHAR, relationship VARCHAR, job_title VARCHAR, date_created DATE, date_updated DATE, status INTEGER DEFAULT 1, gender VARCHAR, marital_status VARCHAR, birthday DATE);

CREATE TABLE "SALARIES" (salary_id SERIAL PRIMARY KEY, salary DECIMAL, status INTEGER, date_created DATE, date_updated DATE, employee_id INTEGER UNIQUE REFERENCES "EMPLOYEES"(employee_id));

CREATE TABLE "DEDUCTIONS" (deduction_id SERIAL PRIMARY KEY, deduction_name VARCHAR, description VARCHAR, amount DECIMAL, date_created DATE, date_updated DATE);

 CREATE table "CATEGORIES" (category_id SERIAL PRIMARY KEY, category_name VARCHAR);

 CREATE TABLE "TRANSACTIONS" (transaction_id SERIAL PRIMARY KEY, date DATE, employee_id INTEGER UNIQUE REFERENCES "employees"(employee_id), category_id INTEGER REFERENCES "CATEGORIES"(category_id), total_amount NUMERIC(10,2), receipt_image BYTEA, date_inserted DATE, date_updated DATE);

CREATE TABLE "REPORTS" (report_id SERIAL PRIMARY KEY,transaction_Id INTEGER UNIQUE REFERENCES "TRANSACTIONS" (transaction_id),date DATE, category_Id INTEGER REFERENCES "CATEGORIES"(category_id), description VARCHAR, amount NUMERIC(10, 2);





