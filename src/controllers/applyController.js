const Applicant = require("../models/applicantModels");

exports.applySector = async (req, res, next) => {
  try {
    const apply = await Applicant.create({
      name: req.body.name,
      sector: req.body.sector,
      agreeWithTerms: req.body.agreeWithTerms,
    });
    console.log(apply);
    res.status(201).json({
      status: "success",
      message: "Application successful",
      id: apply._id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Fail to get sectors",
      data: null,
    });
  }
};

exports.updateApplication = async (req, res, next) => {
  const apply = await Applicant.findByIdAndUpdate(req.body.applicationID, {
    name: req.body.name,
    sector: req.body.sector,
    agreeWithTerms: req.body.agreeWithTerms,
  });
  res.status(200).json({
    status: "success",
    message: "Application updated successful",
    id: apply._id,
  });
};

exports.getApplicant = async (req, res, next) => {
  try {
    const applicant = await Applicant.findById({ _id: req.params.id });
    if (!applicant)
      res.status(404).json({ status: "error", message: "Applicant not found" });
    res.status(200).json({
      status: "success",
      data: { applicant },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Fail to get applicant",
      data: null,
    });
  }
};
exports.getAllApplicant = async (req, res, next) => {
  try {
    const applicants = await Applicant.find();
    res.status(200).json({
      status: "success",
      data: { applicants },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Fail to get applicants",
      data: null,
    });
  }
};
