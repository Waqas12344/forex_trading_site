import express from 'express';
import { signIn, signUp } from '../controller/userController.js';
 
const userRouter = express.Router();

// Sign-up route
userRouter.post('/signup', signUp);

// Sign-in route
userRouter.post('/signin', signIn);

export default userRouter;
