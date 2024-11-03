import mongoose, { Model } from "mongoose";
import {
  ITrackingMetaData,
  setTrackingMetaData,
  trackingMetaData,
} from "./base-model";

export interface IUser extends ITrackingMetaData {
  username?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

// Define the User Schema
const userSchema = new mongoose.Schema({
  ...trackingMetaData,
  username: {
    type: String,
    default: "unknown",
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum length for password
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
});

// Middleware to update the updatedAt field before saving
userSchema.pre("save", async function (next) {
  setTrackingMetaData(this);
  next();
});

// Post-save middleware to perform actions after saving
userSchema.post("save", function (newDoc, next) {
  next();
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
