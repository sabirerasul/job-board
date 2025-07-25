import express from 'express';
import { getJobs, getJobById, addJob } from '../controllers/jobController.js';
import { validateJob } from '../validation/jobValidation.js';

const router = express.Router();

router.get('/', getJobs);
router.get('/:id', getJobById);
router.post('/', validateJob, addJob);

export default router;
