import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; // or your Atlas URI

const client = new MongoClient(uri);

export default client;
