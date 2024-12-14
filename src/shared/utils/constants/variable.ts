// App
export const NEXT_PUBLIC_APP_BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL ?? "";
export const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

// Gmail
export const GMAIL_SENDER_USERNAME = process.env.GMAIL_SENDER_USERNAME ?? "";
export const GMAIL_SENDER_PASSWORD = process.env.GMAIL_SENDER_PASSWORD ?? "";

// Mongo
export const MONGO_DATABASE = process.env.MONGO_DATABASE ?? "";
export const MONGO_ATLAS_URI = process.env.MONGO_ATLAS_URI ?? "";

// Secret
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET ?? "";
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET ?? "";

export const SALT_ROUNDS = 10;
export const ACCESS_TOKEN_DURATION = "15m";
export const REFRESH_TOKEN_DURATION = "12h";
export const HAS_ALGORITHM = "sha256"