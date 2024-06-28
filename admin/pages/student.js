import Layout from "@/components/Layout";
import { Button } from "@/components/Styledcomponent";
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
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("/api/student").then((res) => {
      setStudents(res.data);
    });
  }, []);

  return (
    <Layout>
      <Link href={"/student/new"}>Add student</Link>
      <TableDiv>
        <Table>
          <TableHeader>
            <TableColumn>Roll no</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>Date of Admission</TableColumn>
            <TableColumn>Graduation year</TableColumn>
            <TableColumn>Department</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {students?.length &&
              students.map((student) => (
                <TableRow key={student?._id}>
                  <TableCell>{student?.rollno}</TableCell>
                  <TableCell>{student?.name}</TableCell>
                  <TableCell>{student?.email}</TableCell>
                  <TableCell>{student?.dateofadmission}</TableCell>
                  <TableCell>{student?.graduationyear}</TableCell>
                  <TableCell>{student?.department}</TableCell>
                  <TableCell>
                    <Link
                      href={"/student/edit?id=" + student?._id}
                      style={{"padding-right": "10px"}}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                        />
                      </svg>
                    </Link>
                    <Link
                      href={"/student/delete/" + student?._id}
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
      <Link style={{"display": "flex","align-items":"center","justify-content":"end","text-decoration":"none","margin":"20px"}}href={"/teacher/new"}><Button>Add student</Button></Link>
    </Layout>
  );
}