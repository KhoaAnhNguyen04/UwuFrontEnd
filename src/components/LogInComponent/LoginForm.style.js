import styled from "styled-components";
import { Box, Button, TextField } from "@mui/material";

export const FormContainer = styled.div`
  display: flex;
  width: 35%;
  margin: 0px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  color: var(--white-text);
  div {
  }
`;
export const InputField = styled(TextField)`
  && {
    label {
      color: var(--white-text);
      padding-top: 4px;
    }
    fieldset {
      border-color: var(--white-text);
      border-radius: 16px;
    }
    input {
      color: var(--white-text);
      font-size: var(--small-font_size);
      &::placeholder {
        font-size: 16px !important;
      }
    }

    .Mui-focused {
      color: var(--white-text);
      .MuiOutlinedInput-notchedOutline {
        border-color: var(--white-text);
        color: var(--white-text);
      }
    }
    .MuiOutlinedInput-root {
      &:hover .MuiOutlinedInput-notchedOutline {
        border-color: var(--white-text);
      }
    }
  }
`;
export const StyledBox = styled(Box)`
  && {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    border-radius: 12px;
    background-color: var(--black-color-effect);
    backdrop-filter: blur(20px);
    form {
      width: 100%;
      display: flex;
      gap: 20px;
      flex-direction: column;
    }
    :first-child {
      h3,
      p {
        margin: 0px auto;
        width: fit-content;
      }
      h3 {
        font-size: var(--label-font_size);
      }
    }
    :last-child {
      color: var(--white-text);
      font-size: var(--small-font_size);
      text-align: center;
      a {
        color: var(--green-contrast);
        font-weight: bold;
        text-decoration: none;
        margin-left: 5px;
      }
    }
  }
`;

export const SubmitButton = styled(Button)`
  && {
    border-radius: 28px;
    background-color: var(--green-contrast);
    font-size: var(--small-font_size);
    color: white;
    height: 48px;
    text-transform: "none" !important;
    &:hover {
      background-color: var(--brighter-green);
    }
    button {
      height: 100%;
    }
  }
`;
