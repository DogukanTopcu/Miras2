import express from "express";
import { getAdvisors } from "../controllers/Advisors.js";

const router = express.Router();

router.post("/get-advisors", getAdvisors);



export default router;