import React from "react";
import styled from "styled-components";
import { Input } from "../Elements/styled-elements";
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
`;

const SubNavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NavBarItem = styled.div`
  color: ${(props) => props.theme.text};
  padding: 15px;
  font-size: 20px;
`;

const Nav = (props) => (
  <NavBar>
    <SubNavBar>
      <NavBarItem>Eventful</NavBarItem>
    </SubNavBar>
    <SubNavBar>
      <NavBarItem>{/* <Input placeholder="Search"></Input> */}</NavBarItem>
      <NavBarItem>Login</NavBarItem>
    </SubNavBar>
  </NavBar>
);

export default Nav;
