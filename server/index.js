const express = require("express");
const cors = require("cors");
const pool = require("./database");
const app = express();

app.use(cors());
app.use(express.json());
//for employee

//get all employees
app.get("/employee", async (req, res) => {
  try {
    const getEmployee = await pool.query(`SELECT * FROM "EMPLOYEES"`);
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
    const insertEmployee = await pool.query(
      `INSERT INTO "EMPLOYEES"(first_name,middle_name,last_name,province,city,municipality,baranggay,zipcode,mobile_number,telephone_number,work_email,personal_email,emergency_contact_person,emergency_contact_email,emergency_contact_number,relationship,job_title,date_created,date_updated,gender,marital_status,birthday)VALUES($1, $2, $3, $4, $5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17, CURRENT_TIMESTAMP,null,$18,$19,$20) RETURNING *`,
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

    res.json("Employee deleted");
  } catch (error) {
    console.error(error.message);
  }
});
//end of employee

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
// insert all dataa in salaries
app.post("/salaries/", async (req, res) => {
  try {
    const { employee_id, salary } = req.body;
    const insertSalary = await pool.query(
      `INSERT INTO "SALARIES" (employee_id, salary, status, date_created) VALUES($1, $2, 1, CURRENT_TIMESTAMP) RETURNING *`,
      [employee_id, salary]
    );
    res.json("Data Inserted");
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
      `UPDATE "SALARIES" SET salary = $1, date_updated = CURRENT_TIMESTAMP WHERE salary_id=$2`,
      [salary, id]
    );
    res.json("Updated successfully");
  } catch (error) {
    console.error(error.message);
  }
});
//change status of salary
app.put("/salaries/status/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updateStatus = await pool.query(
      `UPDATE "SALARIES" SET status = $1 WHERE salary_id = $2`,
      [status, id]
    );
    res.json("Status Updated");
  } catch (error) {
    console.error(error.message);
  }
});
//get all deductions

app.get("/deductions/", async (req, res) => {
  try {
    const getDeductions = await pool.query(`SELECT * FROM "DEDUCTIONS"`);
    res.json(getDeductions.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//insert deduction

app.post("/deductions/", async (req, res) => {
  try {
    const { deduction_name, description, amount } = req.body;
    const insertDeduction = await pool.query(
      `INSERT INTO "DEDUCTIONS" (deduction_name, description, amount, date_created)VALUES($1,$2,$3,CURRENT_TIMESTAMP) RETURNING *`,
      [deduction_name, description, amount]
    );
    res.json("data inserted");
  } catch (error) {
    console.error(error.message);
  }
});
// update deductions
app.put("/deductions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { deduction_name, description, amount } = req.body;
    const updateDeductions = await pool.query(
      `UPDATE "DEDUCTIONS" SET deduction_name =$1, description =$2, amount=$3, date_updated = CURRENT_TIMESTAMP WHERE deduction_id=$4`,
      [deduction_name, description, amount, id]
    );
    res.json("data updated");
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
    const employee_contribution = monthly_total_contribution * 0.5;
    const employer_contribution = monthly_total_contribution * 0.5;

    const insertPhilheath = await pool.query(
      `INSERT INTO "PHILHEALTH_DEDUCTIONS" (salary_range_1, salary_range_2, employee_contribution, employer_contribution, monthly_total_contribution, date_created)VALUES($1,$2,$3,$4,$5,CURRENT_TIMESTAMP) RETURNING *`,
      [
        salary_range_1,
        salary_range_2,
        employee_contribution,
        employer_contribution,
        monthly_total_contribution,
      ]
    );
    res.json(insertPhilheath.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//read
app.get("/philhealth", async (req, res) => {
  try {
    const getAll = await pool.query(`SELECT * FROM "PHILHEALTH_DEDUCTIONS"`);
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
    const employee_contribution = monthly_total_contribution * 0.5;
    const employer_contribution = monthly_total_contribution * 0.5;
    const updatePhilhealth = await pool.query(
      `UPDATE "PHILHEALTH_DEDUCTIONS" SET salary_range_1 = $1, salary_range_2 = $2, monthly_total_contribution =$3, employee_contribution =$4, employer_contribution = $5, date_updated = CURRENT_TIMESTAMP WHERE deduction_id = $6`,
      [
        salary_range_1,
        salary_range_2,
        monthly_total_contribution,
        employee_contribution,
        employer_contribution,
        id,
      ]
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
    const monthly_total_contribution =
      employee_contribution + employer_contribution;
    const insertRange = await pool.query(
      `INSERT INTO "PAGIBIG_DEDUCTIONS" (salary_range_1, salary_range_2, employee_contribution, employer_contribution,monthly_total_contribution, date_created)VALUES($1, $2, $3, $4,$5, CURRENT_TIMESTAMP) RETURNING *`,
      [
        salary_range_1,
        salary_range_2,
        employee_contribution,
        employer_contribution,
        monthly_total_contribution,
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
    const monthly_total_contribution =
      employee_contribution + employer_contribution;
    await pool.query(
      `UPDATE "PAGIBIG_DEDUCTIONS" SET salary_range_1 = $1, salary_range_2 = $2, employee_contribution = $3, employer_contribution =$4, monthly_total_contribution = $5, date_updated = CURRENT_TIMESTAMP WHERE deduction_id = $6`,
      [
        salary_range_1,
        salary_range_2,
        employee_contribution,
        employer_contribution,
        monthly_total_contribution,
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
app.get("/categories/:id", async (req, res) => {
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
app.get("/categories", async (req, res) => {
  try {
    const getCAT = await pool.query(`SELECT * FROM "CATEGORIES"`);
    res.json(getCAT.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// add category
app.post("/categories", async (req, res) => {
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
      [category_name, category_Id]
    );
    res.json(updateCat.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//delete categories
app.delete("/categories/:id", async (req, res) => {
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

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
