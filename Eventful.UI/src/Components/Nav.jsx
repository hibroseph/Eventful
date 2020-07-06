import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  text-decoration: none;
`;

const SubNavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
`;

const NavBarItem = styled.div`
  color: ${(props) => props.theme.text};
  padding: 15px;
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Nav = () => (
  <NavBar>
    <SubNavBar>
      <StyledLink to="/">
        <NavBarItem>Eventful</NavBarItem>
      </StyledLink>
    </SubNavBar>
    <SubNavBar>
      <NavBarItem>{/* <Input placeholder="Search"></Input> */}</NavBarItem>
      <StyledLink to="/login">
        <NavBarItem>Login</NavBarItem>
      </StyledLink>
    </SubNavBar>
  </NavBar>
);

export default Nav;
