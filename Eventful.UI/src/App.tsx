import React from "react";
import EventList from "./Components/EventList";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { postEvent } from "./Redux/Events/actions";
import { getEventFetchStatus } from "./Redux/Reducers/eventsReducer";
import CreateEvent from "./Components/CreateEvent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/login">
            <h2>Login </h2>
          </Route>
          <Route path="/">
            <MainContent>
              <CreateEvent></CreateEvent>
              {props.error && <p>There was an error while fetching the events</p>}
              {props.pending && <p>We are fetching your events</p>}
              <EventList></EventList>
            </MainContent>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </ThemeProvider>
  );
}

export default connect(
  (state) => {
    console.log(state);
    return getEventFetchStatus(state);
  },
  { postEvent }
)(App);
