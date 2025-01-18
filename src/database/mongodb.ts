import { Collection, Db, MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
let client: MongoClient;
let database: Db;

async function createConnection(databaseName: string): Promise<void> {
  try {
    client = new MongoClient(url);
    await client.connect();
    database = client.db(databaseName);
  } catch (error) {
    throw error;
  }
}

function collection(collectionName: string): Collection {
  return database.collection(collectionName);
}

async function closeConnection(): Promise<void> {
  await client.close();
}

export default { createConnection, collection, closeConnection };
