import { MONGO_DB_PASSWORD, MONGO_DB_USERNAME } from "./index";
import mongoose from "mongoose";

export async function run() {
  const uri = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@cluster-soat-0.j9lyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-soat-0";`;
  const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
  };
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    console.log(`${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}`);
    await mongoose.connect(uri, clientOptions);
    console.log("Connected to MongoDB! ");
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
