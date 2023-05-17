CREATE DATABASE "STACK-HR";
-- stakPayroll
CREATE TABLE "EMPLOYEES" (employee_id SERIAL PRIMARY KEY, first_name VARCHAR, middle_name VARCHAR, last_name VARCHAR, address VARCHAR,mobile_number VARCHAR, telephone_number VARCHAR, work_email VARCHAR, personal_email VARCHAR,emergency_contact_person VARCHAR, emergency_contact_email VARCHAR,emergency_contact_number VARCHAR, relationship VARCHAR, job_title INTEGER REFERENCES "JOB_ROLES" (job_role_id), date_created DATE, date_updated DATE, status INTEGER DEFAULT 1, gender VARCHAR, marital_status VARCHAR, birthday DATE, employee_number VARCHAR, password VARCHAR, reimburse_limit  INTEGER);

CREATE TABLE "JOB_ROLES" (job_role_id SERIAL PRIMARY KEY, job_title VARCHAR, date_created DATE, date_updated DATE);

CREATE TABLE "attendance" ( attendance_id SERIAL PRIMARY KEY, time_in TIMESTAMP NOT NULL,time_out TIMESTAMP, working_hours DECIMAL, status VARCHAR, employee_id INTEGER REFERENCES "EMPLOYEES" (employee_id),employee_number VARCHAR);

CREATE TABLE "SALARIES" (salary_id SERIAL PRIMARY KEY, salary DECIMAL, status INTEGER, date_created DATE, date_updated DATE, employee_id INTEGER UNIQUE REFERENCES "EMPLOYEES"(employee_id));

create table "SSS_DEDUCTIONS" (deduction_id SERIAL PRIMARY KEY, salary_range_1 DECIMAL, salary_range_2 DECIMAL, employee_contribution_sss DECIMAL, employer_contribution_sss DECIMAL, employee_contribution_ec DECIMAL, employer_contribution_ec DECIMAL, employee_contribution_mpf DECIMAL, employer_contribution_mpf DECIMAL,date_created DATE, date_updated DATE);

create table "PHILHEALTH_DEDUCTIONS" (deduction_id SERIAL PRIMARY KEY, salary_range_1 DECIMAL, salary_range_2 DECIMAL, monthly_total_contribution DECIMAL, date_created DATE, date_updated DATE);

create table "PAGIBIG_DEDUCTIONS" (deduction_id SERIAL PRIMARY KEY, salary_range_1 DECIMAL, salary_range_2 DECIMAL, employee_contribution DECIMAL, employer_contribution DECIMAL, date_created DATE, date_updated DATE);

CREATE TABLE "DEDUCTIONS" (deduction_id SERIAL PRIMARY KEY, employee_id INTEGER, monthly_salary DECIMAL, philhealth_deduction DECIMAL, sss_deduction DECIMAL, pagibig_deduction DECIMAL, date_created DATE, date_updated DATE);


CREATE DATABASE "STACK-HR";
-- stackExpense

 CREATE table "CATEGORIES" (category_id SERIAL PRIMARY KEY, category_name VARCHAR);

CREATE TABLE "EXPENSES" (expense_id SERIAL PRIMARY KEY, category VARCHAR, amount NUMERIC(10, 2), receipt BYTEA, date_inserted DATE, date_updated DATE, date DATE);

ALTER TABLE "EXPENSES" ALTER COLUMN receipt TYPE TEXT;




