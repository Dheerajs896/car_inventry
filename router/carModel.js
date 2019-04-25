const express = require("express");
const router = express.Router();
const carModel = require("../model/carModel");

//Insert Data into DB
router.post("/model", (req, res) => {
  carModel
    .create(req.body)
    .then(() => {
      res.send({ status: "true", msg: "Car Model Added Successfully" });
    })
    .catch(error => {
      res.send({
        status: "false",
        msg: "Something went wrong to add model details"
      });
    });
});
//fetch data from DB
router.get("/model", (req, res) => {
  carModel
    .find({})
    .then(result => {
      res.send({ status: "true", data: result });
    })
    .catch(error => {
      res.send({
        status: "true",
        msg: "Something went wrong to fetch details",
        data: error
      });
    });
});

//Update Model Details
router.put("/model/:id", (req, res) => {
  carModel
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.send({ status: "true", msg: "Car Model Updated Successfully" });
    })
    .catch(error => {
      res.send({
        status: "true",
        msg: "Something went wrong to fetch details",
        data: error
      });
    });
});

//Delete details
router.delete("/model/:id", (req, res) => {
  carModel
    .findByIdAndDelete({ _id: req.params.id })
    .then(() => {
      res.send({ status: "true", msg: "Car Model Deleted Successfully" });
    })
    .catch(error => {
      res.send({
        status: "true",
        msg: "Something went wrong to fetch details",
        data: error
      });
    });
});

module.exports = router;
