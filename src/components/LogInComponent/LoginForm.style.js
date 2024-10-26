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
  h3 {
    align-self: center;
  }
`;
export const InputField = styled(TextField)`
  && {
    label {
      color: var(--white-text);
    }
    fieldset {
      border-color: var(--white-text);
    }

    .Mui-focused {
      color: var(--white-text);
      .MuiOutlinedInput-notchedOutline {
        border-color: var(--white-text);
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
    border-radius: 10px;
    background-color: var(--black-color-effect);
    backdrop-filter: blur(20px);
    form {
      width: 100%;
      display: flex;
      gap: 20px;
      flex-direction: column;
    }
  }
`;

export const SubmitButton = styled(Button)`
  && {
    margin-top: 0px;
    border-radius: 28px;
    background-color: var(--main-green);

    color: white;
    height: 48px;
    &:hover {
      background-color: var(--brighter-green);
    }
    button {
      height: 100%;
    }
  }
`;
