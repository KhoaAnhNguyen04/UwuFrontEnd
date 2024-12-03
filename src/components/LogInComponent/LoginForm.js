import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  InputField,
  StyledBox,
  SubmitButton,
} from "./LoginForm.style";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/login", formData);
      if (response.status === 200) {
        console.log("Login successful:", response.data);
        navigate("/");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message ||
          "An error occurred during login. Please try again."
      );
    } finally {
      setLoading(false);
    }
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
          {error && <p style={{ color: "red" }}>{error}</p>}
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </SubmitButton>
          <div>
            <a href="/forgot-password">Forgotten Password?</a>
          </div>
        </form>
      </StyledBox>
    </FormContainer>
  );
};

export default LoginForm;
