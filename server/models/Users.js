import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    confirmedEmail: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

    advisor: {
        type: String,
        default: "none"
    },

    savedAdvisors: {
        type: Array,
        default: []
    }
});

const Users = mongoose.model("Users", usersSchema);

export default Users;