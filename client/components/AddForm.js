import { useRouter } from "next/router";
import { Button, Form, Input } from "./Styledcomponent";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 10px; */
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: antiquewhite;
`;

const TeacherDiv = styled.div`
  background-color: aliceblue;
  padding: 50px;
  border-radius: 20px;
`


export default function AddFeedback({
  _id,
  subjectknowledge: existingSubjectknowledge,
  behaviour: existingBehaviour,
  positivity: existingPositivity,
  motivation: existingMotivation,
  timepunctuality: existingTimepunctuality,
  interaction: existingInteraction,
  doubtclearing: existingDoubtclearing,
  comment: existingComment,
  // tname : existingTname,
  // tid : existingTid,
  // temail: existing
}) {
  const router = useRouter();
  const { pathname } = router;

  const [subjectknowledge, setSubjectknowledge] = useState(
    existingSubjectknowledge || 0
  );
  const [behaviour, setBehaviour] = useState(existingBehaviour || 0);
  const [positivity, setPositivity] = useState(existingPositivity || 0);
  const [motivation, setMotivation] = useState(existingMotivation || 0);
  const [timepunctuality, setTimepunctuality] = useState(
    existingTimepunctuality || 0
  );
  const [interaction, setInteraction] = useState(existingInteraction || 0);
  const [doubtclearing, setDoubtclearing] = useState(
    existingDoubtclearing || 0
  );
  const [comment, setComment] = useState(existingComment || "");

  const { id } = router.query;
  const [teacherInfo, setTeacherInfo] = useState();
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/teacher?id=" + id).then((res) => {
      setTeacherInfo(res.data);
    });
  }, [id]);

  console.log(teacherInfo);

  async function addFeedback(e) {
    e.preventDefault();
    const data = {
      tname: teacherInfo?.name,
      tid: teacherInfo?.tid,
      temail: teacherInfo?.email,
      subjectknowledge,
      behaviour,
      positivity,
      motivation,
      timepunctuality,
      interaction,
      doubtclearing,
      comment,
    };
    console.log(data);
    await axios.post("/api/feedback", data);
    alert("Feedback Done");
    router.push("/teachers");
  }
  async function editFeedback(e) {
    e.preventDefault();
    const data = {
      tname: teacherInfo?.name,
      tid: teacherInfo?.tid,
      temail: teacherInfo?.email,
      subjectknowledge,
      behaviour,
      positivity,
      motivation,
      timepunctuality,
      interaction,
      doubtclearing,
      comment,
    };
    console.log(data);
    await axios.put("/api/feedback", data);
    alert("Feedback Updated");
    router.push("/teachers");
  }

  return (
    <MainDiv>
      <TeacherDiv>
        <h3>Teacher name : {teacherInfo?.name}</h3>
        <h3>Department : {teacherInfo?.department}</h3>
        <h3>Email : {teacherInfo?.email}</h3>
        <h3>Subject : {teacherInfo?.subjects}</h3>
      </TeacherDiv>

      <Form>
        <InputBox>
          <h3>Subject Knowledge : </h3>
          {[...Array(5)].map((star, i) => {
            const currrate = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  id="radiostar"
                  name="subjectknowledge"
                  value={currrate}
                  onClick={() => setSubjectknowledge(currrate)}
                />
                <FaStar
                  id="rating-star"
                  color={currrate <= subjectknowledge ? "#ffc107" : "#e4e5e9"}
                  size={55}
                />
              </label>
            );
          })}
        </InputBox>
        <InputBox>
          <h3>Behaviour : </h3>
          {[...Array(5)].map((star, i) => {
            const currrate = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  id="radiostar"
                  name="behaviour"
                  value={currrate}
                  onClick={() => setBehaviour(currrate)}
                />
                <FaStar
                  id="rating-star"
                  color={currrate <= behaviour ? "#ffc107" : "#e4e5e9"}
                  size={55}
                />
              </label>
            );
          })}
        </InputBox>
        <InputBox>
          <h3>Positivity : </h3>
          {[...Array(5)].map((star, i) => {
            const currrate = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  id="radiostar"
                  name="positivity"
                  value={currrate}
                  onClick={() => setPositivity(currrate)}
                />
                <FaStar
                  id="rating-star"
                  color={currrate <= positivity ? "#ffc107" : "#e4e5e9"}
                  size={55}
                />
              </label>
            );
          })}
        </InputBox>
        <InputBox>
          <h3>Motivation : </h3>
          {[...Array(5)].map((star, i) => {
            const currrate = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  id="radiostar"
                  name="motivation"
                  value={currrate}
                  onClick={() => setMotivation(currrate)}
                />
                <FaStar
                  id="rating-star"
                  color={currrate <= motivation ? "#ffc107" : "#e4e5e9"}
                  size={55}
                />
              </label>
            );
          })}
        </InputBox>
        <InputBox>
          <h3>Punctuality : </h3>
          {[...Array(5)].map((star, i) => {
            const currrate = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  id="radiostar"
                  name="timepunctuality"
                  value={currrate}
                  onClick={() => setTimepunctuality(currrate)}
                />
                <FaStar
                  id="rating-star"
                  color={currrate <= timepunctuality ? "#ffc107" : "#e4e5e9"}
                  size={55}
                />
              </label>
            );
          })}
        </InputBox>
        <InputBox>
          <h3>Interaction : </h3>
          {[...Array(5)].map((star, i) => {
            const currrate = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  id="radiostar"
                  name="interaction"
                  value={currrate}
                  onClick={() => setInteraction(currrate)}
                />
                <FaStar
                  id="rating-star"
                  color={currrate <= interaction ? "#ffc107" : "#e4e5e9"}
                  size={55}
                />
              </label>
            );
          })}
        </InputBox>
        <InputBox>
          <h3>Doubt Clearing : </h3>
          {[...Array(5)].map((star, i) => {
            const currrate = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  id="radiostar"
                  name="doubtclearing"
                  value={currrate}
                  onClick={() => setDoubtclearing(currrate)}
                />
                <FaStar
                  id="rating-star"
                  color={currrate <= doubtclearing ? "#ffc107" : "#e4e5e9"}
                  size={55}
                />
              </label>
            );
          })}
        </InputBox>
        <Input
          type="text"
          placeholder="Comment"
          value={comment}
          name="comment"
          onChange={(e) => setComment(e.target.value)}
        />
        {pathname?.includes("/edit") ? (
          <Button onClick={editFeedback}>Update</Button>
        ) : (
          <Button onClick={addFeedback}>Add</Button>
        )}
      </Form>
    </MainDiv>
  );
}
