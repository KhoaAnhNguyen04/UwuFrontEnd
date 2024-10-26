import React, { useState } from "react";
import {
  FormContainer,
  InputField,
  StyledBox,
  SubmitButton,
} from "./LoginForm.style";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <FormContainer>
      <StyledBox>
        <div>
          <h3>Login</h3>
          <p>The most innovative reading platform</p>
        </div>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
          />
          <SubmitButton type="submit" fullWidth variant="contained">
            Submit
          </SubmitButton>
          <div>
            <a href="/"> Forgotten Password?</a>
          </div>
        </form>
      </StyledBox>
    </FormContainer>
  );
};

export default LoginForm;
