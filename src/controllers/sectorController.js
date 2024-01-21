const Sector = require("../models/sectorsModels");

exports.createSector = async (req, res, next) => {
  try {
    await Sector.create({
      name: req.body.name,
      group: req.body.group,
    });
    res.status(200).json({ status: "success", message: "Sector created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Fail to get sectors",
      data: null,
    });
  }
};

exports.getAllSectors = async (req, res, next) => {
  try {
    const sectors = await Sector.find();
    res.status(200).json({
      status: "success",
      data: { sectors },
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
