import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import LandingImg from "../public/landingPage.png"
import Avatar_1 from "../public/student.png"
import Avatar_2 from "../public/admin.png"

const DivContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100vw;
  height: 100vh;
`
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 10px;
  width: 50vw;
`
const Heading = styled.div`
  color: orange;
  margin-bottom: 30px;
  font-size: 25px;
  text-align: left;
`
const Content = styled.div`
  margin-top: 20px;
  color: darkslateblue;
`
const Title = styled.div`
  font-size: 35px;
`
const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
  margin-bottom: 20px;
`
const ImageBox = styled.div`
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  opacity: .8;
  border: 1px blue solid;
  &:hover{
    opacity: 1;
    
  }
`
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding-top: 20px;
`
const Anchor = styled(Link)`
  text-decoration: none;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Student feedback system</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DivContainer>
        <MainDiv>
          <div>
            <Heading>
              Welcome to <br></br>
              <Title>
                Feedback Management Console
              </Title>
            </Heading>
            <Content>
              <Title>Who are you?</Title>
              <Box>
                <Anchor href={"/studentlogin"}>
                  <ImageBox>
                    <Image
                      src={Avatar_1}
                      alt="This is for student"
                      height={70}
                      width={70}
                    />
                    <p>Student</p>
                  </ImageBox>
                </Anchor>
                <Anchor href={"/adminlogin"}>
                  <ImageBox>
                    <Image
                      src={Avatar_2}
                      alt="This is for Teacher"
                      height={70}
                      width={70}
                    />
                    <p>Admin</p>
                  </ImageBox>
                </Anchor>
              </Box>
            </Content>
          </div>
        </MainDiv>
        <Logo>
          <Image
            src={LandingImg}
            alt="This is data protection"
            width="400"
            height="300"
          />
        </Logo>
      </DivContainer>
      <Link href={'/student/dashboard'}>Student</Link>
    </>
  );
}
