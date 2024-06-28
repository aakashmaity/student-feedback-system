import { Teacher } from "@/models/Teacher";
import { mongooseConnect } from "@/lib/mongoose";


export default async function handler(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Teacher.findOne({ _id: req.query?.id }));
    } else {
      res.json(await Teacher.find());
    }
  }
}
