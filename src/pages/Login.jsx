import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/Login.css";
import API_URL from "../config/global";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., sending the data to a server.
    try {
      const response = await axios.post(`${API_URL}login`, formData);
      console.log(response);
      if (response.data === "Invalid User name or Password") {
        alert("Invalid User name or Password");
      } else if (response.data === "Server Busy") {
        alert("verify your mail id");
      } else if (response?.status) {
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        navigate("/home");
      }
    } catch (error) {
      // toast.success(error);
      console.error(error);
    }
    console.log(formData);
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
