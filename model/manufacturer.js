const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manufacturerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is Require"]
  }
});

const Manufacturer = mongoose.model("manufacturer", manufacturerSchema);
module.exports = Manufacturer;
