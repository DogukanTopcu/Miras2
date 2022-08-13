import axios from "axios";


const createUserUrl = "http://localhost:5005/user/register";
const loginUserUrl = "http://localhost:5005/user/login";
const loginLocallyUrl = "http://localhost:5005/user/login-with-localstorage";
const forgetPasswordUrl = "http://localhost:5005/user/forget-my-password";

export const createUser = (newUser) => axios.post(createUserUrl, newUser);
export const loginUser = (user) => axios.post(loginUserUrl, user);
export const loginLocally = (user) => axios.post(loginLocallyUrl, user);
export const forgetPassword = (email) => axios.post(forgetPasswordUrl, {email: email});