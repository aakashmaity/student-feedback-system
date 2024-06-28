import React, { useState } from "react";
import Steps from "@/components/Stepper";
import {
  ExContainer,
  Container,
  RegisterContainer,
  LoginContainer,
  OverlayContainer,
  Overlay,
  RightOverlayPanel,
  LeftOverlayPanel,
  Paragraph,
  GhostButton,
  Title,
  Form,
  Input,
  Anchor,
  Button,
} from "@/components/Styledcomponent";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";



export default function StudentLogin() {


  const router = useRouter();


  const [studentInfo, setStudentInfo ] = useState();
  const [signIn, toggle] = useState(true);
  const [signinFormData, setSigninFormData] = useState({
    username: "",
    password: "",
  });
  const handleSubmitForm = async (e) => {
  
    if (signinFormData.username !== "" && signinFormData.password !== "") {
      e.preventDefault();
      const {data} = await axios.post('/api/student',signinFormData)
      setStudentInfo(data);
      console.log("formdata" , signinFormData)
      console.log("student" , studentInfo)
      if(studentInfo?.password == signinFormData.password){
        router.push("/dashboard");
      }
      router.push("/studentlogin");
    }
  };

  return (
    <ExContainer>
      <Container>
        <RegisterContainer signinIn={signIn}>
          <Steps />
        </RegisterContainer>

        <LoginContainer signinIn={signIn}>
          <Form>
            <Title>Sign in</Title>
            <Input
              type="text"
              name="username"
              value={signinFormData.username}
              onChange={(e) => {
                setSigninFormData({ ...signinFormData, username: e.target.value });
              }}
              placeholder="Username"
              required
            />
            <Input
              type="password"
              name="password"
              value={signinFormData.password}
              onChange={(e) => {
                setSigninFormData({
                  ...signinFormData,
                  password: e.target.value,
                });
              }}
              placeholder="Password"
              required
            />
            <Anchor href="#">Forgot your password?</Anchor>
            <Button onClick={handleSubmitForm}>Sigin In</Button>
          </Form>
        </LoginContainer>

        <OverlayContainer signinIn={signIn}>
          <Overlay signinIn={signIn}>
            <LeftOverlayPanel signinIn={signIn}>
              <Title>Welcome Back!</Title>
              <Paragraph>
                To keep connected with us please login with your personal info
              </Paragraph>
              <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
            </LeftOverlayPanel>

            <RightOverlayPanel signinIn={signIn}>
              <Title>Hello, Student!</Title>
              <Paragraph>
                Enter Your personal details and start journey with us
              </Paragraph>
              <GhostButton onClick={() => toggle(false)}>Sign Up</GhostButton>
            </RightOverlayPanel>
          </Overlay>
        </OverlayContainer>
      </Container>
    </ExContainer>
  );
}
