import { useRouter } from "next/router";
import { Button, Form, Input } from "./Styledcomponent";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";





export default function AddForm({
  _id,
  name: existingName,
  rollno: existingRollno,
  dateofbirth: existingDateofbirth,
  dateofadmission: existingDateofadmission,
  graduationyear: existingGraduationyear,
  department: existingDepartment,
  setTid: existingTid,
  dateofjoining: existingDateofjoining,
  subjects: existingSubjects,
  email: existingEmail,
}) {
  const router = useRouter();
  const { pathname } = router;

  const [username, setUsername] = useState(existingName || "");
  const [password, setPassword] = useState(existingName || "");
  const [name, setName] = useState(existingName || "");
  const [rollno, setRollno] = useState(existingRollno || "");
  const [dateofbirth, setDateofbirth] = useState(existingDateofbirth || "");
  const [dateofadmission, setDateofadmission] = useState(existingDateofadmission || "");
  const [graduationyear, setGraduationyear] = useState(existingGraduationyear || "");
  const [department, setDepartment] = useState(existingDepartment || "");

  const [tid, setTid] = useState(existingTid || "");
  const [dateofjoining, setDateofjoining] = useState(existingDateofjoining || "");
  const [subjects, setSubjects] = useState(existingSubjects || "");
  const [email, setEmail] = useState(existingEmail || "");


  async function addStudent(e) {
    e.preventDefault();
    const data = {username, password, name,email, rollno, dateofbirth, dateofadmission, graduationyear, department};
    await axios.post('/api/student',data)
    alert("Student created")
    router.push('/student')
  }
  async function editStudent(e) {
    e.preventDefault();
    const data = {name,email, rollno, dateofbirth, dateofadmission, graduationyear, department};
    await axios.put('/api/student',data)
    alert("Student details Updated")
    router.push('/student')
  }
  async function addTeacher(e) {
    e.preventDefault();
    const data = {name,email,subjects, tid, dateofbirth, dateofjoining, department, subjects};
    await axios.post('/api/teacher',data)
    alert("Teacher created")
    router.push('/teacher')
  }
  async function editTeacher(e) {
    e.preventDefault();
    const data = {name,email,subjects, tid, dateofbirth, dateofjoining, department, subjects};
    await axios.put('/api/teacher',data)
    alert("Teacher Updated")
    router.push('/teacher')
  }

  if(pathname.includes("/student/new") || pathname.includes("/student/edit")) {
    return (
      <Form>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <Input
          type="password"
          name="name"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student Name"
        />
        <Input
          type="text"
          name="rollno"
          value={rollno}
          onChange={(e) =>setRollno(e.target.value)}
          placeholder="Roll number"
        />
        <Input
          type="text"
          name="email"
          value={email}
          onChange={(e) =>setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="text"
          id="dateofbirth"
          name="dateofbirth"
          value={dateofbirth}
          onChange={(e) => setDateofbirth(e.target.value)}
          placeholder="Date of birth"
        />
        <Input
          type="text"
          name="dateofadmission"
          value={dateofadmission}
          onChange={(e) => setDateofadmission(e.target.value)}
          placeholder="Date of admission"
        />
        <Input
          type="text"
          name="graduationyear"
          value={graduationyear}
          onChange={(e) => setGraduationyear(e.target.value)}
          placeholder="Graduation year"
        />
        <Input
          type="text"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Department"
        />
        {pathname?.includes("/edit") ?<Button onClick={editStudent}>Update</Button> : <Button onClick={addStudent}>Add</Button> }
      </Form>
    );
  } else {
    return (
      <Form>
        <Input
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Teacher Name"
        />
        <Input
          type="text"
          name="tid"
          value={tid}
          onChange={(e) => setTid(e.target.value)}
          placeholder="Teacher ID"
        />
        <Input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="text"
          name="dateofbirth"
          value={dateofbirth}
          onChange={(e) => setDateofbirth(e.target.value)}
          placeholder="Date of birth"
        />
        <Input
          type="text"
          name="dateofjoining"
          value={dateofjoining}
          onChange={(e) => setDateofjoining(e.target.value)}
          placeholder="Date of joining"
        />
        <Input
          type="text"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Department"
        />
        <Input
          type="text"
          name="subjects"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
          placeholder="Subject"
        />
        {pathname?.includes("/edit") ?<Button onClick={editTeacher}>Update</Button> : <Button onClick={addTeacher}>Add</Button> }
      </Form>
    );
  }
}
