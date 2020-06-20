import React from "react";
import Event from "./Event";
import styled from "styled-components";

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;
const EventList = (props) => (
  <CardList>
    {props.events.map((event) => (
      <Event {...event}></Event>
    ))}
  </CardList>
);
export default EventList;