import express from 'express';
import { getAllBanks, addBank } from '../controllers/bankController';

const router = express.Router();

router.get('/', getAllBanks);
router.post('/', addBank);

export default router;
