const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
<<<<<<< HEAD
  password: "@mypostgresql2023",
=======
  password: "postgres",
>>>>>>> 0068d115dc63548ddf6a0423f6ca237c862d0974
  host: "localhost",
  database: "STACK-HR",
  port: 5432,
});

module.exports = pool;
