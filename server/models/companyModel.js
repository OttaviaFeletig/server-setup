const mongoose = require("mongoose");
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  jobs: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "job" }],
  },
  reviews: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      text: { type: String },
    },
  ],
});
module.exports = mongoose.model("company", companySchema);
