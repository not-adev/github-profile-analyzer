import { Router } from "express";

const analyzeProfile = function() {};
const etAllProfiles = analyzeProfile;
const getSingleProfile = analyzeProfile;
const getAllProfiles = getSingleProfile;


 const router = Router();

router.get("/analyze/:username",analyzeProfile);

router.get("/profiles",getAllProfiles);

router.get("/profiles/:username",getSingleProfile);

export default router