import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({
    message: "Get a person with a person ID",
    method: req.method,
    id: req.query.id,
  });
};
