import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI! ?? "mongodb://root:example@localhost:27017?authSource=admin";

const client = new MongoClient(uri);

await client.connect();

export const mongoDb = client.db("example");
