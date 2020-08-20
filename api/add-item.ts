import { NowRequest, NowResponse } from "@vercel/node";
import { getCollection } from "./mongodb";

export default async (request: NowRequest, response: NowResponse) => {
  const collection = await getCollection("todos");
  const todo = JSON.parse(request.body);
  await collection.insertOne(todo);

  response.status(201).json({ data: todo });
};
