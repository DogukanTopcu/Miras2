import Users from "../models/Users.js";

export const createUser = async (req, res) => {
    const user = req.body;
    const isUserExist = await Users.findOne({email: user.email});
    if (isUserExist !== null) {
        return res.status(409).json({ message: "user is exist"});
    }
    const newUser = new Users(user);
    
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

export const login = async (req, res) => {
    const user = req.body;
    try {
        const isUserExist = await Users.findOne({email: user.email, password: user.password});
        if (isUserExist !== null) {
            res.send(isUserExist);
        }
        else {
            res.status(400).json({ message: "deneme" });
            console.log(isUserExist);
        }
    } catch (error) {
        res.status(409);
    }
}

export const loginLocally = async (req, res) => {
    const user = req.body;
    try {
        const isUserExist = await Users.findOne({email: user.email, password: user.password});
        if (isUserExist !== null) {
            res.send(isUserExist);
        }
        else {
            res.status(400).json({ message: "deneme" });
            console.log(isUserExist);
        }
    } catch (error) {
        res.status(409);
    }
}


export const forgetPassword = async (req, res) => {
    const email = req.body.email;
    try {
        const user = Users.findOne({email: email});
        if (user !== null) {
            
        }
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


export const newPassword = async (req, res) => {
    
}


export const isUserExist = async (req, res) => {
    try {
        const isExist = await Users.findOne({ email: req.body.email });
        if (isExist._id) {
            res.send(true);
        }
    } catch (error) {
        res.send(false);
    }
}