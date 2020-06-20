import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
`;

const SubNavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const NavBarItem = styled.div`
  color: ${(props) => props.theme.text};
  padding: 20px;
  font-size: 30px;
`;

const NavBarInput = styled.input`
  height: 28px;
  border-radius: 5px;
  outline: none;
  border: none;
`;

const Nav = (props) => (
  <NavBar>
    <NavBarItem>Eventful</NavBarItem>
    <SubNavBar>
      <NavBarItem>
        <NavBarInput placeholder="Search"></NavBarInput>
      </NavBarItem>
      <NavBarItem>Login</NavBarItem>
    </SubNavBar>
  </NavBar>
);

export default Nav;
