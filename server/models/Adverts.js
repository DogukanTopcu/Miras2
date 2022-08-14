import mongoose from "mongoose";

const advertsSchema = mongoose.Schema({
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

const Adverts = mongoose.model("Adverts", advertsSchema);

export default Adverts;