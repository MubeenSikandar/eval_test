import express from "express"
import { getCalls, makeCalls } from "../controllers/calls.js";

const router = express.Router();



router.get('/', getCalls);
router.get('/', makeCalls);

export default router;