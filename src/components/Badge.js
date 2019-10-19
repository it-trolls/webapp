import React from "react";
import styled from "styled-components";

const Badge = styled.div`
  display: inline-block;
  margin: 2px;
  padding: 2px 12px;
  border-radius: 2px;
  background-color: green;
  color: #ccc;
  .material-icons {
    vertical-align: middle;
  }
`;
const badge = props => (
  <Badge>
    <i class="material-icons">autorenew</i>
    <span>{props.children}</span>
  </Badge>
);

export default badge;
