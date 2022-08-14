import { combineReducers } from "redux";

import user from "./users";
import advisors from "./advisors";

export default combineReducers({
    user, // users: users
    advisors,
});