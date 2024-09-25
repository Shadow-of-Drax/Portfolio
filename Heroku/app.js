const express = require("express");
const app = express();
const port = process.env.PORT;

const { Client } = require("pg");
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
client.connect();

app.get("/", (req, res) => {
  client.query(
    "INSERT into visits (created_at) values (NOW())",
    (err, response) => {
      if (err) throw err;
    }
  );

  return res.send("Sucessfuly recorded the visit");
});

app.listen(port, () => {
  console.log(`SERVER STARTED`);
});
