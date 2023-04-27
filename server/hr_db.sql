CREATE DATABASE "STACK-HR";

CREATE TABLE "EMPLOYEES"(employee_id SERIAL PRIMARY KEY, first_name VARCHAR, middle_name VARCHAR, last_name VARCHAR, province VARCHAR, city VARCHAR, municipality VARCHAR, baranggay VARCHAR, zipcode VARCHAR,mobile_number VARCHAR, telephone_number VARCHAR, work_email VARCHAR, personal_email VARCHAR,emergency_contact_person VARCHAR, emergency_contact_email VARCHAR,emergency_contact_number VARCHAR, relationship VARCHAR, job_title VARCHAR, date_created DATE, date_updated DATE, status INTEGER DEFAULT 1, gender VARCHAR, marital_status VARCHAR, birthday DATE);

CREATE TABLE "ATTENDANCE" (attendance_id SERIAL PRIMARY KEY, time_in TIMESTAMP, time_out TIMESTAMP, working_hours DECIMAL, employee_id INTEGER UNIQUE REFERENCES "EMPLOYEES"(employee_id));

CREATE TABLE "SALARIES" (salary_id SERIAL PRIMARY KEY, salary DECIMAL, status INTEGER, date_created DATE, date_updated DATE, employee_id INTEGER UNIQUE REFERENCES "EMPLOYEES"(employee_id));

create table "SSS_DEDUCTIONS" (deduction_id SERIAL PRIMARY KEY, salary_range_1 DECIMAL, salary_range_2 DECIMAL, employee_contribution_sss DECIMAL, employer_contribution_sss DECIMAL, employee_contribution_ec DECIMAL, employer_contribution_ec DECIMAL, employee_contribution_mpf DECIMAL, employer_contribution_mpf DECIMAL,date_created DATE, date_updated DATE);

create table "PHILHEALTH_DEDUCTIONS" (deduction_id SERIAL PRIMARY KEY, salary_range_1 DECIMAL, salary_range_2 DECIMAL, monthly_total_contribution DECIMAL, date_created DATE, date_updated DATE);

create table "PAGIBIG_DEDUCTIONS" (deduction_id SERIAL PRIMARY KEY, salary_range_1 DECIMAL, salary_range_2 DECIMAL, employee_contribution DECIMAL, employer_contribution DECIMAL, date_created DATE, date_updated DATE);

-- CREATE TABLE "DEDUCTIONS" (deduction_id SERIAL PRIMARY KEY, deduction_name VARCHAR, description VARCHAR, amount DECIMAL, date_created DATE, date_updated DATE);

 CREATE table "CATEGORIES" (category_id SERIAL PRIMARY KEY, category_name VARCHAR);

 CREATE TABLE "TRANSACTIONS" (transaction_id SERIAL PRIMARY KEY, date DATE, employee_id INTEGER UNIQUE REFERENCES "employees"(employee_id), category_id INTEGER REFERENCES "CATEGORIES"(category_id), total_amount NUMERIC(10,2), receipt_image BYTEA, date_inserted DATE, date_updated DATE);

CREATE TABLE "REPORTS" (report_id SERIAL PRIMARY KEY,transaction_Id INTEGER UNIQUE REFERENCES "TRANSACTIONS" (transaction_id),date DATE, category_Id INTEGER REFERENCES "CATEGORIES"(category_id), description VARCHAR, amount NUMERIC(10, 2));




