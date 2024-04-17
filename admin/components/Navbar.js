import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

const Aside = styled.aside`
  color: white;
  top: 0;
  position: static;
  min-width: 20%;
  max-width: 100%;
  background-color: #35374b;
  height: 100vh;
  left: 0;
  border-radius: 0px 10px 10px 0px;
  transition-duration: 150ms;
  padding: 0;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const ButtonStyle = css`
  color: white;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-items: center;
  padding: 5px;
  text-decoration: none;
  ${(props) =>
    props.active == "activeLink" &&
    css`
      background-color: aliceblue;
      border-radius: 10px;
      color: black;
    `}

  svg {
    height: 16px;
    margin-right: 5px;
    fill: white;
    ${(props) =>
      props.activeIcon === "activeIcon" &&
      css`
        height: 5px;
        width: 5px;
        fill: #eae8fb;
      `}
  }
`;

const ButtonLink = styled(Link)`
  ${ButtonStyle}
`;

const Button = styled.button`
  color: white;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-items: center;
  padding: 5px;
  text-decoration: none;
  background-color: #35374b;
  border: 0;

  svg {
    height: 16px;
    margin-right: 5px;
    fill: white;
    ${(props) =>
      props.activeIcon === "activeIcon" &&
      css`
        height: 5px;
        width: 5px;
        fill: #eae8fb;
      `}
  }
`;

const Navbar = ({ show }) => {
  const router = useRouter();

  const { pathname } = router;

  async function LogOut() {
    await router.push("/");
    await signOut();
  }

  return (
    <Aside>
      <div>
        <h3>Feedback </h3>
      </div>
      <Nav>
        <ButtonLink
          href={"/"}
          active={pathname === "/" ? "activeLink" : "inactiveLink"}
        >
          <svg
            activeIcon={pathname === "/" ? "activeIcon" : "inactiveIcon"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
          </svg>
          <span>Dashboard</span>
        </ButtonLink>
        <ButtonLink
          href={"/teacher"}
          active={pathname.includes("/teacher") ? "activeLink" : "inactiveLink"}
        >
          <svg
            activeIcon={pathname === "/teacher" ? "activeIcon" : "inactiveIcon"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
          </svg>
          <span>Teacher</span>
        </ButtonLink>
        <ButtonLink
          href={"/student"}
          active={pathname.includes("/student") ? "activeLink" : "inactiveLink"}
        >
          <svg
            activeIcon={pathname === "/student" ? "activeIcon" : "inactiveIcon"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            />
          </svg>
          <span>Student</span>
        </ButtonLink>
        <ButtonLink
          href={"/feedback"}
          active={
            pathname.includes("/feedback") ? "activeLink" : "inactiveLink"
          }
        >
          <svg
            activeIcon={
              pathname === "/feedback" ? "activeIcon" : "inactiveIcon"
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1" />
          </svg>
          <span>Feedbacks</span>
        </ButtonLink>
        <ButtonLink
          href={"/settings"}
          active={
            pathname.includes("/settings") ? "activeLink" : "inactiveLink"
          }
        >
          <svg
            activeIcon={
              pathname === "/settings" ? "activeIcon" : "inactiveIcon"
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
          </svg>
          <span>Settings</span>
        </ButtonLink>
        <Button
          onClick={LogOut}
          active={pathname.includes("/logout") ? "activeLink" : "inactiveLink"}
        >
          <svg
            activeIcon={
              pathname === "/settings" ? "activeIcon" : "inactiveIcon"
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
            />
            <path
              fill-rule="evenodd"
              d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
            />
          </svg>
          <span>Logout</span>
        </Button>
      </Nav>
    </Aside>
  );
};

export default Navbar;
