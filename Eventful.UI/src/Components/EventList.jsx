import React, { Component } from "react";
import Event from "./Event";
import styled from "styled-components";
import { connect } from "react-redux";
import { getEvents } from "../Redux/Reducers/eventsReducer";
import { bindActionCreators } from "redux";
import { fetchEvents } from "../Redux/Events/fetchEvents";

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

class EventList extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <CardList>
        {this.props.events.map((event) => (
          <Event key={event.id} {...event}></Event>
        ))}
      </CardList>
    );
  }
}

export default connect(
  (state) => {
    return getEvents(state);
  },
  (dispatch) => bindActionCreators({ fetchEvents: fetchEvents }, dispatch)
)(EventList);
