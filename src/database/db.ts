import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI!;

const client = new MongoClient(uri);

await client.connect();

export const mongoDb = client.db("example");
