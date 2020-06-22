import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 2px solid #eee;
  border-radius: 10px;
  font-family: inherit;
  &:focus {
    outline: none;
    border-color: #72bcd4;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #eee;
  border-radius: 10px;
  font-family: inherit;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #72bcd4;
  }
  min-height: 100px;
`;
