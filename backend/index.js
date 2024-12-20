import express from 'express';
import mongoose from 'mongoose';
import RootRouter from './routers/index.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
await mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected database')
})

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',  // Change this to your frontend URL
    credentials: true,  // Allow credentials (cookies)
  }));
app.use(express.json());
app.use('/api',RootRouter);
app.listen(process.env.PORT, () =>{
    console.log('Server is running...')
})