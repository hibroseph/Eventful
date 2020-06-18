import React, { useState } from "react";
import { Anchor, Box, Button, Collapsible, Footer, Main, Heading, Grommet, Layer, Text, ResponsiveContext } from "grommet";
import { FormClose, Notification } from "grommet-icons";
import Event from "./Components/Event";

const SampleEvents = [
  { title: "Porter Park Frisbee", description: "Come and play some ultimate frisbee. We are hoping to have atleast 5 people." },
  { title: "Hackathon @ LabStats", description: "Make sure you come and bring a laptop. There will be some good prizes provided by Daniel" },
  {
    title: "Sleepover w/ sexy ladies",
    description: "There will be a sleep over with some sexy ladies at 461 N Water in Idaho Falls. Make sure you come modest",
  },
  {
    title: "Hello Mate",
    description: "Hopefully this shows up lol",
  },
];

const theme = {
  global: {
    colors: {
      brand: "#7D4CDB",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              Eventful
              <Heading level="3" margin="none">
                Feed
              </Heading>
              <Box direction="row">
                <Button primary label="Log In" />
                <Button
                  icon={<Notification />}
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                />
              </Box>
            </AppBar>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex overflow="auto" align="center">
                {SampleEvents.map((e) => {
                  return <Event {...e}></Event>;
                })}
              </Box>
              {!showSidebar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box flex width="small" background="light-2" elevation="small" align="center" justify="center">
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box background="light-2" tag="header" justify="end" align="center" direction="row">
                    <Button icon={<FormClose />} onClick={() => setShowSidebar(false)} />
                  </Box>
                  <Box fill background="light-2" align="center" justify="center">
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
            <Footer background="light-2" pad="small">
              <Text>Copyright</Text>
              <Anchor label="About" />
            </Footer>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
