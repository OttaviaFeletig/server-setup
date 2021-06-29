const mongoose = require("mongoose");
const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
  },
});

module.exports = mongoose.model("job", jobSchema);
