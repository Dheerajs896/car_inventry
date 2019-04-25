const express = require("express");
const router = express.Router();
const Manufacturer = require("../model/manufacturer");

//Insert Data Into Database
router.post("/manufacturer", (req, res, next) => {
  Manufacturer.create(req.body)
    .then(err => {
      res.send({ status: "true", msg: "Details Added Successfully" });
    })
    .catch(err => {
      res.send({
        status: "false",
        msg: "Sonething went wrong to Add Details"
      });
    });
});

//Fetch Data From Database
router.get("/manufacturer", (req, res, next) => {
  Manufacturer.find({}, (err, result) => {
    res.send({ status: "true", data: result });
  }).catch(err => {
    res.send({
      status: "false",
      msg: "Sonething went wrong to update Details"
    });
  });
});

//Update Data Into Database
router.put("/manufacturer/:id", (req, res, next) => {
  Manufacturer.findByIdAndUpdate({ _id: req.params.id }, req.body, err => {
    res.send({ status: "true", msg: "Details Updated Successfully" });
  }).catch(err => {
    res.send({
      status: "false",
      msg: "Sonething went wrong to update Details"
    });
  });
});

//Update Data Into Database
router.delete("/manufacturer/:id", (req, res, next) => {
  Manufacturer.findByIdAndDelete({ _id: req.params.id }, err => {
    res.send({ status: "true", msg: "Data deleted successfully" });
  }).catch(err => {
    res.send({
      status: "false",
      msg: "Sonething went wrong to update Details"
    });
  });
});

module.exports = router;
