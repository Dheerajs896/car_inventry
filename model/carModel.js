const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carModelSchema = new Schema({
  manufecturers: {
    type: String,
    required: [true, "Please Select Manufacturers"]
  },
  model: {
    type: String,
    required: [true, "Please Enter Model Name"]
  },
  qty: {
    type: Number,
    required: [true, "Please Enter Quantity"]
  }
});

const carmodel = mongoose.model("model", carModelSchema);
module.exports = carmodel;
