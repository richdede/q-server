const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Applicant must have a name"],
    },
    sector: {
      type: mongoose.Types.ObjectId,
      ref: "Sector",
      required: [true, "Sector is required"],
    },
    agreeWithTerms: {
      type: Boolean,
      required: [true, "agreeWithTerms is required"],
    },
  },
  { timestamps: true }
);

applicantSchema.pre(/^find/, function (next) {
  this.populate({
    path: "sector",
  });

  next();
});

const Applicant = mongoose.model("Applicant", applicantSchema);

module.exports = Applicant;
