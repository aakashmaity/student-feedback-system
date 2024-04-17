import { Student } from "@/models/Student";
import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const { method } = req;
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Student.findOne({ _id: req.query?.id }));
    } else {
      res.json(await Student.find());
    }
  }

  if (method === "POST") {
    const {
      username,
      password,
      name,
      rollno,
      email,
      dateofbirth,
      dateofadmission,
      department,
      graduationyear,
    } = req.body;
    const StudentDoc = await Student.create({
      username,
      password,
      name,
      rollno,
      email,
      dateofbirth,
      dateofadmission,
      department,
      graduationyear,
    });
    res.json(StudentDoc);
  }

  if (method === "PUT") {
    const {
      username,
      password,
      name,
      rollno,
      email,
      dateofbirth,
      dateofadmission,
      department,
      graduationyear,
      _id,
    } = req.body;
    await Student.updateOne(
      { _id },
      {
        username,
        password,
        name,
        rollno,
        email,
        dateofbirth,
        dateofadmission,
        department,
        graduationyear,
        _id,
      }
    );
    res.json(true);
  }

  if (method == "DELETE") {
    if (req.query?.id) {
      await Student.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
