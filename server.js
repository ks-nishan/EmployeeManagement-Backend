const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//routes
const employeeRoute = require("./routes/employee");

app.use(bodyParser.json());
app.use(cors());
app.use(employeeRoute);

const PORT = 8000;
const DB_URL =
  "mongodb+srv://nishanthan:nisha123@betacluster.yfpdch9.mongodb.net/empManagement?retryWrites=true&w=majority";

//Database connection
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB connected succesfully");
  })
  .catch((err) => {
    console.log("DB connection Error", err);
  });

//application run
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
