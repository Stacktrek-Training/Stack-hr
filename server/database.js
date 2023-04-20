const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
<<<<<<< HEAD
  password: "@mypostgresql2023",
=======
  password: "postgres",
>>>>>>> 60c77ee4dcb5d313498dd6845793998175b3f90f
  host: "localhost",
  database: "STACK-HR",
  port: 5432,
});

module.exports = pool;
