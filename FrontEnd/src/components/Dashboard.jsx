import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "./Table";

const Dashboard = () => {
  const [flag, setFlag] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const [maxMarks, setMaxMarks] = useState();
  const [allMarks, setAllMarks] = useState();

  const navigate = useNavigate();

  const getMaxMarks = () => {
    setFlag("marksGreaterThan80");
    axios
      .get("http://localhost:8080/student/getMaxMarks")
      .then((response) => {
        //console.log(response);
        setMaxMarks(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getAllMarks = () => {
    setFlag("allData");
    axios
      .get("http://localhost:8080/student/getAll")
      .then((response) => {
        //console.log(response);
        setAllMarks(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="dashboard">
      <h1>Welcome</h1>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/");
        }}
      >
        Logout
      </button>
      <div className="content-container">
        <p>
          <span className="bold-sub-title">Name :</span>
          {user.name}
        </p>
        <p>
          <span className="bold-sub-title">Roll No :</span>
          {user.rollNo}
        </p>
        <p>
          <span className="bold-sub-title">Marks :</span>
          {user.marks}
        </p>
        <button onClick={getMaxMarks}>{`Marks >= 80`}</button>
        <button onClick={getAllMarks}>All Data</button>
        {flag === "allData" ? (
          <Table data={allMarks}></Table>
        ) : (
          <Table data={maxMarks}></Table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
