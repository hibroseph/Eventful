import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 10px;
  width: 500px;
  box-shadow: 10px 14px 39px -32px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  margin: 10px;
  background-color: #f5f5f5;
`;

const CardTitle = styled.div`
  background-color: ${(props) => props.color};
  width: 500px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0px;
`;

const Title = styled.p`
  margin: 0px;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const Text = styled.p`
  padding: 30px;
`;

const CardDescription = styled.div``;

const Colors = ["#96ceb4", "#ffeead", "#ff6f69", "#ffcc5c"];

const GetColor = () => {
  return Colors[Math.floor(Math.random() * (Colors.length - 1))];
};

const Event = (props) => (
  <Card key={props.id}>
    <CardTitle color={GetColor()}>
      <Title>{props.title}</Title>
    </CardTitle>
    <CardDescription>
      <Text>{props.description}</Text>
    </CardDescription>
  </Card>
);

export default Event;
