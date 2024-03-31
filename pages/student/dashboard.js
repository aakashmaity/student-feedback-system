import Layout from "@/components/Layout";
import styled from "styled-components";

const Container = styled.div`
    height: 200px;
    width: 250px;
    background-color: orange;
    color: white;
    border-radius: 10px;
    margin: 20px;
    padding: 10px;
`
const Number = styled.span`
    font-size: 50px;
`

export default function StudentDashboard() {
  return (
    <Layout>
      <Container>
        <h2>Total Teachers</h2>
        <Number>15</Number>
      </Container>
      <Container>
        <h2>Total Feedbacks</h2>
        <Number>7</Number>
      </Container>
    </Layout>
  );
}
