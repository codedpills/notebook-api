const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = mongoose.connect(
  "mongodb+srv://codedpills:rDmnsaKJxRL9jfOJ@cluster0-94q8o.azure.mongodb.net/notebook?retryWrites=true&w=majority"
);

const PORT = process.env.PORT || 5000;
const notebookRouter = require("./routes/notebookRouter")();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", notebookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Notebook app API");
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
