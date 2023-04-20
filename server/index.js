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
    } = req.body;
    const insertEmployee = await pool.query(
      `INSERT INTO "EMPLOYEES"(first_name,middle_name,last_name,province,city,municipality,baranggay,zipcode,mobile_number,telephone_number,work_email,personal_email,emergency_contact_person,emergency_contact_email,emergency_contact_number,relationship,job_title,date_created,status)VALUES($1, $2, $3, $4, $5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17, CURRENT_TIMESTAMP,0) RETURNING *`,
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
    } = req.body;
    const updateEmp = await pool.query(
      `UPDATE "EMPLOYEES" SET first_name=$1,middle_name=$2,last_name=$3,province=$4,city=$5,municipality=$6,baranggay=$7,zipcode=$8,mobile_number=$9,telephone_number=$10,work_email=$11,personal_email=$12,emergency_contact_person=$13,emergency_contact_email=$14,emergency_contact_number=$15,relationship=$16,job_title=$17,date_updated=CURRENT_TIMESTAMP  WHERE employee_id =$18`,
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

app.post("/salaries/", async (req, res) => {
  try {
    const { employee_id, salary } = req.body;
    const insertSalary = await pool.query(
      `INSERT INTO "SALARIES" (employee_id, salary, status, date_created, date_updated) VALUES($1, $2, 1, CURRENT_TIMESTAMP, null)`,
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

//stack-Expense
//get category by id
app.get("/category/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getCAT = await pool.query(
      `SELECT * FROM "CATEGORIES" WHERE category_Id=$1`,
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
      [
        category_name, 
        category_Id,
      ]
    );
    res.json(updateCat.rows);
  } catch (error) {
    console.error(error.message);
  }
});

  // get transaction
  app.get("/transaction", async (req, res) => {
    try {
      const getTransaction = await pool.query(`SELECT * FROM "TRANSACTIONS"`);
      res.json(getTransaction.rows);
    } catch (error) {
      console.error(error.message);
    }
  });
  //get transaction by id
  app.get("/transaction/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const getTransaction = await pool.query(
        `SELECT * FROM "TRANSACTIONS" WHERE transaction_Id=$1`,
        [id]
      );
      res.json(getTransaction.rows);
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
      category_Id,
      total_Amount,
      receipt_Image,
      inserted_At,
      updated_At,

    } = req.body;
    const insertETransaction = await pool.query(
      `INSERT INTO "TRANSACTIONS"(date,employee_id,category_Id,total_Amount,receipt_Image,inserted_At,updated_At)VALUES(CURRENT_TIMESTAMP, $1, $2, $3,$4, CURRENT_TIMESTAMP, NULL) RETURNING *`,
      [
        employee_id,
        category_Id,
        total_Amount,
        receipt_Image,
      ]
    );
    res.json("Inserted data");
  } catch (error) {
    console.error(error.message);
  }
});
// edit tranaction
app.put("/transaction/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
        category_Id,
        total_Amount,
        receipt_Image,
    } = req.body;
    const updateTrans = await pool.query(
      `UPDATE "TRANSACTIONS" SET category_Id=$1,total_Amount=$2,receipt_Image=$3,updated_At=CURRENT_TIMESTAMP  WHERE transaction_Id =$4`,
      [
        category_Id,
        total_Amount,
        receipt_Image,
        id,
      ]
    );
    res.json(updateTrans.rows);
  } catch (error) {
    console.error(error.message);
  }

});

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
      `SELECT * FROM "REPORTS" WHERE report_Id=$1`,
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
    const {
      transaction_Id,
      date,
      category_Id,
      description,
      amount

    } = req.body;
    const insertETransaction = await pool.query(
      `INSERT INTO "REPORTS"(transaction_Id,date,category_Id,description,amount)VALUES($1,CURRENT_TIMESTAMP,$2,$3,$4) RETURNING *`,
      [
        transaction_Id,
        date,
        category_Id,
        description,
        amount
      ]
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
    const {
      transaction_Id,
      date,
      category_Id,
      description,
      amount
    } = req.body;
    const updateReport = await pool.query(
      `UPDATE "TRANSACTIONS" SET transaction_Id=$1,date=CURRENT_TIMESTAMP,category_Id=$2,description=$3,amount=$4 WHERE report_Id =$5`,
      [
      transaction_Id,
      date,
      category_Id,
      description,
      amount,
      id,
      ]
    
    );
    res.json(updateReport.rows);
  } catch (error) {
    console.error(error.message);
  }

});


app.listen(4000, () => {
  console.log("Listening to port 4000");
});
