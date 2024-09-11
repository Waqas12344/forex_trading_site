// Import dependencies using ES module syntax
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

// Define User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true, // Required for sign-up
  },
  email: {
    type: String,
    required: true, // Required for both sign-up and sign-in
    unique: true, // To ensure no duplicate emails
    lowercase: true, // Ensures email is stored in lowercase
    trim: true // Removes whitespace from both ends
  },
  password: {
    type: String,
    required: true, // Required for both sign-up and sign-in
    minlength: 6 // You can define password length requirement
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically store when the user was created
  }
});

// Hash password before saving to database
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Compare password method for sign-in
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create and export User model using ES module syntax
const User = mongoose.model('User', UserSchema);
export default User;
