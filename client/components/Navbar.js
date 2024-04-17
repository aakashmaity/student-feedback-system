import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ProfileIcon from "./Icons/ProfileIcons";
import DashboardIcon from "./Icons/DashboardIcon";
import LogoutIcon from "./Icons/LogoutIcon";
import FeedbackIcon from "./Icons/FeedbackIcon";

const Header = styled.div`
  margin-bottom: 50px;
`;
const NavContainer = styled.div`
  display: flex;
  position: sticky;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100%;
  width: 15vw;
  flex-direction: column;
  justify-content: start;
  background-color: skyblue;
  height: 100vh;
  min-width: 15vw;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
`;
const NavItems = styled.ul`
  list-style: none;
`;
const Items = styled.li`
  margin-top: 5px;
  flex-direction: row;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Anchor = styled(Link)`
  color: #333;
  font-size: 18px;
  text-decoration: none;
  margin: 15px 0;
  &:hover {
    opacity: 0.8;
  }
`;

export default function Navbar() {
  return (
    <NavContainer>
      <Header>
        <h1 className="font-ubuntu font-bold text-2xl mb-1"></h1>
        <h2>aakash57</h2>
      </Header>

      <NavItems>
        <Items>
          <ProfileIcon />
          <Anchor nav="nav" href={"/profile"}>
            Profile
          </Anchor>
        </Items>
        <Items>
          <DashboardIcon />
          <Anchor nav="nav" href={"/dashboard"}>
            Dashboard
          </Anchor>
        </Items>
        <Items>
          <FeedbackIcon />
          <Anchor nav="nav" href={"/teachers"}>
            Give feedback
          </Anchor>
        </Items>
        <Items>
          <LogoutIcon />
          <Anchor nav="nav" href={"#"}>
            Logout
          </Anchor>
        </Items>
      </NavItems>
    </NavContainer>
  );
}
