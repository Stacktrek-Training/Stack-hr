const express = require('express');
const cors = require('cors');
const pool = require('./database');
const app = express();

app.use(cors());
app.use(express.json());

app.get("/employee", async (req, res) =>{
    try {
        const getEmployee = await pool.query("SELECT * FROM employee")
        res.json(getEmployee.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/employee/:id", async (req, res) =>{
    try {
        const { id }= req.params;
        const getEMP = await pool.query("SELECT * FROM employee WHERE employee_id=$1", [id])
        res.json(getEMP.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(4000, () =>{
    console.log('Listening to port 4000');
});