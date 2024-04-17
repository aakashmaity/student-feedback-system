import { Feedback } from "@/models/Feedback";
import { mongooseConnect } from "@/lib/mongoose";


export default async function handler(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Feedback.findOne({ _id: req.query?.id }));
    } else {
      res.json(await Feedback.find());
    }
  }


  if (method === "POST") {
    const {
      tname,
      tid,
      temail,
      subjectknowledge,
      behaviour,
      positivity,
      motivation,
      timepunctuality,
      interaction,
      doubtclearing,
      comment,
    } = req.body;
    const FeedbackDoc = await Feedback.create({
      tname,
      tid,
      temail,
      subjectknowledge,
      behaviour,
      positivity,
      motivation,
      timepunctuality,
      interaction,
      doubtclearing,
      comment,
    });
    res.json(FeedbackDoc);
  }

  if (method === "PUT") {
    const {
      tname,
      tid,
      temail,
      subjectknowledge,
      behaviour,
      positivity,
      motivation,
      timepunctuality,
      interaction,
      doubtclearing,
      comment,
      _id,
    } = req.body;
    await Teacher.updateOne(
      { _id },
      {
        tname,
      tid,
      temail,
      subjectknowledge,
      behaviour,
      positivity,
      motivation,
      timepunctuality,
      interaction,
      doubtclearing,
      comment,
      }
    );
    res.json(true);
  }

  if (method == "DELETE") {
    if (req.query?.id) {
      await Feedback.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
