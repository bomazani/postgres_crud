const { Client } = require("pg");
const client = new Client({
    database: "users"
});

client.connect();

client.query("SELECT * FROM users", (err, res) => {
    console.log(res.rows)
});