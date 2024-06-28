import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const TableDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  width: 100%;
  background-color: whitesmoke;
  border-radius: 2px;
  margin-top: 10px;
`;
const TableHeader = styled.thead`
  
`;
const TableColumn = styled.th`
  font-size: 14px;
  line-height: 20px;
  color: rgb(75 85 99);
  padding: 10px;
  text-transform: uppercase;
  border-color: rgb(229 231 235);
  border-bottom: 1px solid black;
`;
const TableBody = styled.tbody`
  padding-top:10px ;
  padding-bottom:10px ;
`;
const TableRow = styled.tr`
  
`;
const TableCell = styled.td`
  padding: 15px;
`;

export default function student() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get("/api/feedback").then((res) => {
        setFeedbacks(res.data);
    });
  }, []);

  return (
    <Layout>
      <TableDiv>
        <Table>
          <TableHeader>
            <TableColumn>Teachher ID</TableColumn>
            <TableColumn>Teacher name</TableColumn>
            <TableColumn>Subject knowledge</TableColumn>
            <TableColumn>Behaviour</TableColumn>
            <TableColumn>Positivity</TableColumn>
            <TableColumn>Motivation</TableColumn>
            <TableColumn>Punctuality</TableColumn>
            <TableColumn>Doubtc Clearing</TableColumn>
            <TableColumn>Interaction</TableColumn>
            <TableColumn>Comment</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {feedbacks?.length &&
              feedbacks.map((feedback) => (
                <TableRow key={feedback?._id}>
                  <TableCell>{feedback?.tid}</TableCell>
                  <TableCell>{feedback?.tname}</TableCell>
                  <TableCell>{feedback?.subjectknowledge}</TableCell>
                  <TableCell>{feedback?.behaviour}</TableCell>
                  <TableCell>{feedback?.positivity}</TableCell>
                  <TableCell>{feedback?.motivation}</TableCell>
                  <TableCell>{feedback?.timepunctuality}</TableCell>
                  <TableCell>{feedback?.doubtclearing}</TableCell>
                  <TableCell>{feedback?.interaction}</TableCell>
                  <TableCell>{feedback?.comment}</TableCell>
                  <TableCell>
                    <Link
                      href={"/feedback/delete/" + feedback?._id}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                      </svg>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableDiv>
    </Layout>
  );
}
