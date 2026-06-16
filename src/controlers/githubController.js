import {GithubProfile} from '../database/GithubProfile.js'
// const { analyzeGithubProfile} = require("../services/github.service");
const analyzeGithubProfile = function () { }
export const analyzeProfile = async (req, res) => {
    try {
        const { username } = req.params;

        const data =
            await analyzeGithubProfile(username);

        const [profile] =
            await GithubProfile.upsert(data);

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getAllProfiles = async (req, res) => {
    try {
        const profiles =
            await GithubProfile.findAll();

        res.json(profiles);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getSingleProfile = async (req, res) => {
    try {
        const profile =
            await GithubProfile.findOne({
                where: {
                    username: req.params.username,
                },
            });

        if (!profile) {
            return res.status(404).json({
                message: "Profile not found",
            });
        }

        res.json(profile);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};