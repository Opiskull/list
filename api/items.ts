import { NowRequest, NowResponse } from "@vercel/node";

export default (request: NowRequest, response: NowResponse) => {
  const items = [];

  response.status(200).send(items);
};
