import { NowRequest, NowResponse } from "@vercel/node";
import { getCollection } from "./mongodb";

export default async (request: NowRequest, response: NowResponse) => {
  const collection = await getCollection("todos");
  const todos = await collection.find({}).toArray();

  response.status(200).json(todos);
};
