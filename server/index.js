const express = require("express");
const cors = require("cors");
const pool = require("./database");
const app = express();
const moment = require("moment");

app.use(cors());
app.use(express.json());



//LOGIN PAGE
  app.post("/employee-login", async (req, res) => {
    try {
      const { employee_number, password } = req.body;
      const login = await pool.query(
        `SELECT e.*, j.job_title FROM "EMPLOYEES" e JOIN "JOB_ROLES" j ON e.job_title = j.job_role_id WHERE e.employee_number = $1 AND password = $2`,
        [employee_number, password]
      );

      if (login.rows.length === 1) {
        const employee = login.rows;
        console.log(`Employee ${employee} logged in`);
        res.json(employee);
      }
      
      else {
        res.status(401).send("Invalid number or password.");
      }
    }
    
    catch (error) {
      console.error(error.message);
    }
  });


//EMPLOYEES: GET ALL EMPLOYEES
  app.get("/employee", async (req, res) => {
    try {
      const getEmployee = await pool.query(
        `SELECT e.*, j.job_title, j.job_role_id FROM "EMPLOYEES" e JOIN "JOB_ROLES" j ON e.job_title = j.job_role_id ORDER BY employee_id ASC`
      );
      res.json(getEmployee.rows);
    } catch (error) {
      console.error(error.message);
    }
  });


//EMPLOYEES: GET EMPLOYEES
  app.get("/employee/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const getEMP = await pool.query(
        `SELECT * FROM "EMPLOYEES" WHERE employee_id=$1`,
        [id]
      );
      res.json(getEMP.rows);
    } catch (error) {
      console.error(error.message);
    }
  });


//EMPLOYEES: ADD EMPLOYEE
  app.post("/employee", async (req, res) => {
    try {
      const {
        first_name,
        middle_name,
        last_name,
        address,
        mobile_number,
        telephone_number,
        work_email,
        personal_email,
        emergency_contact_person,
        emergency_contact_email,
        emergency_contact_number,
        relationship,
        job_title,
        gender,
        marital_status,
        birthday,
      } = req.body;


      //PASSWORD GENERATOR
        const crypto = require("crypto");


      function generateRandomPassword() {
        //GENERATING A RANDOM PASSWORD
          const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          const symbols = "!@#$%^&*()_-+=";
          let password = "";
          password += letters[Math.floor(Math.random() * letters.length)];
          password += letters[Math.floor(Math.random() * letters.length)];
          password += symbols[Math.floor(Math.random() * symbols.length)];
          for (let i = 0; i < 5; i++) {
            password += letters[Math.floor(Math.random() * letters.length)];
        }


        //RANDOMLY SHUFFLE THE PASSWORD CHARACTERS
          password = password
            .split("")
            .sort(() => Math.random() - 0.5)
            .join("");
          return password;
      }

      const password = generateRandomPassword();

      //GETTING THE LATEST EMPLOYEE NUMBER FROM THE DATABASE
        const { rows } = await pool.query(
          `SELECT employee_number FROM "EMPLOYEES" ORDER BY employee_id DESC LIMIT 1`
        );
        let code = "";
        if (rows.length > 0) {
          const latestEmployeeNumber = rows[0].employee_number;
          if (latestEmployeeNumber) {
            const counter = parseInt(latestEmployeeNumber.substring(3), 10);
            code = "ST-" + ("0000" + (counter + 1)).slice(-4);
          } else {
            code = "ST-0001";
          }
        } else {
          code = "ST-0001";
        }
      

      //INSERTING THE EMPLOYEE IN THE DATABASE
        const insertEmployee = await pool.query(
          `INSERT INTO "EMPLOYEES"(first_name,middle_name,last_name,address,mobile_number,telephone_number,work_email,personal_email,emergency_contact_person,emergency_contact_email,emergency_contact_number,relationship,job_title,date_created,gender,marital_status,birthday,employee_number,password)VALUES($1, $2, $3, $4, $5,$6,$7,$8,$9,$10,$11,$12,$13,CURRENT_TIMESTAMP,$14,$15,$16,$17,$18) RETURNING *`,
          [
            first_name,
            middle_name,
            last_name,
            address,
            mobile_number,
            telephone_number,
            work_email,
            personal_email,
            emergency_contact_person,
            emergency_contact_email,
            emergency_contact_number,
            relationship,
            job_title,
            gender,
            marital_status,
            birthday,
            code,
            password,
          ]
        );
          res.json("Inserted data");
        } catch (error) {
          console.error(error.message);
        }
  });


//EMPLOYEES: ADD EMPLOYEE
  app.put("/employee/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const {
        first_name,
        middle_name,
        last_name,
        address,
        mobile_number,
        telephone_number,
        work_email,
        personal_email,
        emergency_contact_person,
        emergency_contact_email,
        emergency_contact_number,
        relationship,
        job_title,
        gender,
        marital_status,
        birthday,
      } = req.body;
      const updateEmp = await pool.query(
        `UPDATE "EMPLOYEES" SET first_name=$1,middle_name=$2,last_name=$3,address=$4,mobile_number=$5,telephone_number=$6,work_email=$7,personal_email=$8,emergency_contact_person=$9,emergency_contact_email=$10,emergency_contact_number=$11,relationship=$12,job_title=$13,date_updated=CURRENT_TIMESTAMP,gender=$14,marital_status=$15,birthday=$16 WHERE employee_id =$17`,
        [
          first_name,
          middle_name,
          last_name,
          address,
          mobile_number,
          telephone_number,
          work_email,
          personal_email,
          emergency_contact_person,
          emergency_contact_email,
          emergency_contact_number,
          relationship,
          job_title,
          gender,
          marital_status,
          birthday,
          id,
        ]
      );
      res.json(updateEmp.rows);
    } catch (error) {
      console.error(error.message);
    }
  });


//EMPLOYEES: DELETE EMPLOYEE
app.delete("/employee/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFromSalaries = await pool.query(
      `DELETE FROM "SALARIES" WHERE employee_id=$1`,
      [id]
    );
    const deleteEmp = await pool.query(
      `DELETE FROM "EMPLOYEES" WHERE employee_id = $1 `,
      [id]
    );
    const deleteFromDeductions = await pool.query(
      `DELETE FROM "DEDUCTIONS" WHERE employee_id = $1 `,
      [id]
    );
    res.json("Employee deleted");
  } catch (error) {
    console.error(error.message);
  }
});


//JOB ROLE: ADD JOB ROLE
  app.post("/jobroles", async (req, res) => {
    try {
      const { job_title } = req.body;
      const createJobrole = await pool.query(
        `INSERT INTO "JOB_ROLES" (job_title, date_created) VALUES ($1,CURRENT_TIMESTAMP) RETURNING *`,
        [job_title]
      );
      res.json(createJobrole.rows);
    } catch (error) {
      console.error(error.message);
    }
  });


//JOBROLE: GET JOBROLES
  app.get("/jobroles", async (req, res) => {
    try {
      const getJobroles = await pool.query(`SELECT * FROM "JOB_ROLES"`);
      res.json(getJobroles.rows);
    } catch (error) {
      console.error(error.message);
    }
  });


//JOBROLE: UPDATE JOBROLE
  app.put("/jobroles/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { job_title } = req.body;
      const updataJobrole = await pool.query(
        `UPDATE "JOB_ROLES" SET job_title = $1, date_updated = CURRENT_TIMESTAMP WHERE job_role_id = $2`,
        [job_title, id]
      );
      res.json("data updated");
    } catch (error) {
      console.error(error.message);
    }
  });


//JOB ROLE: DELETE JOBROLE
  app.delete("/jobroles/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query(`DELETE FROM "JOB_ROLES" WHERE job_role_id = $1`, [id]);
      res.json("data deleted");
    } catch (error) {
      console.error(error.message);
    }
  });


//SALARY: GET EMPLOYEE DATA THAT ARE NOT PRESENT IN SALARIES TABLE
  app.get("/employees", async (req, res) => {
    try {
      const getEmp = await pool.query(`SELECT e.*
        FROM "EMPLOYEES" e
        LEFT JOIN "SALARIES" s
        ON e.employee_id = s.employee_id
        WHERE s.employee_id IS NULL`);
      res.json(getEmp.rows);
    } catch (error) {
      console.error(error.message);
    }
  });

  app.get("/emp", async (req, res) => {
    try {
      const getEmp = await pool.query(`SELECT e.*
        FROM "EMPLOYEES" e
        LEFT JOIN "DEDUCTIONS" d
        ON e.employee_id = d.employee_id
        WHERE d.employee_id IS NULL`);
      res.json(getEmp.rows);
    } catch (error) {
      console.error(error.message);
    }
  });


//SALARY: ADD SALARY
  app.post("/salaries/", async (req, res) => {
    try {
      const { employee_id, salary, rate_type, required_hours } = req.body;
      const insertSalary = await pool.query(
        `INSERT INTO "SALARIES" (employee_id, salary, status, rate_type, hours_required, date_created) VALUES($1, $2, 1,$3,$4, CURRENT_TIMESTAMP) RETURNING *`,
        [employee_id, salary, rate_type, required_hours]
      );
      res.json("Data Inserted");

    } catch (error) {
      console.error(error.message);
    }
  });


//SALARY: GET SALARIES
  app.get("/salaries", async (req, res) => {
    try {
      const getSalaries =
        await pool.query(`SELECT s.*, e.first_name, e.last_name, e.middle_name
        FROM "SALARIES" s
        JOIN "EMPLOYEES" e ON s.employee_id = e.employee_id
        ORDER BY e.last_name`);
      res.json(getSalaries.rows);
    } catch (error) {
      console.error(error.message);
    }
  });


//SALARY: UPDATE SALARIES
  app.put("/salaries/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { salary, rate_type, required_hours } = req.body;
      const updateSalary = await pool.query(
        `UPDATE "SALARIES" SET salary = $1,rate_type=$3, hours_required=$4, date_updated = CURRENT_TIMESTAMP WHERE employee_id=$2`,
        [salary, id, rate_type, required_hours]
      );
      res.json("Updated successfully");
    } catch (error) {
      console.error(error.message);
    }
  });


//PHILHEALTH: ADD DEDUCTIONS
  app.post("/philhealth/", async (req, res) => {
    try {
      const { salary_range_1, salary_range_2, monthly_total_contribution } =
        req.body;

      const insertPhilheath = await pool.query(
        `INSERT INTO "PHILHEALTH_DEDUCTIONS" (salary_range_1, salary_range_2, monthly_total_contribution, date_created)VALUES($1,$2,$3,CURRENT_TIMESTAMP) RETURNING *`,
        [salary_range_1, salary_range_2, monthly_total_contribution]
      );
      res.json(insertPhilheath.rows);
    } catch (error) {
      console.error(error.message);
    }
  });

  
//PHILHEALTH: GET DEDUCTIONS
  app.get("/philhealth", async (req, res) => {
    try {
      const getAll = await pool.query(
        `SELECT * FROM "PHILHEALTH_DEDUCTIONS" ORDER BY salary_range_1`
      );
      res.json(getAll.rows);
    } catch (error) {
      console.error(error.message);
    }
  });


//PHILHEALTH: EDIT DEDUCTIONS
  app.put("/philhealth/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { salary_range_1, salary_range_2, monthly_total_contribution } =
        req.body;
      const updatePhilhealth = await pool.query(
        `UPDATE "PHILHEALTH_DEDUCTIONS" SET salary_range_1 = $1, salary_range_2 = $2, monthly_total_contribution =$3, date_updated = CURRENT_TIMESTAMP WHERE deduction_id = $4`,
        [salary_range_1, salary_range_2, monthly_total_contribution, id]
      );
      res.json("updated");
    } catch (error) {
      console.error(error.message);
    }
  });


//PAG-IBIG: ADD DEDUCTIONS
  app.post("/pag-ibig", async (req, res) => {
    try {
      const {
        salary_range_1, salary_range_2,
        employee_contribution, employer_contribution,
      } = req.body;
      
      const insertRange = await pool.query(
        `INSERT INTO "PAGIBIG_DEDUCTIONS" (salary_range_1, salary_range_2, employee_contribution, employer_contribution, date_created)VALUES($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *`,
        [
          salary_range_1, salary_range_2,
          employee_contribution, employer_contribution,
        ]
      );
      res.json(insertRange.rows);
    } catch (error) {
      console.error(error.message);
    }
  });


//PAG-IBIG: GET DEDUCTIONS
  app.get("/pag-ibig", async (req, res) => {
    try {
      const getPagibig = await pool.query(`SELECT * FROM "PAGIBIG_DEDUCTIONS" ORDER BY salary_range_1`);
      res.json(getPagibig.rows);
    } catch (error) {
      console.error(error.message);
    }
  });


//PAG-IBIG: EDIT DEDUCTIONS
  app.put("/pag-ibig/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const {
        salary_range_1, salary_range_2,
        employee_contribution, employer_contribution,
      } = req.body;

      await pool.query(
        `UPDATE "PAGIBIG_DEDUCTIONS" SET salary_range_1 = $1, salary_range_2 = $2, employee_contribution = $3, employer_contribution =$4, date_updated = CURRENT_TIMESTAMP WHERE deduction_id = $5`,
        [
          salary_range_1, salary_range_2,
          employee_contribution, employer_contribution,
          id,
        ]
      );
      res.json("data updated");
    } catch (error) {
      console.error(error.message);
    }
  });


//SSS: ADD DEDUCTIONS
  app.post("/sss", async (req, res) => {
    try {
      const {
        salary_range_1, salary_range_2,
        employee_contribution_sss, employer_contribution_sss,
        employee_contribution_ec, employer_contribution_ec,
        employee_contribution_mpf, employer_contribution_mpf,
      } = req.body;

      const insertData = await pool.query(
        `INSERT INTO "SSS_DEDUCTIONS" (salary_range_1, salary_range_2, employee_contribution_sss, employer_contribution_sss, employee_contribution_ec, employer_contribution_ec, employee_contribution_mpf, employer_contribution_mpf,date_created)VALUES($1,$2,$3,$4,$5,$6,$7,$8,CURRENT_TIMESTAMP) RETURNING *`,
        [
          salary_range_1, salary_range_2,
          employee_contribution_sss, employer_contribution_sss,
          employee_contribution_ec, employer_contribution_ec,
          employee_contribution_mpf, employer_contribution_mpf,
        ]
      );
      res.json(insertData.rows);
    } catch (error) {
      console.error(error.message);
    }
  });


//SSS: GET DEDUCTIONS
  app.get("/sss", async (req, res) => {
    try {
      const getAll = await pool.query(
        `SELECT * FROM "SSS_DEDUCTIONS" ORDER BY salary_range_1`
      );
      res.json(getAll.rows);
    } catch (error) {
      console.error(error.message);
    }
  });


//SSS: EDIT DEDUCTIONS
  app.put("/sss/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const {
        salary_range_1, salary_range_2,
        employee_contribution_sss, employer_contribution_sss,
        employee_contribution_ec, employer_contribution_ec,
        employee_contribution_mpf, employer_contribution_mpf,
      } = req.body;

      await pool.query(
        `UPDATE "SSS_DEDUCTIONS" SET salary_range_1=$1, salary_range_2=$2, employee_contribution_sss=$3, employer_contribution_sss=$4, employee_contribution_ec=$5, employer_contribution_ec=$6,employee_contribution_mpf=$7, employer_contribution_mpf=$8, date_updated=CURRENT_TIMESTAMP WHERE deduction_id = $9`,
        [
          salary_range_1, salary_range_2,
          employee_contribution_sss, employer_contribution_sss,
          employee_contribution_ec, employer_contribution_ec,
          employee_contribution_mpf, employer_contribution_mpf,
          id,
        ]
      );
      res.json("data updated");
    } catch (error) {
      console.error(error.message);
    }
  });


//WITHHOLDING TAX: ADD DEDUCTIONS
  app.post("/withholding_tax", async (req, res) => {
    try {
      const {
        taxable_income_range_1, taxable_income_range_2,
        salary_type, percentage,
        amount_1, amount_2,
      } = req.body;
      
      const insertRange = await pool.query(
        `INSERT INTO "WITHHOLDING_TAX" (taxable_income_range_1, taxable_income_range_2, salary_type, percentage, amount_1, amount_2) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
        [
          taxable_income_range_1, taxable_income_range_2,
          salary_type, percentage,
          amount_1, amount_2,
        ]
      );
      res.json(insertRange.rows);
    } catch (error) {
      console.error(error.message);
    }
  });


//WITHHOLDING TAX: GET DEDUCTIONS
  app.get("/withholding_tax", async (req, res) => {
    try {
      const getAll = await pool.query(
        `SELECT * FROM "WITHHOLDING_TAX" ORDER BY salary_type, taxable_income_range_1 ASC`
      );
      res.json(getAll.rows);
    } catch (error) {
      console.error(error.message);
    }
  });


//WITHHOLDING TAX: EDIT DEDUCTIONS
  app.put("/withholding_tax/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const {
          taxable_income_range_1, taxable_income_range_2,
          salary_type, percentage,
          amount_1, amount_2,
      } = req.body;

      await pool.query(
        `UPDATE "WITHHOLDING_TAX" SET taxable_income_range_1 = $1, taxable_income_range_2 = $2, salary_type = $3, percentage = $4, amount_1 = $5, amount_2 = $6 WHERE deduction_id = $7`,
        [
          taxable_income_range_1, taxable_income_range_2,
          salary_type, percentage,
          amount_1, amount_2,
          id,
        ]
      );
      res.json("data updated");
    } catch (error) {
      console.error(error.message);
    }
  });


//PAYROLL: GET PAYROLLS
  app.get("/payrolls", async (req, res) => {
      try {
        const getAll = await pool.query(
          `SELECT pf.*, p.*, s.salary, s.rate_type, e.first_name, e.last_name, e.middle_name, j.job_title
          FROM "PAYROLL_FORM" pf
          JOIN "PAYROLLS" p ON pf.employee_id = p.employee_id
          JOIN "EMPLOYEES" e ON p.employee_id = e.employee_id
          JOIN "SALARIES" s ON s.employee_id = e.employee_id
          JOIN "JOB_ROLES" j ON j.job_role_id = e.job_title
          ORDER BY pf.date_created`
        );
        res.json(getAll.rows);
      } catch (error) {
        console.error(error.message);
      }
    });


//PAYROLL: ADD PAYROLL
  app.post("/payrolls", async (req, res) => {
    try {
      const {
        employee_id, days_attended, overtime, holidays,
        thirteenth_month, allowance, other_bonus,
      } = req.body;

      //INSERT DATA TO PAYROLL_FORM TABLE
        const insertPayrollForm = await pool.query(
          `INSERT INTO "PAYROLL_FORM"
            (employee_id, days_attended, overtime, holidays, thirteenth_month, allowance, other_bonus, date_created, time_created)
            VALUES ($1, $2, $3, $4, $5, $6, $7, CURRENT_DATE, CURRENT_TIME) RETURNING *`,
          [
            employee_id, days_attended, overtime, holidays,
            thirteenth_month, allowance, other_bonus,
          ]
        ); res.json(insertPayrollForm.rows);

      //GET EMPLOYEE'S SALARY, SALARY RATE AND TOTAL GROSS PAY
        const getSalary = await pool.query(
          `SELECT salary, rate_type FROM "SALARIES" WHERE employee_id=$1`,
          [employee_id]
        );
        const {salary, rate_type} = getSalary.rows[0];

        const gross_pay = parseFloat(salary) * (parseFloat(days_attended) * 8);
        const overtime_pay = parseFloat(salary) * parseFloat(overtime);
        const holiday_pay = parseFloat(salary) * (parseFloat(holidays) * 8);
        const total_gross_pay = gross_pay + overtime_pay + holiday_pay;

      //GET PAGIBIG DEDUCTIONS
        const getPagIbigDeductions = await pool.query(
          `SELECT employee_contribution FROM "PAGIBIG_DEDUCTIONS"
            WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
          [total_gross_pay]
        );

        const { employee_contribution } = getPagIbigDeductions.rows[0];

        let total_pagibig_deductions = 0;
        if (total_gross_pay >= 5000) {
          total_pagibig_deductions = 100;
        } else {
          total_pagibig_deductions =
            total_gross_pay * (parseFloat(employee_contribution) * 0.01);
        }

      //GET PHILHEALTH DEDUCTIONS
        const getPhilHealthDeductions = await pool.query(
          `SELECT monthly_total_contribution FROM "PHILHEALTH_DEDUCTIONS"
            WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
          [total_gross_pay]
        );

        const { monthly_total_contribution} = getPhilHealthDeductions.rows[0];

        let total_philhealth_deductions = 0;
        if (total_gross_pay <= 10000) {
          total_philhealth_deductions =
            10000 * (parseFloat(monthly_total_contribution) * 0.01) / 2;
        }
        
        else if (total_gross_pay >= 10001 && total_gross_pay <= 79999) {
          total_philhealth_deductions =
            (total_gross_pay * (parseFloat(monthly_total_contribution) * 0.01)) / 2;
        }
        
        else if (total_gross_pay >= 80000) {
          total_philhealth_deductions =
            80000 * (parseFloat(monthly_total_contribution) * 0.01) / 2;
        }

      //GET SSS DEDUCTIONS
        const getSSSDeductions = await pool.query(
          `SELECT employee_contribution_sss, employee_contribution_ec, employee_contribution_mpf FROM "SSS_DEDUCTIONS"
            WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
          [total_gross_pay]
        );

        const {
          employee_contribution_sss, employee_contribution_ec, employee_contribution_mpf,
        } = getSSSDeductions.rows[0];

        let total_sss_deductions = parseFloat(employee_contribution_sss) + parseFloat(employee_contribution_ec) + parseFloat(employee_contribution_mpf);

      //GET SALARY DEDUCTIONS BASED ON EMPLOYEE'S SALARY TYPE
        if (rate_type === "Weekly") {
          total_pagibig_deductions /= 4;
          total_philhealth_deductions /= 4;
          total_sss_deductions /= 4;
        }

        else if (rate_type === "Semi-Monthly") {
          total_pagibig_deductions /= 2;
          total_philhealth_deductions /= 2;
          total_sss_deductions /= 2;
        }

        else if (rate_type === "Monthly") {
          total_pagibig_deductions += 0;
          total_philhealth_deductions += 0;
          total_sss_deductions += 0;
        }

      //GET TAXABLE INCOME AND WITHHOLDING TAX
        const deductions = total_pagibig_deductions + total_philhealth_deductions + total_sss_deductions;
        const taxable_income = total_gross_pay - deductions;

        const getWithholdingTax = await pool.query(
          `SELECT percentage, amount_1, amount_2 FROM "WITHHOLDING_TAX"
            WHERE $1 BETWEEN taxable_income_range_1 AND taxable_income_range_2 AND salary_type=$2`,
          [taxable_income, rate_type]
        );

        const {
          percentage, amount_1, amount_2,
        } = getWithholdingTax.rows[0];

        let withholding_tax = (parseFloat(amount_1) + (taxable_income - parseFloat(amount_2))) * (parseFloat(percentage) * 0.01);

      //GET NET PAY AND TOTAL BONUS
        const total_bonus = parseFloat(thirteenth_month) + parseFloat(allowance) + parseFloat(other_bonus);
        const net_pay = (taxable_income - withholding_tax) + total_bonus;

      //INSERT DATA TO PAYROLLS TABLE
        const insertPayrolls = await pool.query(
          `INSERT INTO "PAYROLLS"
            (employee_id, gross_pay, overtime_pay, holiday_pay, total_gross_pay, pagibig_deductions, philhealth_deductions, sss_deductions, taxable_income, withholding_tax, total_bonus, net_pay)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
          [
            employee_id, gross_pay, overtime_pay, holiday_pay, total_gross_pay,
            total_pagibig_deductions, total_philhealth_deductions, total_sss_deductions,
            taxable_income, withholding_tax, total_bonus, net_pay,
          ]
        ); res.json(insertPayrolls.rows);

      //CODE TO PREVENT DUPLICATES IN THE PAYROLL TABLE
        const current_date = new Date();
        const get_current_time = new Date();
        const hours = get_current_time.getHours();
        const minutes = get_current_time.getMinutes();
        const seconds = get_current_time.getSeconds();
        const  current_time = `${hours}:${minutes}:${seconds}`;

        const existingRecord = await pool.query(
          'SELECT * FROM "PAYROLL_FORM" WHERE employee_id = $1 AND date_created = $2 AND time_created = $3',
          [employee_id, current_date, current_time,]
        );

        if (existingRecord.length > 0) {
          return res.status(409).json({ error: 'The payroll for this employee already exists.' });
        }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


//PAYROLL: EDIT PAYROLL
  app.put("/payrolls/:employee_id", async (req, res) => {
    try {
      const { employee_id } = req.params;
      const {
        days_attended, overtime, holidays,
        thirteenth_month, allowance, other_bonus,
      } = req.body;

      await pool.query(
        `UPDATE "PAYROLL_FORM" SET employee_id=$1, days_attended=$2, overtime=$3, holidays=$4, thirteenth_month=$5, allowance=$6, other_bonus=$7, date_updated=CURRENT_DATE, time_updated=CURRENT_TIME WHERE employee_id = $1`,
        [
          employee_id, days_attended, overtime, holidays,
          thirteenth_month, allowance, other_bonus,
        ]
      ); res.json("data updated");

    //GET EMPLOYEE'S SALARY, SALARY RATE AND TOTAL GROSS PAY
      const getSalary = await pool.query(
        `SELECT salary, rate_type FROM "SALARIES" WHERE employee_id=$1`,
        [employee_id]
      );
      const {salary, rate_type} = getSalary.rows[0];

      const gross_pay = parseFloat(salary) * (parseFloat(days_attended) * 8);
      const overtime_pay = parseFloat(salary) * parseFloat(overtime);
      const holiday_pay = parseFloat(salary) * (parseFloat(holidays) * 8);
      const total_gross_pay = gross_pay + overtime_pay + holiday_pay;

    //GET PAGIBIG DEDUCTIONS
      const getPagIbigDeductions = await pool.query(
        `SELECT employee_contribution FROM "PAGIBIG_DEDUCTIONS"
          WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
        [total_gross_pay]
      );

      const { employee_contribution } = getPagIbigDeductions.rows[0];

      let total_pagibig_deductions = 0;
      if (total_gross_pay >= 5000) {
        total_pagibig_deductions = 100;
      } else {
        total_pagibig_deductions =
          total_gross_pay * (parseFloat(employee_contribution) * 0.01);
      }

    //GET PHILHEALTH DEDUCTIONS
      const getPhilHealthDeductions = await pool.query(
        `SELECT monthly_total_contribution FROM "PHILHEALTH_DEDUCTIONS"
          WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
        [total_gross_pay]
      );

      const { monthly_total_contribution} = getPhilHealthDeductions.rows[0];

      let total_philhealth_deductions = 0;
      if (total_gross_pay <= 10000) {
        total_philhealth_deductions =
          10000 * (parseFloat(monthly_total_contribution) * 0.01) / 2;
      }
        
      else if (total_gross_pay >= 10001 && total_gross_pay <= 79999) {
        total_philhealth_deductions =
          (total_gross_pay * (parseFloat(monthly_total_contribution) * 0.01)) / 2;
      }
        
      else if (total_gross_pay >= 80000) {
        total_philhealth_deductions =
          80000 * (parseFloat(monthly_total_contribution) * 0.01) / 2;
      }

    //GET SSS DEDUCTIONS
      const getSSSDeductions = await pool.query(
        `SELECT employee_contribution_sss, employee_contribution_ec, employee_contribution_mpf FROM "SSS_DEDUCTIONS"
          WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
        [total_gross_pay]
      );

      const {
        employee_contribution_sss, employee_contribution_ec, employee_contribution_mpf,
      } = getSSSDeductions.rows[0];

      let total_sss_deductions = parseFloat(employee_contribution_sss) + parseFloat(employee_contribution_ec) + parseFloat(employee_contribution_mpf);

    //GET SALARY DEDUCTIONS BASED ON EMPLOYEE'S SALARY TYPE
      if (rate_type === "Weekly") {
        total_pagibig_deductions /= 4;
        total_philhealth_deductions /= 4;
        total_sss_deductions /= 4;
      }

      else if (rate_type === "Semi-Monthly") {
        total_pagibig_deductions /= 2;
        total_philhealth_deductions /= 2;
        total_sss_deductions /= 2;
      }

      else if (rate_type === "Monthly") {
        total_pagibig_deductions += 0;
        total_philhealth_deductions += 0;
        total_sss_deductions += 0;
      }

    //GET TAXABLE INCOME AND WITHHOLDING TAX
      const deductions = total_pagibig_deductions + total_philhealth_deductions + total_sss_deductions;
      const taxable_income = total_gross_pay - deductions;

      const getWithholdingTax = await pool.query(
        `SELECT percentage, amount_1, amount_2 FROM "WITHHOLDING_TAX"
          WHERE $1 BETWEEN taxable_income_range_1 AND taxable_income_range_2 AND salary_type=$2`,
        [taxable_income, rate_type]
      );

      const {
        percentage, amount_1, amount_2,
      } = getWithholdingTax.rows[0];

      let withholding_tax = (parseFloat(amount_1) + (taxable_income - parseFloat(amount_2))) * (parseFloat(percentage) * 0.01);

    //GET NET PAY AND TOTAL BONUS
      const total_bonus = parseFloat(thirteenth_month) + parseFloat(allowance) + parseFloat(other_bonus);
      const net_pay = (taxable_income - withholding_tax) + total_bonus;

    //INSERT DATA TO PAYROLLS TABLE
      await pool.query(
        `UPDATE "PAYROLLS" SET employee_id=$1, gross_pay=$2, overtime_pay=$3, holiday_pay=$4, total_gross_pay=$5, pagibig_deductions=$6, philhealth_deductions=$7, sss_deductions=$8, taxable_income=$9, withholding_tax=$10, total_bonus=$11, net_pay=$12 WHERE employee_id = $1`,
        [
          employee_id, gross_pay, overtime_pay, holiday_pay, total_gross_pay,
          total_pagibig_deductions, total_philhealth_deductions, total_sss_deductions,
          taxable_income, withholding_tax, total_bonus, net_pay,
        ]
      ); res.json("data updated");
    } catch (error) {
      console.error(error.message);
    }
  });








  

//stack-Expense
//get category by id
app.get("/category/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getCAT = await pool.query(
      `SELECT * FROM "CATEGORIES" WHERE category_id=$1`,
      [id]
    );
    res.json(getCAT.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/category", async (req, res) => {
  try {
    const getCAT = await pool.query(`SELECT * FROM "CATEGORIES"`);
    res.json(getCAT.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// add category
app.post("/category", async (req, res) => {
  try {
    const { category_name } = req.body;
    const insertCategory = await pool.query(
      `INSERT INTO "CATEGORIES" (category_name)VALUES($1) RETURNING *`,
      [category_name]
    );
    res.json(insertCategory.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/category/", async (req, res) => {
  try {
    const { category_name } = req.body;
    const insertCategory = await pool.query(
      `INSERT INTO "CATEGORIES" (category_name)VALUES($1)`,
      [category_name]
    );
    res.json("Inserted data");
  } catch (error) {
    console.error(error.message);
  }
});

//edit category
app.put("/category/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { category_name } = req.body;
    const updateCat = await pool.query(
      `UPDATE "CATEGORIES" SET category_Name=$1 WHERE category_Id =$2`,
      [category_name, id]
    );
    res.json(updateCat.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//delete categories
app.delete("/category/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFromCategories = await pool.query(
      `DELETE FROM "CATEGORIES" WHERE category_id=$1`,
      [id]
    );
    const deleteCat = await pool.query(
      `DELETE FROM "CATEGORIES" WHERE category_id = $1 `,
      [id]
    );

    res.json("Category deleted");
  } catch (error) {
    console.error(error.message);
  }
});

//get employee id
app.get("/employee/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getExp = await pool.query(
      `SELECT * FROM "EMPLOYEES" WHERE employee_id=$1`,
      [id]
    );
    res.json(getExp.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//add expense data
app.post("/expense", async (req, res) => {
  try {
    const { category, amount, receipt, date, employee_id } = req.body;
    const insertExp = await pool.query(
      // DATABASE COLUMN NAME
      `INSERT INTO "EXPENSES"(category,amount,receipt,date_inserted,date, employee_id)VALUES($1, $2, $3, CURRENT_TIMESTAMP, $4, $5) RETURNING *`,
      [category, amount, receipt, date, employee_id]
    );
    res.json("Inserted data");
  } catch (error) {
    console.error(error.message);
  }
});
//get total amount EXPENSES TABLE
app.get("/expenses/sum", async (req, res) => {
  try {
    const query = `
      SELECT SUM(amount) as total FROM "EXPENSES" WHERE date_trunc('month', date) = date_trunc('month', CURRENT_DATE);
    `;
    const result = await pool.query(query);
    const sum = result.rows[0];
    res.json({ sum });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//update expense
app.put("/expense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { category, amount, receipt, date } = req.body;
    const updatePhilhealth = await pool.query(
      `UPDATE "EXPENSES" SET category = $1, amount = $2, receipt =$3, date_updated = CURRENT_TIMESTAMP, date = $4 WHERE expense_id= $5`,
      [category, amount, receipt, date, id]
    );
    res.json("updated");
  } catch (error) {
    console.error(error.message);
  }
});
// edit expense
app.put("/expense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description, amount, receipt, date } = req.body;
    const updateExp = await pool.query(
      `UPDATE "EXPENSES" SET category=$1,amount=$2,receipt=$3,date=$4,date_updated=CURRENT_TIMESTAMP WHERE expense_id =$5`,
      [description, amount, receipt, date, id]
    );
    res.json(updateExp.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//read expense
app.get("/expense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getExp = await pool.query(
      `SELECT * FROM "EXPENSES" WHERE employee_id=$1`,
      [id]
    );
    res.json(getExp.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//expense total amount
/*app.get("/total/:id/:month", async (req, res) => {
  try {
    const { id, month } = req.params;
    const currentMonth = moment().month() + 1;
    const getTotalExpenses = await pool.query(
      `SELECT amount AS total_amount FROM "EXPENSES" WHERE employee_id=$1 AND EXTRACT(MONTH FROM "date") = $2`,
      [id, month]
    );
    const { total_amount } = getTotalExpenses.rows[0];
    res.json({ total_amount });
  } catch (error) {
    console.error(error.message);
  }
});*/

//expense connected to employees
app.get("/sum/:id/:month", async (req, res) => {
  try {
    const { id, month } = req.params;
    const getTotalExpenses = await pool.query(
      `
      SELECT
        e.first_name,
        e.middle_name,
        e.last_name,
        e.reimbursed_limit,
        SUM(ex.amount) AS total_amount
      FROM
        "EMPLOYEES" e
      LEFT JOIN
        "EXPENSES" ex ON e.employee_id = ex.employee_id
      WHERE
        e.employee_id = $1 AND EXTRACT(MONTH FROM ex.date) = $2
      GROUP BY
        e.first_name,
        e.middle_name,
        e.last_name,
        e.reimbursed_limit
    `,
      [id, month]
    );

    const {
      first_name,
      middle_name,
      last_name,
      reimbursed_limit,
      total_amount,
    } = getTotalExpenses.rows[0];
    res.json({
      first_name,
      middle_name,
      last_name,
      reimbursed_limit,
      total_amount,
    });
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/api/cities/:country", async (req, res) => {
  try {
    const { country } = req.params;
    const { rows } = await pool.query(
      "SELECT DISTINCT city FROM addresses WHERE country = $1 ORDER BY city",
      [country]
    );
    res.json(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// create a POST route for recording time in
app.post("/api/attendance/in", async (req, res) => {
  const { employeeNumber, id } = req.body;

  try {
    // get the current date and time
    const now = new Date();

    // check if the employee has already timed in today
    const attendance = await pool.query(
      "SELECT time_in FROM attendance WHERE employee_number = $1 AND DATE(time_in) = $2",
      [employeeNumber, now.toISOString().slice(0, 10)]
    );

    if (attendance.rowCount > 0) {
      return res
        .status(409)
        .send("Attendance Time In already recorded for today.");
    }

    // insert the attendance record for time in
    const result = await pool.query(
      "INSERT INTO attendance (employee_number, time_in,employee_id) VALUES ($1, $2,$3) RETURNING *",
      [employeeNumber, now, id]
    );

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error while recording Attendance Time In.");
  }
});

//get attendance and display in HR
app.post("/employeeAttendance", async (req, res) => {
  try {
    const { date } = req.body;
    const getAttendance = await pool.query(
      `SELECT a.*, e.middle_name,e.last_name,e.first_name,e.employee_number FROM "attendance" a JOIN "EMPLOYEES" e ON a.employee_number =  e.employee_number WHERE DATE(time_in) = $1 ORDER BY time_in DESC`,
      [date]
    );
    res.json(getAttendance.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// PUT route for recording time out
app.put("/api/attendance/out", async (req, res) => {
  const { employeeNumber } = req.body;

  try {
    const now = new Date();

    // Fetch the attendance record for the employee and current date
    const attendance = await pool.query(
      "SELECT * FROM attendance WHERE employee_number = $1 AND DATE(time_in) = $2",
      [employeeNumber, now.toISOString().slice(0, 10)]
    );

    if (attendance.rows.length === 0) {
      // Attendance record not found
      res.status(400).send("Employee has not timed in.");
      return;
    }

    const timeIn = new Date(attendance.rows[0].time_in);
    const timeOut = now;
    const diffInMs = timeOut - timeIn;
    const workingHours = (diffInMs / (1000 * 60 * 60)).toFixed(2);

    let newStatus = "";
    if (workingHours >= 1) {
      newStatus = "Present";
    } else {
      newStatus = "Absent";
    }

    const result = await pool.query(
      "UPDATE attendance SET time_out = $1, working_hours = $2, status = $3 WHERE employee_number = $4 AND DATE(time_in) = $5 RETURNING *",
      [
        timeOut,
        workingHours,
        newStatus,
        employeeNumber,
        now.toISOString().slice(0, 10),
      ]
    );

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error while recording Attendance Time Out.");
  }
});

// API endpoint to fetch attendance data for an employee by employee number
app.post("/api/attendancetotal/:employee_number", (req, res) => {
  const employeeNumber = req.params.employee_number;

  pool.query(
    `SELECT COUNT(*) FILTER (WHERE status = 'Present') AS present_count, COUNT(*) FILTER (WHERE status = 'Absent') AS absent_count FROM attendance WHERE employee_number = $1`,
    [employeeNumber],
    (err, result) => {
      if (err) {
        console.error("Error fetching attendance data:", err);
        return res
          .status(500)
          .json({ error: "Failed to fetch attendance data" });
      }

      if (result.rows.length === 0) {
        return res
          .status(404)
          .json({ error: "Employee not found in attendance table" });
      }

      const { present_count, absent_count } = result.rows[0];

      const attendanceStatus = {
        present_count,
        absent_count,
      };

      res.json(attendanceStatus);
    }
  );
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});