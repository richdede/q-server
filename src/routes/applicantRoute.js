const applicantController = require("../controllers/applyController");

const router = require("express").Router();

router
  .route("/")
  .get(applicantController.getAllApplicant)
  .post(applicantController.applySector)
  .patch(applicantController.updateApplication);
router.get("/:id", applicantController.getApplicant);

module.exports = router;
