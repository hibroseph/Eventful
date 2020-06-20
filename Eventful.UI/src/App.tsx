import React, { useState } from "react";
import EventList from "./Components/EventList";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { postEvent } from "./Redux/actions";

const theme = {
  primary: "#227C9D",
  secondary: "#17c3b2",
  accent: "#ffcb77",
  text: "#fef9ef",
};

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Nav></Nav>
      <button
        onClick={() => {
          props.postEvent({ title: "New Post", description: "New Description" });
        }}
      >
        Post Event
      </button>
      <EventList></EventList>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default connect(null, { postEvent })(App);
