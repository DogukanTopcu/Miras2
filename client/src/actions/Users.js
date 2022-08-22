import * as api from "../api";


export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);
        dispatch({ type: "CREATE", payload: data });
    } catch (error) {
        console.log(error);
    }
}


export const login = (user) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(user);
        dispatch({ type: "LOGIN", payload: data });
        localStorage.setItem("currentUser", JSON.stringify(data));
    } catch (error) {
        console.log(error);
        console.log("No User Exist");
    }
}

export const loginLocally = (user) => async (dispatch) => {
    try {
        const { data } = await api.loginLocally(user);
        dispatch({ type: "LOGINLOCALLY", payload: data });
    } catch (error) {
        console.log(error);
        console.log("No User Exist");
    }
}

export const forgetPassword = (email) => async (dispatch) => {
    try {
        const { data } = await api.forgetPassword(email);
        dispatch({ type: "FORGETPASS", payload: data });
    } catch (error) {
        console.log(error);
    }
}



export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem("currentUser");
        dispatch({ type: "LOGOUT", payload: [] });
    } catch (error) {
        console.log(error);
    }
}