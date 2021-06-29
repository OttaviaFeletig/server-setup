const express = require("express");
const router = express.Router();
const jobModel = require("../models/jobsModel");
router.get("/all", (req, res) => {
  jobModel
    .find({})
    .populate({ path: "company", select: ["name", "description", "reviews"] })
    // .populate({ path: "company.reviews" })
    .then((jobs) => {
      res.send(jobs);
    })
    .catch((err) => res.send(err));
});

router.get("/:location", (req, res) => {
  const location = req.params.location;
  jobModel
    .find({ location: location })
    // .populate({ path: "company", select: ["name", "description"] })
    .then((jobs) => {
      res.send(jobs);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
