import React, { useState } from "react";
import { Box } from "@mui/material";
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
        <h3>Sign up</h3>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            required
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
          />
          <Box mt={3}>
            <SubmitButton type="submit" fullWidth variant="contained">
              Submit
            </SubmitButton>
          </Box>
        </form>
      </StyledBox>
    </FormContainer>
  );
};

export default LoginForm;
