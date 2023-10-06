import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please provide a email"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "please provide a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: Number,
    default: 1,
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  verifyToken: String,
  verifyTokenExpirty: Date,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
