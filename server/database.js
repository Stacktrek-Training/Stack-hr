const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
<<<<<<< HEAD
  password: "harrybing16",
=======
  password: "admin",
>>>>>>> 3ebc41fe15f51ca81c603e1c3fb53f6fd59ae270
  host: "localhost",
  database: "STACK-HR",
  port: 5432,
});

module.exports = pool;
