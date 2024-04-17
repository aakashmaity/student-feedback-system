import Navbar from "@/components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import {
  ExContainer,
  Container,
  RegisterContainer,
  LoginContainer,
  Button,
  Overlay,
  OverlayContainer,
  OverlayPanel,
  LeftOverlayPanel,
  Title,
  RightOverlayPanel,
  Paragraph,
  GhostButton,
  Form,
  Input,
} from "./Styledcomponent";
import styled from "styled-components";

const Main = styled.div`
  background-color: white;
  flex-grow: 1;
  padding: 10px;
`;
const MainContainer = styled.div`
  min-height: 100vh;
  background-color: rgb(251 250 253);
`;
const RightContainer = styled.div`
  display: flex;
  margin: 0px;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Layout = ({ children }) => {
  const { data: session } = useSession();
  const [showNav, setShowNav] = useState(false);
  const [signin, toggle] = useState(true);

  // console.log(session)

  if (!session) {
    return (
      <ExContainer>
        <Container>
          <RegisterContainer signinin={signin.toString()}>
            {/* <Steps /> */}
          </RegisterContainer>

          <LoginContainer signinin={signin.toString()}></LoginContainer>

          <OverlayContainer signinin={signin.toString()}>
            <Overlay signinin={signin.toString()}>
              <LeftOverlayPanel signinin={signin.toString()}>
                <Title>Welcome Back!</Title>
                <Paragraph>
                  To keep connected with us please login with your personal info
                </Paragraph>
                <GhostButton onClick={() => signIn("google")}>
                  Sign in with Google
                </GhostButton>
              </LeftOverlayPanel>

              <RightOverlayPanel
                signinin={signin.toString()}
              ></RightOverlayPanel>
            </Overlay>
          </OverlayContainer>
        </Container>
      </ExContainer>
    );
  }
  return (
    <MainContainer>
      <LeftContainer>
        {showNav && <button onClick={() => setShowNav(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>}
        <div></div>
      </LeftContainer>

      <RightContainer>
        <Navbar show={showNav} />
        <Main>{children}</Main>
      </RightContainer>
    </MainContainer>
  );
};

export default Layout;
