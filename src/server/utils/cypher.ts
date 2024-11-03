import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../config";
import {
  ACCESS_TOKEN_DURATION,
  REFRESH_TOKEN_DURATION,
} from "./constants/token";

// Generate Access Token with short expiration
export const generateAccessToken = (data = {}) => {
  return jwt.sign(data, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_DURATION,
  });
};

// Generate Refresh Token with long expiration
export const generateRefreshToken = (data = {}) => {
  return jwt.sign(data, REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_DURATION,
  });
};
