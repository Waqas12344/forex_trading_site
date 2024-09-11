import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routers/userRoute.js';
const app =express();

app.use(cors());
app.use(express.json());

 

const mongoURI = 'mongodb://localhost:27017/forex_site'; // Replace with your actual connection string

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

  app.use('/api/user',userRouter)


app.listen(5000,()=>{
    console.log("server is running on port 5000");
});
