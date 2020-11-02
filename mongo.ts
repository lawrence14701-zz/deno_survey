import { MongoClient } from "./deps.ts";

const client = new MongoClient();
client.connectWithUri(
  "mongodb+srv://dev:dev123@cluster0.hxzpp.mongodb.net/cluster0?retryWrites=true&w=majority"
);
const db = client.database("deno_survey");

export const usersCollection = db.collection("users");
