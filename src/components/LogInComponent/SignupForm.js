import React, { useState } from "react";
import {
  FormContainer,
  InputField,
  StyledBox,
  SubmitButton,
} from "./LoginForm.style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    username: "",
    password: "",
    phonenumber: "",
  });
  const backendUrl = process.env.REACT_APP_BACKEND;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${backendUrl}/users/`, formData);
      if (response.status === 201) {
        console.log("Signup successful:", response.data);
        await delay(500);
        navigate("/login");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError(
        err.response?.data?.message ||
          "An error occurred during signup. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <StyledBox>
        <div>
          <h3>Sign Up</h3>
          <p>Sign up to purchase our membership</p>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error */}
        <form onSubmit={handleSubmit}>
          <InputField
            label="Full Name"
            name="fullname"
            value={formData.fname}
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
          <InputField
            label="Phonenumber"
            name="phonenumber"
            type="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            fullWidth
            required
          />

          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </SubmitButton>
        </form>
      </StyledBox>
    </FormContainer>
  );
};

export default SignupForm;
