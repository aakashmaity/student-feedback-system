import Layout from "@/components/Layout";
import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const TeacherContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 100px 50px;
    padding: 100px 50px;
`
const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 350px;
    max-width: 100%;
    height: 300px;
    background: #FFF;
    border-radius: 20px;
    transition: 0.5s;
    box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
    &:hover{
        height: 350px;
    }
    @media (max-width: 480px){
        width: 230px;
        border-radius: 15px;
    }
`
const ImageBox = styled.div`
    position: absolute;
    top: 20px;
    width: 300px;
    height: 220px;
    background: #333;
    border-radius: 12px;
    overflow: hidden;
    transition: 0.5s;
    ${Card}:hover & {
        top: -100px;
        scale: 0.75;
        box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 480px){
        width: 185px;
        border-radius: 10px;
    }
`;
const Image = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Content = styled.div`
    position: absolute;
    top: 252px;
    width: 100%;
    height: 30px;
    padding: 0 30px;
    text-align: center;
    overflow: hidden;
    transition: 0.5s;
    ${Card}:hover & {
        top: 130px;
        height: 210px;
    }
`
const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: #009688;
`
const P = styled.p`
    color: #333;
    @media (max-width: 480px){
        font-size: 0.8rem;
    }
`
const Button2 = styled.button`
    position: relative;
    top: 15px;
    display: inline-block;
    padding: 12px 15px;
    text-decoration: none;
    background: #03A9F4;
    color: #000;
    font-weight: 500;
    ${Card}:hover & {
        opacity: 0.8;
    }
    @media (max-width: 480px){
        font-size: 0.9rem;
    }
`

export default function Feedback() {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
      axios.get("/api/teacher").then((res) => {
        setTeachers(res.data);
      });
    }, []);


    function giveFeedback(e){
      
    }


  return (
    <Layout>
      <TeacherContainer>
        <CardContainer>
          {teachers?.length &&
            teachers?.map((teacher) => (
              <Card key={teacher?._id}>
                <ImageBox>
                    <Image src={teacher?.image}/>
                </ImageBox>
                <Content>
                    <Title>{teacher?.name}</Title>
                    <P>Email : {teacher?.email}</P>
                    <P>Department : {teacher?.department}</P>
                    <P>Subject: {teacher?.subjects}</P>
                    <Link href={`/feedback/new?id=${teacher?._id}`}><Button2>Give feedback</Button2></Link>
                    
                </Content>
              </Card>
            ))}
        </CardContainer>
      </TeacherContainer>
    </Layout>
  );
}
