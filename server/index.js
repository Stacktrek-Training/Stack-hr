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
        const getEmployee = await pool.query("SELECT * FROM employee")
        res.json(getEmployee.rows)
    } catch (error) {
        console.error(error.message)
    }
})
//get employee by id
app.get("/employee/:id", async (req, res) =>{
    try {
        const { id }= req.params;
        const getEMP = await pool.query("SELECT * FROM employee WHERE employee_id=$1", [id])
        res.json(getEMP.rows)
    } catch (error) {
        console.error(error.message)
    }
})
// add employee
app.post("/employee", async (req, res) =>{
    try {
        const { full_name, job_title } =req.body;
        const insertEmployee = await pool.query("INSERT INTO employee (full_name, job_title)VALUES($1, $2) RETURNING *", [full_name, job_title])
        res.json("Inserted data")
        
    } catch (error) {
        console.error(error.message)
    }
})
// edit employee
app.put("/employee/:id", async (req, res)=>{
    try {
        const { id } = req.params
        const { full_name, job_title } = req.body
        const updateEmp = await pool.query("UPDATE employee SET full_name=$1, job_title=$2 WHERE employee_id =$3", [full_name, job_title, id])
        res.json(updateEmp.rows)
    } catch (error) {
        console.error(error.message)
    }
})
//delete employee
app.delete("/employee/:id", async (req, res) =>{
    try {
        const { id } = req.params
        const deleteEmp = await pool.query("DELETE FROM employee WHERE employee_id = $1 ", [id])
        res.json("Employee deleted")
    } catch (error) {
        console.error(error.message)
    }
})
//end of employee
app.listen(4000, () =>{
    console.log('Listening to port 4000');
});