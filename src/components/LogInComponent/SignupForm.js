import React, { useState } from "react";
import {
  FormContainer,
  InputField,
  StyledBox,
  SubmitButton,
} from "./LoginForm.style";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Signup successful!");
        navigate("/");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      console.error("An error occurred:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <FormContainer>
      <StyledBox>
        <div>
          <h3>Sign Up</h3>
          <p>Sign up for purchasing our membership</p>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error */}
        <form onSubmit={handleSubmit}>
          <InputField
            label="Full Name"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            fullWidth
            required
          />
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
