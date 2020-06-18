import React from "react";
import { Box, Text, Heading } from "grommet";

const Event = (props) => (
  <Box flex justify="center" elevation="medium" align="center" height={{ min: "200px" }} width="800px" pad="small" margin="small">
    <Heading>{props.title}</Heading>
    <Text>{props.description}</Text>
  </Box>
);

export default Event;
