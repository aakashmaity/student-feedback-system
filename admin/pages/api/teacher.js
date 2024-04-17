import { Teacher } from "@/models/Teacher";
import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const { method } = req;
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Teacher.findOne({ _id: req.query?.id }));
    } else {
      res.json(await Teacher.find());
    }
  }

  if (method === "POST") {
    const {
      tid,
      name,
      email,
      dateofbirth,
      dateofjoining,
      department,
      subjects,
    } = req.body;
    const TeacherDoc = await Teacher.create({
      tid,
      name,
      email,
      dateofbirth,
      dateofjoining,
      department,
      subjects,
    });
    res.json(TeacherDoc);
  }

  if (method === "PUT") {
    const {
      tid,
      name,
      email,
      dateofbirth,
      dateofjoining,
      department,
      subjects,
      _id,
    } = req.body;
    await Teacher.updateOne(
      { _id },
      {
        tid,
        name,
        email,
        dateofbirth,
        dateofjoining,
        department,
        subjects,
      }
    );
    res.json(true);
  }

  if (method == "DELETE") {
    if (req.query?.id) {
      await Teacher.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
