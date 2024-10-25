import { green } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";

export const TextContainer = styled.div`
  font-size: var(--small-font_size);
  font-weight: var(--small-weight);
  line-height: 48px;
  color: white;
  &:hover {
    color: var(--main-green);
  }
`;

const DetailText = (props) => {
  return <TextContainer>{props.content}</TextContainer>;
};

export default DetailText;
