import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      username: email,
      password,
      rollNo,
      name,
      marks,
    };
    //console.log(obj);
    axios
      .post("http://localhost:8080/student/signup", obj)
      .then((response) => {
        // console.log(response);
        toast.success("User successfully signed up");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
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

        <label htmlFor="rollNo">Roll No:</label>
        <input
          type="number"
          id="rollNo"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />

        <label htmlFor="marks">Marks:</label>
        <input
          type="number"
          id="marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
