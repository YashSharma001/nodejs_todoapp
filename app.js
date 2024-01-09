import express from 'express'
import mongoose from 'mongoose';
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import { connectDB } from './data/database.js';
import { config } from 'dotenv'
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.js';
import cors from 'cors'

const app = express();

config({
    path: "./data/config.env",
})

//using middleware
app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,  //helps to send cookies
}))

//using router(use after express.json() -middleware)
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

connectDB();

app.get("/", (req, res) => {
    res.send("Nice")
})

//using error middleware
app.use(errorMiddleware)

app.listen(process.env.PORT, () => {
    console.log(`server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`)
})