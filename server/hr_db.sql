CREATE DATABASE "STACK-HR";

 CREATE TABLE EMPLOYEES ("employee_id" SERIAL PRIMARY KEY, "firstname" VARCHAR(100), "middlename" VARCHAR(100), "lastname" VARCHAR(100), "address" VARCHAR(100), "contact" VARCHAR(100), "date_inserted" TIMESTAMP DEFAULT NOW(), "date_updated" TIMESTAMP DEFAULT NOW(), "job_title" VARCHAR(100));