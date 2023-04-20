const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "@mypostgresql2023",
  host: "localhost",
  database: "STACK-HR",
  port: 5432,
});

module.exports = pool;
