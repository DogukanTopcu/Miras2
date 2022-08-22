import express from "express";

import {
    createUser, forgetPassword, isUserExist, login, loginLocally, newPassword,
} from "../controllers/Users.js";


const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);
router.post("/login-with-localstorage", loginLocally);
router.post("/forget-my-password", forgetPassword);
router.patch("/new-password", newPassword);
router.post("/is-email-exist", isUserExist)



export default router;