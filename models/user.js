import mongoose from "mongoose"

//create a schema
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        select: false,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

// create a model(collection)
export const User = mongoose.model("User", schema)