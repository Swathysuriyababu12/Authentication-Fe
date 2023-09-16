import React, { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../config/global";

const Home = () => {
  const [res, setRes] = useState({});
  const [users, setUsers] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user && user.token) {
      // Set the user's token as the Authorization header
      getData(user.token);
    }
  }, []); // No dependencies to avoid infinite re-renders

  const getData = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };

      const response = await axios.get(`${API_URL}home/check`, config);
      console.log(response);

      if (response.data === "Invalid token") {
        alert("Login again");
      } else if (response.data === "Server Busy") {
        setRes(response.data);
        alert("Unauthorized access");
      } else if (response?.status) {
        setRes(response.data);
        console.log(res);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getDetails = async () => {
    try {
      const response = await axios.get(`${API_URL}home/getDetails`);
      console.log(response);

      if (response.data === "session expired") {
        alert("Login again");
      } else if (response.data === "Server Busy") {
        alert("Unauthorized access");
      } else if (response?.status) {
        await setRes(response.data);
        console.log(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Welcome to Our Website</h1>
      <p className="welcome-message">We're here to serve you!</p>
      <p>{res.name}</p>
      <a href="#" className="button">
        Get Started
      </a>
      <button
        onClick={() => {
          getDetails();
        }}
      >
        Click here to get the details of the user
      </button>
    </div>
  );
};

export default Home;
