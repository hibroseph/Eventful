import React, { useState } from "react";
import EventList from "./Components/EventList";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import { ThemeProvider } from "styled-components";

const theme = {
  primary: "#227C9D",
  secondary: "#17c3b2",
  accent: "#ffcb77",
  text: "#fef9ef",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav></Nav>
      <EventList></EventList>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
