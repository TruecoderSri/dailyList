const express = require("express");

const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

var items = ["get-up", "go for a walk", "get breakfast done"];
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  let day = date.getDate();

  res.render("list", { dayOfTheWeek: day, newListItem: items });
});

app.post("/", (req, res) => {
  var op = req.body.newItem;
  items.push(op);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("server is running");
});
