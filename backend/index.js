import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js';
import { userRouter } from './router/user.router.js';
dotenv.config();
const app =express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
    
}));
 app.use('/user/',userRouter);
 connectDb();

app.listen(5000,()=>{
    console.log("server running")
});

