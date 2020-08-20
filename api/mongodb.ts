import { parse } from "url";
import { MongoClient, Db, Collection } from "mongodb";

let cachedDb = null;

export async function getDatabase(uri: string): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(parse(uri).pathname.substr(1));
  cachedDb = db;
  return db;
}

export async function getCollection(name: string): Promise<Collection> {
  const db = await getDatabase(process.env.MONGODB);
  return db.collection(name);
}
