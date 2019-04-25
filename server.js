const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const manufacturer = require("./router/router");
const model = require("./router/carModel");

//bind the express app
const app = express();

//define port number
const port = process.env.port || 3000;

//configure the server
app.listen(port, () => {
  console.log(`Server Started At port ${port}`);
});

//bind the body parser
app.use(bodyParser.json());

//connect to mongodb
mongoose.connect("mongodb://localhost/car", { useNewUrlParser: true }, () => {
  console.log("DB Connected Successfully");
});
mongoose.Promise = global.Promise;

//initialize router
app.use("/router", manufacturer);
app.use("/router", model);

//error handling middleware start here
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});
