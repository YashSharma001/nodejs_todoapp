import mongoose from 'mongoose';

//connect to database
export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "backendapi"
    }).then(() => {
        console.log("database connected");
    }).catch((e) => {
        console.log(e)
    })
};