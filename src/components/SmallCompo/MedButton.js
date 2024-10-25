import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled(Button)`
  && {
    font-weight: var(--small-weight);
    background-color: ${({ bgColor }) => bgColor || "var(--main-green)"};
    font-size: var(--small-font_size);
    height: calc(var(--small-font_size) + 20px);
    text-transform: none;
    border-radius: 20px;
    width: 80px;
    color: ${({ color }) => color || "white"};
    margin: auto 0px;
  }
`;

const MedButton = ({ content, bgColor, color, ...rest }) => {
  return <ButtonWrapper {...rest}>{content}</ButtonWrapper>;
};

export default MedButton;
