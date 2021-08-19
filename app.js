const express = require("express");
const app = express();
const bodyparser = require("body-parser");


//db connection
require("./config/dbconnection")

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())

const schedulingRoutes = require("./routes/scheduling");
app.use(schedulingRoutes);

app.listen("3000", function () {
  console.log("started");
});
