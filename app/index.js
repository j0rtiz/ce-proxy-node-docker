const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;
const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
});

const names = ["Jon Snow", "Robb Stark", "Daenerys Targaryen"];
let response = "<h1>Full Cycle Rocks!</h1>";

for (const name of names) {
  connection.query(`INSERT INTO people(name) values('${name}')`);
}
connection.query("SELECT name FROM people", (error, results) => {
  response += "<p>";
  response += results.map(({ name }) => name).join(",</p><p>");
  response += "</p>";
});
connection.end();

app.get("/", (req, res) => {
  res.send(response);
});

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
});
