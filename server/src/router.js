import { getBalance } from './controller/infoController.js';
import { targetTrade } from './controller/tradeController.js';
import express from 'express';
const router = express.Router();

router.route("/balance").get(getBalance);

router.route("/place").post(targetTrade);

export default router;
