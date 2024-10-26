import React, { useState } from "react";
import {
  FormContainer,
  InputField,
  StyledBox,
  SubmitButton,
} from "./LoginForm.style";

const SignupForm = () => {
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
          <h3>Sign up</h3>
          <p>Sign up for purchasing our membership</p>
        </div>
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
          <SubmitButton type="submit" fullWidth variant="contained">
            Submit
          </SubmitButton>
          <div>
            Already have an account?
            <a href="/login"> Log in</a>
          </div>
        </form>
      </StyledBox>
    </FormContainer>
  );
};

export default SignupForm;
