import React from "react";
import Event from "./Event";
import styled from "styled-components";
import { connect } from "react-redux";

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;
const EventList = (props) => (
  <CardList>
    {props.events.map((event) => (
      <Event key={event.id} {...event}></Event>
    ))}
  </CardList>
);

export default connect((state) => {
  console.log("new state in connect");
  return state.events;
})(EventList);
