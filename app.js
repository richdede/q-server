const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const sectorRoutes = require("./src/routes/sectorRoute");
const applicantRoutes = require("./src/routes/applicantRoute");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/v1/health", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Server is up and running",
  });
});

app.use("/api/v1/sector", sectorRoutes);
app.use("/api/v1/applicant", applicantRoutes);

module.exports = app;
