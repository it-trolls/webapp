import React from "react";
import styled from "styled-components";

const Badge = styled.div`
  display: inline-block;
  margin: 2px;
  white-space: nowrap;
  background-color: green;
  color: #ccc;
`;
const badge = props => <Badge>{props.children}</Badge>;

export default badge;
