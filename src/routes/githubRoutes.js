import { Router } from "express";

import {
    analyzeProfile,
    getAllProfiles,
    getSingleProfile
} from '../controlers/githubController.js'

const router = Router();

router.get("/analyze/:username", analyzeProfile);

router.get("/profiles", getAllProfiles);

router.get("/profiles/:username", getSingleProfile);
export default router;
