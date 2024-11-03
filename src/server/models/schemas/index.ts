import * as Yup from "yup";

const passwordSchema = Yup.string().min(8).max(100).required();

// Define the refresh token schema
export const refreshTokenSchema = Yup.object().shape({
  expiredToken: Yup.string().min(1).max(1000).required(),
  refreshToken: Yup.string().min(1).max(1000).required(),
});

export const signInSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: passwordSchema,
});

export const signUpSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: passwordSchema,
});
