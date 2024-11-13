import * as React from "react";
import { styled } from "@mui/material/styles";

const Root = styled("div")`
  color: rgba(255, 255, 255, 0.65);
  font-size: 14px;
  width: 100%;
`;

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")`
  width: 100%;
  border: 1px solid #434343;
  background-color: #141414;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  align-items: center;

  &:hover {
    border-color: var(--green-contrast);
  }

  &.focused {
    border-color: var(--green-contrast);
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & select {
    background-color: #141414;
    color: rgba(255, 255, 255, 0.65);
    height: 36px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 100%;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
    appearance: none;
  }
`;

export default function SelectInput(props) {
  const [value, setValue] = React.useState("Free");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Root>
      <div>
        <Label>{props.name}</Label>
        <InputWrapper id="select-input">
          <select value={value} onChange={handleChange}>
            <option value="Free">Free</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
            <option value="Platinum">Platinum</option>
          </select>
        </InputWrapper>
      </div>
    </Root>
  );
}