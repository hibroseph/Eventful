import React from "react";
import EventList from "./Components/EventList";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { postEvent } from "./Redux/Events/actions";
import CreateEvent from "./Components/CreateEvent";
import styled from "styled-components";

const theme = {
  primary: "#227C9D",
  secondary: "#17c3b2",
  accent: "#ffcb77",
  text: "#fef9ef",
};

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Nav></Nav>
      <MainContent>
        <CreateEvent></CreateEvent>
        <EventList></EventList>
      </MainContent>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default connect(null, { postEvent })(App);
