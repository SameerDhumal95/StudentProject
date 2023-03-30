import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    const user = { username: email, password: password };
    //http://localhost:8080/student/login
    axios
      .post("http://localhost:8080/student/login", user)
      .then((response) => {
        // console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data));
        toast.success("User Logged in successfully");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Please Enter Valid Credentials");
      });
    //On Success
    //
  };

  return (
    <div className="login-container">
      <h1>Welcome to Student App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">Login</button>
      </form>
      <div className="register-link">
        <Link to="/signup">New User ? Please Register Here</Link>
      </div>
    </div>
  );
};

export default Login;
