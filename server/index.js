const express = require("express");
const cors = require("cors");
const pool = require("./database");
const app = express();

app.use(cors());
app.use(express.json());

//for employee
//for log in
app.post("/employee-login", async (req, res) => {
  try {
    const { employee_number, password } = req.body;
    const login = await pool.query(
      `SELECT * FROM "EMPLOYEES" WHERE employee_number = $1 AND password = $2`,
      [employee_number, password]
    );
    if (login.rows.length === 1) {
      res.json(login.rows);
    } else {
      res.status(401).send("Invalid email or password.");
    }
  } catch (error) {
    console.error(error.message);
  }
});
//get all employees
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
//get employee by id
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
// add employee
app.post("/employee", async (req, res) => {
  try {
    const {
      first_name,
      middle_name,
      last_name,
      province,
      city,
      municipality,
      baranggay,
      zipcode,
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

    //for generating password

    const crypto = require("crypto");

    function generateRandomPassword() {
      // Generate a random password with 2 letters and 1 symbol
      const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const symbols = "!@#$%^&*()_-+=";
      let password = "";
      password += letters[Math.floor(Math.random() * letters.length)];
      password += letters[Math.floor(Math.random() * letters.length)];
      password += symbols[Math.floor(Math.random() * symbols.length)];
      for (let i = 0; i < 5; i++) {
        password += letters[Math.floor(Math.random() * letters.length)];
      }
      // Shuffle the password characters randomly
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      return password;
    }

    const password = generateRandomPassword();

    // Get the latest employee number from the database
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

    const insertEmployee = await pool.query(
      `INSERT INTO "EMPLOYEES"(first_name,middle_name,last_name,province,city,municipality,baranggay,zipcode,mobile_number,telephone_number,work_email,personal_email,emergency_contact_person,emergency_contact_email,emergency_contact_number,relationship,job_title,date_created,date_updated,gender,marital_status,birthday,employee_number,password)VALUES($1, $2, $3, $4, $5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17, CURRENT_TIMESTAMP,null,$18,$19,$20,$21,$22) RETURNING *`,
      [
        first_name,
        middle_name,
        last_name,
        province,
        city,
        municipality,
        baranggay,
        zipcode,
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
// edit employee
app.put("/employee/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      first_name,
      middle_name,
      last_name,
      province,
      city,
      municipality,
      baranggay,
      zipcode,
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
      `UPDATE "EMPLOYEES" SET first_name=$1,middle_name=$2,last_name=$3,province=$4,city=$5,municipality=$6,baranggay=$7,zipcode=$8,mobile_number=$9,telephone_number=$10,work_email=$11,personal_email=$12,emergency_contact_person=$13,emergency_contact_email=$14,emergency_contact_number=$15,relationship=$16,job_title=$17,date_updated=CURRENT_TIMESTAMP,gender=$18,marital_status=$19,birthday=$20 WHERE employee_id =$21`,
      [
        first_name,
        middle_name,
        last_name,
        province,
        city,
        municipality,
        baranggay,
        zipcode,
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
//delete employee
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
//end of employee

//job roles
//create job role
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
//read job role
app.get("/jobroles", async (req, res) => {
  try {
    const getJobroles = await pool.query(`SELECT * FROM "JOB_ROLES"`);
    res.json(getJobroles.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//update jobrole

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
//delete jobrole
app.delete("/jobroles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(`DELETE FROM "JOB_ROLES" WHERE job_role_id = $1`, [id]);
    res.json("data deleted");
  } catch (error) {
    console.error(error.message);
  }
});

//salaries

//get data in employees that are not present in salaries
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
// insert all dataa in salaries
app.post("/salaries/", async (req, res) => {
  try {
    const { employee_id, salary } = req.body;
    const insertSalary = await pool.query(
      `INSERT INTO "SALARIES" (employee_id, salary, status, date_created) VALUES($1, $2, 1, CURRENT_TIMESTAMP) RETURNING *`,
      [employee_id, salary]
    );
    res.json("Data Inserted");

    const monthly_salary = salary * 20;

    //get philhealth
    const selectPhilhealth = await pool.query(
      `SELECT monthly_total_contribution FROM "PHILHEALTH_DEDUCTIONS" WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
      [monthly_salary]
    );
    const { monthly_total_contribution: monthly_total_contribution } =
      selectPhilhealth.rows[0];
    const employee_contribution = monthly_total_contribution * 0.5;
    const philhealth_deduction = (employee_contribution / 100) * monthly_salary;
    //get pagibig
    const selectPagibig = await pool.query(
      `SELECT employee_contribution FROM "PAGIBIG_DEDUCTIONS" WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
      [monthly_salary]
    );
    const { employee_contribution: employee_contributions } =
      selectPagibig.rows[0];
    const pagibig_deduction = (employee_contributions / 100) * monthly_salary;
    //get sss
    const selectSSS = await pool.query(
      `SELECT employee_contribution_sss, employee_contribution_ec, employee_contribution_mpf FROM "SSS_DEDUCTIONS" WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
      [monthly_salary]
    );
    const {
      employee_contribution_sss: employee_contribution_sss,
      employee_contribution_ec: employee_contribution_ec,
      employee_contribution_mpf: employee_contribution_mpf,
    } = selectSSS.rows[0];

    let month_salary_wisp = 0;
    let rounded_salary_wisp = 0;
    let mpf = 0;

    if (monthly_salary >= 20250 && monthly_salary < 29750) {
      month_salary_wisp = monthly_salary / 1000;
      rounded_salary_wisp = Math.round(month_salary_wisp);

      mpf = monthly_salary - rounded_salary_wisp;
    } else if (monthly_salary >= 29750) {
      rounded_salary_wisp = 20000;
      mpf = monthly_salary - rounded_salary_wisp;
    } else {
      rounded_salary_wisp = monthly_salary;
      mpf = 0;
    }

    const sss_deduction_sss =
      (employee_contribution_sss / 100) * rounded_salary_wisp;
    const sss_deduction_mpf = (employee_contribution_mpf / 100) * mpf;
    const total_sss_deduction =
      parseFloat(sss_deduction_sss) +
      parseFloat(sss_deduction_mpf) +
      parseFloat(employee_contribution_ec);
    // Insert the new record into the DEDUCTIONS table with the fetched employee ID and monthly salary
    const insertDeduction = await pool.query(
      `INSERT INTO "DEDUCTIONS" (employee_id, monthly_salary,philhealth_deduction, pagibig_deduction, sss_deduction,date_created)
       VALUES ($1, $2,$3,$4, $5, CURRENT_TIMESTAMP)
       RETURNING *`,
      [
        employee_id,
        monthly_salary,
        philhealth_deduction,
        pagibig_deduction,
        total_sss_deduction,
      ]
    );

    res.json(insertDeduction.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//get all data in salaries

app.get("/salaries", async (req, res) => {
  try {
    const getSalaries =
      await pool.query(`SELECT s.*, e.first_name, e.last_name, e.middle_name
      FROM "SALARIES" s
      JOIN "EMPLOYEES" e ON s.employee_id = e.employee_id`);
    res.json(getSalaries.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//update data in salaries
app.put("/salaries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { salary } = req.body;
    const updateSalary = await pool.query(
      `UPDATE "SALARIES" SET salary = $1, date_updated = CURRENT_TIMESTAMP WHERE employee_id=$2`,
      [salary, id]
    );
    res.json("Updated successfully");

    //update deduction of employee
    const monthly_salary = salary * 20;

    //get philhealth
    const selectPhilhealth = await pool.query(
      `SELECT monthly_total_contribution FROM "PHILHEALTH_DEDUCTIONS" WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
      [monthly_salary]
    );
    const { monthly_total_contribution: monthly_total_contribution } =
      selectPhilhealth.rows[0];
    const employee_contribution = monthly_total_contribution * 0.5;
    const philhealth_deduction = (employee_contribution / 100) * monthly_salary;
    //get pagibig
    const selectPagibig = await pool.query(
      `SELECT employee_contribution FROM "PAGIBIG_DEDUCTIONS" WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
      [monthly_salary]
    );
    const { employee_contribution: employee_contributions } =
      selectPagibig.rows[0];
    const pagibig_deduction = (employee_contributions / 100) * monthly_salary;
    //get sss
    const selectSSS = await pool.query(
      `SELECT employee_contribution_sss, employee_contribution_ec, employee_contribution_mpf FROM "SSS_DEDUCTIONS" WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
      [monthly_salary]
    );
    const {
      employee_contribution_sss: employee_contribution_sss,
      employee_contribution_ec: employee_contribution_ec,
      employee_contribution_mpf: employee_contribution_mpf,
    } = selectSSS.rows[0];

    let month_salary_wisp = 0;
    let rounded_salary_wisp = 0;
    let mpf = 0;

    if (monthly_salary >= 20250 && monthly_salary < 29750) {
      month_salary_wisp = monthly_salary / 1000;
      rounded_salary_wisp = Math.round(month_salary_wisp);

      mpf = monthly_salary - rounded_salary_wisp;
    } else if (monthly_salary >= 29750) {
      rounded_salary_wisp = 20000;
      mpf = monthly_salary - rounded_salary_wisp;
    } else {
      rounded_salary_wisp = monthly_salary;
      mpf = 0;
    }

    const sss_deduction_sss =
      (employee_contribution_sss / 100) * rounded_salary_wisp;
    const sss_deduction_mpf = (employee_contribution_mpf / 100) * mpf;
    const total_sss_deduction =
      parseFloat(sss_deduction_sss) +
      parseFloat(sss_deduction_mpf) +
      parseFloat(employee_contribution_ec);
    // Insert the new record into the DEDUCTIONS table with the fetched employee ID and monthly salary
    const updatetDeduction = await pool.query(
      `UPDATE "DEDUCTIONS" SET monthly_salary = $2,philhealth_deduction = $3, pagibig_deduction = $4, sss_deduction = $5,date_updated= CURRENT_TIMESTAMP WHERE employee_id = $1`,
      [
        id,
        monthly_salary,
        philhealth_deduction,
        pagibig_deduction,
        total_sss_deduction,
      ]
    );

    res.json("data updated");
  } catch (error) {
    console.error(error.message);
  }
});

//get all deductions

app.get("/deductions", async (req, res) => {
  try {
    const getSalaries =
      await pool.query(`SELECT d.*, e.first_name, e.last_name, e.middle_name
      FROM "DEDUCTIONS" d
      JOIN "EMPLOYEES" e ON d.employee_id = e.employee_id`);
    res.json(getSalaries.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//insert deduction
app.post("/deductions/", async (req, res) => {
  try {
    const { employee_id } = req.body;

    // Fetch the employee ID and monthly salary for the employee from the SALARY table
    const fetchSalary = await pool.query(
      `SELECT employee_id, salary FROM "SALARIES" WHERE employee_id = $1`,
      [employee_id]
    );

    if (fetchSalary.rows.length === 0) {
      return res.status(404).json("Employee not found");
    }

    // Retrieve the employee ID and monthly salary values from the query result
    const { employee_id: fetched_employee_id, salary: salary } =
      fetchSalary.rows[0];
    const monthly_salary = salary * 20;

    //get philhealth
    const selectPhilhealth = await pool.query(
      `SELECT monthly_total_contribution FROM "PHILHEALTH_DEDUCTIONS" WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
      [monthly_salary]
    );
    const { monthly_total_contribution: monthly_total_contribution } =
      selectPhilhealth.rows[0];
    const employee_contribution = monthly_total_contribution * 0.5;
    const philhealth_deduction = (employee_contribution / 100) * monthly_salary;
    //get pagibig
    const selectPagibig = await pool.query(
      `SELECT employee_contribution FROM "PAGIBIG_DEDUCTIONS" WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
      [monthly_salary]
    );
    const { employee_contribution: employee_contributions } =
      selectPagibig.rows[0];
    const pagibig_deduction = (employee_contributions / 100) * monthly_salary;
    //get sss
    const selectSSS = await pool.query(
      `SELECT employee_contribution_sss, employee_contribution_ec, employee_contribution_mpf FROM "SSS_DEDUCTIONS" WHERE $1 BETWEEN salary_range_1 AND salary_range_2`,
      [monthly_salary]
    );
    const {
      employee_contribution_sss: employee_contribution_sss,
      employee_contribution_ec: employee_contribution_ec,
      employee_contribution_mpf: employee_contribution_mpf,
    } = selectSSS.rows[0];

    let month_salary_wisp = 0;
    let rounded_salary_wisp = 0;
    let mpf = 0;

    if (monthly_salary >= 20250 && monthly_salary < 29750) {
      month_salary_wisp = monthly_salary / 1000;
      rounded_salary_wisp = Math.round(month_salary_wisp);

      mpf = monthly_salary - rounded_salary_wisp;
    } else if (monthly_salary >= 29750) {
      rounded_salary_wisp = 20000;
      mpf = monthly_salary - rounded_salary_wisp;
    } else {
      rounded_salary_wisp = monthly_salary;
      mpf = 0;
    }

    const sss_deduction_sss =
      (employee_contribution_sss / 100) * rounded_salary_wisp;
    const sss_deduction_mpf = (employee_contribution_mpf / 100) * mpf;
    const total_sss_deduction =
      parseFloat(sss_deduction_sss) +
      parseFloat(sss_deduction_mpf) +
      parseFloat(employee_contribution_ec);
    // Insert the new record into the DEDUCTIONS table with the fetched employee ID and monthly salary
    const insertDeduction = await pool.query(
      `INSERT INTO "DEDUCTIONS" (employee_id, monthly_salary,philhealth_deduction, pagibig_deduction, sss_deduction,date_created)
       VALUES ($1, $2,$3,$4, $5, CURRENT_TIMESTAMP)
       RETURNING *`,
      [
        fetched_employee_id,
        monthly_salary,
        philhealth_deduction,
        pagibig_deduction,
        total_sss_deduction,
      ]
    );

    res.json(insertDeduction.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//philhealth
//add
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
//read
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
//update

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

//ang pag ibig
//Create
app.post("/pag-ibig", async (req, res) => {
  try {
    const {
      salary_range_1,
      salary_range_2,
      employee_contribution,
      employer_contribution,
    } = req.body;
    const insertRange = await pool.query(
      `INSERT INTO "PAGIBIG_DEDUCTIONS" (salary_range_1, salary_range_2, employee_contribution, employer_contribution, date_created)VALUES($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *`,
      [
        salary_range_1,
        salary_range_2,
        employee_contribution,
        employer_contribution,
      ]
    );
    res.json(insertRange.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//read
app.get("/pag-ibig", async (req, res) => {
  try {
    const getPagibig = await pool.query(`SELECT * FROM "PAGIBIG_DEDUCTIONS"`);
    res.json(getPagibig.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//update
app.put("/pag-ibig/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      salary_range_1,
      salary_range_2,
      employee_contribution,
      employer_contribution,
    } = req.body;

    await pool.query(
      `UPDATE "PAGIBIG_DEDUCTIONS" SET salary_range_1 = $1, salary_range_2 = $2, employee_contribution = $3, employer_contribution =$4, date_updated = CURRENT_TIMESTAMP WHERE deduction_id = $5`,
      [
        salary_range_1,
        salary_range_2,
        employee_contribution,
        employer_contribution,
        id,
      ]
    );
    res.json("data updated");
  } catch (error) {
    console.error(error.message);
  }
});

//sss
//add
app.post("/sss", async (req, res) => {
  try {
    const {
      salary_range_1,
      salary_range_2,
      employee_contribution_sss,
      employer_contribution_sss,
      employee_contribution_ec,
      employer_contribution_ec,
      employee_contribution_mpf,
      employer_contribution_mpf,
    } = req.body;
    const insertData = await pool.query(
      `INSERT INTO "SSS_DEDUCTIONS" (salary_range_1, salary_range_2, employee_contribution_sss, employer_contribution_sss, employee_contribution_ec, employer_contribution_ec, employee_contribution_mpf, employer_contribution_mpf,date_created)VALUES($1,$2,$3,$4,$5,$6,$7,$8,CURRENT_TIMESTAMP) RETURNING *`,
      [
        salary_range_1,
        salary_range_2,
        employee_contribution_sss,
        employer_contribution_sss,
        employee_contribution_ec,
        employer_contribution_ec,
        employee_contribution_mpf,
        employer_contribution_mpf,
      ]
    );
    res.json(insertData.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//read
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
//update
app.put("/sss/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      salary_range_1,
      salary_range_2,
      employee_contribution_sss,
      employer_contribution_sss,
      employee_contribution_ec,
      employer_contribution_ec,
      employee_contribution_mpf,
      employer_contribution_mpf,
    } = req.body;

    const updateData = await pool.query(
      `UPDATE "SSS_DEDUCTIONS" SET salary_range_1=$1,salary_range_2=$2,employee_contribution_sss=$3, employer_contribution_sss=$4, employee_contribution_ec=$5, employer_contribution_ec=$6,employee_contribution_mpf=$7,employer_contribution_mpf=$8,date_updated=CURRENT_TIMESTAMP WHERE deduction_id = $9`,
      [
        salary_range_1,
        salary_range_2,
        employee_contribution_sss,
        employer_contribution_sss,
        employee_contribution_ec,
        employer_contribution_ec,
        employee_contribution_mpf,
        employer_contribution_mpf,
        id,
      ]
    );
    res.json("data updated");
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

//get expense id
app.get("/expense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getExp = await pool.query(
      `SELECT * FROM "EXPENSES" WHERE expense_id=$1`,
      [id]
    );
    res.json(getExp.rows);
  } catch (error) {
    console.error(error.message);
  }
});
app.get("/expense", async (req, res) => {
  try {
    const { employee_name, username, password } = req.body;
    const insertEmp = await pool.query(
      // DATABASE COLUMN NAME
      `INSERT INTO "LOGIN"(employee_name,username,password)VALUES($1,$2,$3) RETURNING *`,
      [employee_name, username, password]
    );
    res.json("Inserted data");
  } catch (error) {
    console.error(error.message);
  }
});

//get expense id
app.get("/expense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getEXP = await pool.query(
      `SELECT * FROM "Expenses" WHERE expense_id=$1`,
      [id]
    );
    res.json(getEXP.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//add expense data
app.post("/expense", async (req, res) => {
  try {
    const { category, amount, receipt, date } = req.body;
    const insertExp = await pool.query(
      // DATABASE COLUMN NAME
      `INSERT INTO "Expenses"(category,amount,receipt,date_inserted,date)VALUES($1, $2, $3, CURRENT_TIMESTAMP, $4) RETURNING *`,
      [category, amount, receipt, date]
    );
    res.json("Inserted data");
  } catch (error) {
    console.error(error.message);
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
//read
app.get("/expenses", async (req, res) => {
  try {
    const getData = await pool.query(`SELECT * FROM "EXPENSES"`);
    res.json(getData.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get transaction by id
app.get("/transactions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getTrans = await pool.query(
      `SELECT * FROM "TRANSACTION" WHERE transaction_id=$1`,
      [id]
    );
    res.json(getTrans.rows);
  } catch (error) {
    console.error(error.message);
  }
});
app.get("/transactions", async (req, res) => {
  try {
    const getTrans = await pool.query(`SELECT * FROM "TRANSACTIONS"`);
    res.json(getTrans.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//add transaction
app.post("/transaction", async (req, res) => {
  try {
    const {
      date,
      employee_id,
      category_id,
      total_amount,
      receipt_image,
      date_inserted,
      date_updated,
    } = req.body;
    const insertETransaction = await pool.query(
      `INSERT INTO "TRANSACTIONS"(date,employee_id,category_Id,total_Amount,receipt_Image,inserted_At,updated_At)VALUES(CURRENT_TIMESTAMP, $1, $2, $3,$4, CURRENT_TIMESTAMP, NULL) RETURNING *`,
      [employee_id, category_Id, total_Amount, receipt_Image]
    );
    res.json("Inserted data");
  } catch (error) {
    console.error(error.message);
  }
});
// edit transaction
app.put("/transaction/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { category_id, total_amount, receipt_image } = req.body;
    const updateTrans = await pool.query(
      `UPDATE "TRANSACTIONS" SET category_id=$1,total_amount=$2,receipt_image=$3,date_updated=CURRENT_TIMESTAMP  WHERE transaction_id =$4`,
      [category_id, total_amount, receipt_image, id]
    );
    res.json(updateTrans.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//get all data in transactions

/*app.get("/transaction", async (req, res) => {
  try {
    const getTransaction =
      await pool.query(`SELECT t.*, e.first_name, e.last_name, e.middle_name
      FROM "TRANSACTIONS" t
      JOIN "EMPLOYEES" e ON t.employee_id = e.employee_id`);
    res.json(getTransaction.rows);
  } catch (error) {
    console.error(error.message);
  }
});*/
//get reports
app.get("/reports", async (req, res) => {
  try {
    const getReports = await pool.query(`SELECT * FROM "REPORTS"`);
    res.json(getReports.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//get report by id
app.get("/report/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getReports = await pool.query(
      `SELECT * FROM "REPORTS" WHERE report_id=$1`,
      [id]
    );
    res.json(getReports.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//add reports
app.post("/reports", async (req, res) => {
  try {
    const { transaction_Id, date, category_Id, description, amount } = req.body;
    const insertETransaction = await pool.query(
      `INSERT INTO "REPORTS"(transaction_Id,date,category_Id,description,amount)VALUES($1,CURRENT_TIMESTAMP,$2,$3,$4) RETURNING *`,
      [transaction_Id, date, category_Id, description, amount]
    );
    res.json("Inserted data");
  } catch (error) {
    console.error(error.message);
  }
});
// edit reports
app.put("/reports/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { transaction_id, date, category_id, description, amount } = req.body;
    const updateReport = await pool.query(
      `UPDATE "TRANSACTIONS" SET transaction_Id=$1,date=CURRENT_TIMESTAMP,category_Id=$2,description=$3,amount=$4 WHERE report_Id =$5`,
      [transaction_Id, date, category_Id, description, amount, id]
    );
    res.json(updateReport.rows);
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
  const { employeeId } = req.body;

  try {
    // get the current date
    const today = new Date().toISOString().slice(0, 10);

    // check if the employee has already timed in today
    const attendance = await pool.query(
      "SELECT time_in FROM attendance WHERE employee_id = $1 AND DATE(time_in) = $2",
      [employeeId, today]
    );

    if (attendance.rowCount > 0) {
      return res
        .status(409)
        .send("Attendance Time In already recorded for today.");
    }

    // insert the attendance record for time in
    const result = await pool.query(
      "INSERT INTO attendance (employee_id, time_in) VALUES ($1, NOW()) RETURNING time_in",
      [employeeId]
    );

    res.status(200).json({ timeIn: result.rows[0].time_in });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error while recording Attendance Time In.");
  }
});

// create a PUT route for recording time out
app.put("/api/attendance/out", async (req, res) => {
  const { employeeId } = req.body;

  try {
    // get the current date
    const today = new Date().toISOString().slice(0, 10);

    // check if the employee has already timed out today or has not timed in
    const attendance = await pool.query(
      "SELECT time_in, time_out FROM attendance WHERE employee_id = $1 AND DATE(time_in) = $2",
      [employeeId, today]
    );

    if (attendance.rowCount === 0) {
      return res
        .status(400)
        .send("Employee has already timed out today or has not timed in.");
    }

    if (attendance.rows[0].time_out !== null) {
      return res
        .status(409)
        .send("Attendance Time Out already recorded for today.");
    }

    // update the attendance record for time out
    const result = await pool.query(
      "UPDATE attendance SET time_out = NOW() WHERE employee_id = $1 AND DATE(time_in) = $2 RETURNING time_out",
      [employeeId, today]
    );

    res.status(200).json({ timeOut: result.rows[0].time_out });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error while recording Attendance Time Out.");
  }
});

// create a POST route for inserting a new attendance record
app.post("/api/attendance", async (req, res) => {
  const { employeeId, timeIn, timeOut, workingHours } = req.body;

  try {
    // insert the attendance record
    const result = await pool.query(
      "INSERT INTO attendance (employee_id, time_in, time_out, working_hours) VALUES ($1, $2, $3, $4) RETURNING attendance_id",
      [employeeId, timeIn, timeOut, workingHours]
    );

    res.status(200).json({ attendanceId: result.rows[0].attendance_id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error while inserting Attendance record.");
  }
});

app.post("/attendance", async (req, res) => {
  try {
    const { id } = req.body;
    const insertTimeIn = await pool.query(
      `INSERT INTO "ATTENDANCES" (employee_id, time_in, date_created)VALUES($1,CURRENT_TIME,CURRENT_DATE) RETURNING *`,
      [id]
    );
    res.json(insertTimeIn.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.put("/attendance/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const timeOut = await pool.query(
      `UPDATE "ATTENDANCES" SET time_out = CURRENT_TIME, date_updated = CURRENT_DATE WHERE employee_id = $1`,
      [id]
    );
    res.json(timeOut.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/attendance/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getAttendance = await pool.query(
      `SELECT * FROM "ATTENDANCES" WHERE employee_id = $1 AND date_created = CURRENT_DATE`,
      [id]
    );
    res.json(getAttendance.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
