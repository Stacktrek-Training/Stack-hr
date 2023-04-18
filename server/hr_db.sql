CREATE DATABASE "STACK-HR";


CREATE TABLE "EMPLOYEES"(employee_id SERIAL PRIMARY KEY, first_name VARCHAR, middle_name VARCHAR, last_name VARCHAR,province VARCHAR, city VARCHAR, municipality VARCHAR, baranggay VARCHAR, zipcode INTEGER,mobile_number INTEGER, telephone_number VARCHAR, work_email VARCHAR, personal_email VARCHAR,emergency_contact_person VARCHAR, emergency_contact_email VARCHAR,emergency_contact_number INTEGER, relationship VARCHAR, job_title VARCHAR, date_created DATE, date_updated DATE, status INTEGER);

 CREATE TABLE "SALARIES" ("salary_id" SERIAL PRIMARY KEY, "employee_id" INTEGER, "salary" DECIMAL, "status" INTEGER, "date_created" DATE, "date_updated" DATE);