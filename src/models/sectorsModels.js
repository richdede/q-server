const mongoose = require("mongoose");

const sectorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Sector must have a name"],
      // unique: [true, "Sector must have be unique."],
    },
    group: { type: String, required: [true, "Sector must have a name"] },
  },
  { timestamps: true }
);

const Sector = mongoose.model("Sector", sectorSchema);

module.exports = Sector;
