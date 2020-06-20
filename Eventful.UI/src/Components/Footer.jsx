import React from "react";
import styled from "styled-components";

const FooterBar = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.accent};
`;

const Footer = (props) => <FooterBar>Copyright Kip 2020</FooterBar>;

export default Footer;
