const express = require("express");
const app = express();
const port = 8000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

let posts = [
  {
    username: "apnacollage",
    content: "I Love YOU",
  },
  {
    username: "shradhaKhapra",
    content: "Hard work is important to achieve success",
  },
  {
    username: "rahulkumar",
    content: "I love coding",
  },
];


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));

app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

app.listen(port, () => {
  console.log("listening to port : 8000");
});