import express from 'express';
import { getAllUniversities, addUniversity } from '../controllers/universityController';

const router = express.Router();

router.get('/', getAllUniversities);
router.post('/', addUniversity);

export default router;
