import axios from "axios";


const createUserUrl = "http://localhost:5005/user/register";
const loginUserUrl = "http://localhost:5005/user/login";
const loginLocallyUrl = "http://localhost:5005/user/login-with-localstorage";
const forgetPasswordUrl = "http://localhost:5005/user/forget-my-password";
const emailCheckUrl = "http://localhost:5005/user/is-email-exist";

const getAdvisorsUrl = "http://localhost:5005/advisors/get-advisors";

export const createUser = (newUser) => axios.post(createUserUrl, newUser);
export const loginUser = (user) => axios.post(loginUserUrl, user);
export const loginLocally = (user) => axios.post(loginLocallyUrl, user);
export const forgetPassword = (email) => axios.post(forgetPasswordUrl, {email: email});
export const emailCheck = (email) => axios.post(emailCheckUrl, {email: email});

export const getAdvisors = 
    (userFeatures, advisorCount, filterByName, filterByMajor, filterByLocation) => 
        axios.get(getAdvisorsUrl, { params : {
            userFeatures: userFeatures, 
            advisorCount: advisorCount, 
            filterByName: filterByName, 
            filterByMajor: filterByMajor, 
            filterByLocation: filterByLocation
        }
        })