import { Student } from "@/models/Student";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handler(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "POST") {
    console.log("Body:",req?.body)
    const { username, password } = req.body;
    if (username) {
      res.json(await Student.findOne({ username }));
    } else {
      res.json(await Student.find());
    }
  }
}
