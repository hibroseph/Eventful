import React, { useState } from "react";
import EventList from "./Components/EventList";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import { ThemeProvider } from "styled-components";
const SampleEvents = [
  {
    id: 1,
    title: "Porter Park Frisbee",
    description: "Come and play some ultimate frisbee. We are hoping to have atleast 5 people.",
  },
  {
    title: "Hackathon @ LabStats",
    description: "Make sure you come and bring a laptop. There will be some good prizes provided by Daniel",
  },
  {
    id: 2,
    title: "Sleepover w/ sexy ladies",
    description: "There will be a sleep over with some sexy ladies at 461 N Water in Idaho Falls. Make sure you come modest",
  },
  {
    id: 3,
    title: "Hello Mate",
    description: "Hopefully this shows up lol",
  },
  {
    id: 4,
    title: "Rock Climbing",
    description: "Come meet up at the edge at 6. It is college night so it is only $9 to get in. Bring your student ID card",
  },
];

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
      <EventList events={SampleEvents}></EventList>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
