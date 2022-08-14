import Adverts from "../models/Adverts.js"

export const getAdvisors = async (req, res) => {
    const { userFeatures, advisorCount, filterByName, filterByMajor, filterByLocation } = req.body;
    const advisors = await Adverts.find({  });
    try {
        res.send(advisors);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}