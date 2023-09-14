import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "../styles/SignUp.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import API_URL from '../config/global';
const SignUp = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    

      const navigate = useNavigate();


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        // Add your registration logic here, e.g., sending the data to a server.
        try {
          const response = await axios.post(`${API_URL}signin/verify`, formData);
          console.log(response)
          if (response.data === true) {
            alert("Registration link sent to your mail id");
            navigate("/login");
          } else if(response.data === false) {
              alert("User already exists");
          }
         
        } catch (error) {
          // toast.success(error);
          console.error('Error during registration:', error);
          
        }



        
    
       
       
      };
    
      return (
        <Container>
          <h1>Registration Form</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
    
            {/* <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group> */}
    
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
              Register
            </Button>
          </Form>
        </Container>
      );
    }
    
    export default SignUp;
    
  