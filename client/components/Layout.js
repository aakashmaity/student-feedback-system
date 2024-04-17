import styled from "styled-components";
import Navbar from "./Navbar";
const LayoutContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #ccc;
`;

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
    </LayoutContainer>
  );
}
