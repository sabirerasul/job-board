const express = require("express");
const router = express.Router();
const { getJobs, getJobById, addJob } = require("../controllers/jobController");
const { validateJob } = require("../validation/jobValidation");

router.get("/", getJobs);
router.get("/:id", getJobById);
router.post("/", validateJob, addJob);

module.exports = router;
