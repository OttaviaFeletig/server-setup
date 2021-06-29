const express = require("express");
const router = express.Router();
const companyModel = require("../models/companyModel");
router.get("/all", (req, res) => {
  companyModel
    .find({})
    .populate({
      path: "jobs",
      select: ["salary", "description", "title"],
    })
    .then((companies) => {
      res.send(companies);
    })
    .catch((err) => res.send(err));
});

router.get("/:name", (req, res) => {
  const name = req.params.name;
  companyModel
    .find({ name: name })
    .populate({ path: "jobs", select: ["salary", "description", "title"] })
    .then((companies) => {
      res.send(companies);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
