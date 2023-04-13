const express = require('express');
const cors = require('cors');
const pool = require('./database');
const app = express();

app.use(cors());
app.use(express.json());
//for employee

//get all employees
app.get("/employee", async (req, res) =>{
    try {
        const getEmployee = await pool.query("SELECT * FROM EMPLOYEES")
        res.json(getEmployee.rows)
    } catch (error) {
        console.error(error.message)
    }
})
//get employee by id
app.get("/employee/:id", async (req, res) =>{
    try {
        const { id }= req.params;
        const getEMP = await pool.query("SELECT * FROM EMPLOYEES WHERE employee_id=$1", [id])
        res.json(getEMP.rows)
    } catch (error) {
        console.error(error.message)
    }
})
// add employee
app.post("/employee", async (req, res) =>{
    try {
        const { firstname, middlename, lastname, address, contact, date_inserted, date_updated, job_title } =req.body;
        const insertEmployee = await pool.query("INSERT INTO EMPLOYEES (firstname, middlename, lastname, address, contact, date_inserted, date_updated, job_title)VALUES($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, $6, $7) RETURNING *", [firstname, middlename, lastname, address, contact, date_updated, job_title])
        res.json("Inserted data")
        
    } catch (error) {
        console.error(error.message)
    }
})
// edit employee
app.put("/employee/:id", async (req, res)=>{
    try {
        const { id } = req.params
        const { firstname, middlename, lastname, address, contact, date_inserted, date_updated, job_title  } = req.body
        const updateEmp = await pool.query("UPDATE EMPLOYEES SET firstname=$1, middlename=$2, lastname=$3, address=$4, contact=$5, date_inserted=$6, date_updated=CURRENT_TIMESTAMP, job_title=$7  WHERE employee_id =$8", [firstname, middlename, lastname, address, contact, date_inserted, job_title, id])
        res.json(updateEmp.rows)
    } catch (error) {
        console.error(error.message)
    }
})
//delete employee
app.delete("/employee/:id", async (req, res) =>{
    try {
        const { id } = req.params
        const deleteEmp = await pool.query("DELETE FROM EMPLOYEES WHERE employee_id = $1 ", [id])
        res.json("Employee deleted")
    } catch (error) {
        console.error(error.message)
    }
})
//end of employee
app.listen(4000, () =>{
    console.log('Listening to port 4000');
});