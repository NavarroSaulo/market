const express = require("express");
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "containers-us-west-86.railway.app",
    user: "postgres",
    password: "Ra9wamERKKBgSTFhre10",
    database: "railway",
    port: "7695",
  },
  useNullAsDefault: true,
});
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", async function (req, res) {
  console.log("teste");

  const products = await knex.select("*").from("products");
  return res.json(products);
});

app.listen(3000);
