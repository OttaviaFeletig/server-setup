const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const mongoURI = require("./config.js").mongoURI;
const options = require("./config.js").options;
const cors = require("cors");

//initialize express app
const app = express();
const port = process.env.PORT || 5000;

//connect to DB

mongoose
  .connect(mongoURI, options)
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/jobs", require("./routes/jobs"));
app.use("/companies", require("./routes/companies"));

app.listen(port, () => {
  console.log("hello world");
  console.log("Server is running on " + port + "port");
});
