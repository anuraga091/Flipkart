import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: true,
        min : 3,
        max: 20
    },
    
    lastname:{
        type: String,
        trim: true,
        required: true,
        min : 3,
        max: 20
    },
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
        
    }
});

const User = mongoose.model('user', userSchema);

export default User;