import express from 'express';
import { registerStudent, updateStudentSelection, getStudentDetails } from '../controllers/studentController';

const router = express.Router();

router.post('/', registerStudent);
router.put('/:id/selection', updateStudentSelection);
router.get('/:id', getStudentDetails);

export default router;
