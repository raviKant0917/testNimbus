import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firebaseId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        minLength: 5,
        maxLength: 128,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        min: 6000000000,
        max: 9999999999,
        null: false,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        minLength: 2,
        maxLength: 255,
        required: true
    },
    omegeleReports : {
        type: Number,
        default : 0
    },
    OmegleAllowed : {
        type : Boolean,
        default : true
    },
    favTeamVote: {
        type: Boolean,
        default: false
    },
    instaId: {
        type: String,
        null: true,
        default: "",
        maxLength: 250
    },
    profileImage: {
        type: String,
        maxLength: 255
    },
    totalScore: {
        type: Number,
        default: 0
    },
    linkedinId: {
        type: String,
        maxLength : 255
    }
},{timestamps: true});

export const User = mongoose.model("User",userSchema);

