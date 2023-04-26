const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
<<<<<<< HEAD
  password: "@mypostgresql2023",
=======
  password: "harrybing16",
>>>>>>> 4183df2164da5904510d8a47c116eacff7ac83d2
  host: "localhost",
  database: "STACK-HR",
  port: 5432,
});

module.exports = pool;
