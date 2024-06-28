import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 200px;
  width: 250px;
  background-color: orange;
  color: white;
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
`;
const Number = styled.span`
  font-size: 50px;
`;

export default function StudentDashboard() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get("/api/teacher").then((res) => {
      setTeachers(res.data);
    });
  }, []);

  return (
    <Layout>
      <Container>
        <h2>Total Teachers</h2>
        <Number>{teachers?.length}</Number>
      </Container>
      <Container>
        <h2>Total Feedbacks</h2>
        <Number>1</Number>
      </Container>
    </Layout>
  );
}
