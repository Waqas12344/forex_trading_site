// Import dependencies
 import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// Controller for user-related actions
export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      password // Password will be hashed automatically via the schema pre-save hook
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Create a JWT token for the user
    const token = jwt.sign({ id: savedUser._id }, 'your_jwt_secret', { expiresIn: '1h' });

    // Send response with the user and token
    res.status(201).json({ user: savedUser, token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare password
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    // Send response with user and token
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
