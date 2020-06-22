import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postEvent } from "../Redux/Events/postEvent";
import { Input, TextArea } from "../Elements/styled-elements";

const Container = styled.div`
  width: 500px;
  background-color: white;
  padding: 20px;
`;

class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleInputChange(e) {
    switch (e.target.name) {
      case "title":
        this.setState({ title: e.target.value });
        break;
      case "description":
        this.setState({ description: e.target.value });
        break;
      default:
    }
  }

  handleSubmitForm(e) {
    console.log(e);
    // This is to not have the form reload the page
    e.preventDefault();

    // Post event to redux to send to the api
    this.props.postEvent(this.state);

    return false;
  }

  render() {
    return (
      <Container>
        <h3>Create An Event</h3>
        <form onSubmit={this.handleSubmitForm}>
          <Input
            placeholder="Title of Event"
            autocomplete="off"
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <br />
          <TextArea
            placeholder="Description of Event"
            type="text"
            id="description"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <Input type="submit" value="Submit"></Input>
        </form>
      </Container>
    );
  }
}

export default connect(null, (dispatch) => bindActionCreators({ postEvent: postEvent }, dispatch))(CreateEvent);
