import * as api from "../api";

export const getAdvisors = (userFeatures, advisorCount, filterByName, filterByMajor, filterByLocation) => async (dispatch) => {
    try {
        const { data } = await api.getAdvisors(userFeatures, advisorCount, filterByName, filterByMajor, filterByLocation);
        dispatch({type: "GET_ADVISORS", payload: data});
    } catch (error) {
        
    }
}