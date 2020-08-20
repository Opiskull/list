import { NowRequest, NowResponse } from "@vercel/node";
import { getCollection } from "./mongodb";
import { ObjectId } from "mongodb";

export default async (request: NowRequest, response: NowResponse) => {
  const collection = await getCollection("todos");
  const todo = JSON.parse(request.body);

  const result = await collection.deleteOne({ _id: new ObjectId(todo._id) });

  response.status(200).json(result);
};
