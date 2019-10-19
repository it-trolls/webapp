import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  padding: 0;

  overflow: hidden;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  background-color: #2ecc71;
  color: #ecf0f1;

  transition: background-color 0.3s;

  &:hover {
    background-color: #27ae60;
  }

  span {
    display: block;
    padding: 12px 24px;
    cursor: pointer;
  }
`;

const button = props => (
  <Button>
    <span>{props.children}</span>
  </Button>
);

export default button;
