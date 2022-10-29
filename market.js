const express = require("express");
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./mydb.sqlite",
  },
  useNullAsDefault: true,
});
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", async function (req, res) {
  const products = await knex("products").select("*");
  res.json(products);
});

app.listen(3000);
