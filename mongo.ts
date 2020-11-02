import { MongoClient } from "./deps.ts";

const client = new MongoClient();
client.connectWithUri("");
const db = client.database("deno_survey");
