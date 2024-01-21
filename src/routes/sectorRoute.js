const sectorController = require("../controllers/sectorController");

const router = require("express").Router();

router
  .route("/")
  .get(sectorController.getAllSectors)
  .post(sectorController.createSector);

module.exports = router;
