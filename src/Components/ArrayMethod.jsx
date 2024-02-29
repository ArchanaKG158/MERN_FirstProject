//rfc = react functional component
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArrayMethod() {
  let fruits = ["Apple", "Banana", "Orange", "Watermelon"];
  let object = [
    {
      name: "Archana",
      city: "mangalore",
      age: 25,
      designation: "Software Engineer",
    },
    {
      name: "Ashwini",
      city: "Bangalore",
      age: 28,
      designation: "Title Insurance",
    },
    { name: "Uday", city: "bangalore", age: 30, designation: "Radiologist" },
    { name: "Ajith", city: "Kundapura", age: 31, designation: "Event Manager" },
  ];

  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        style={{ padding: "8px 15px", margin: "10px", cursor: "pointer" }}
      >
        Back
      </button>
      <h3>ArrayMethod</h3>
      {fruits}
      <br />
      <ol>
        {fruits.map((item) => {
          return <li>{item}</li>;
        })}
      </ol>
      <table border={1}>
        <tr>
          <th>S1 No</th>
          <th>Fruit Name</th>
        </tr>
        {fruits.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          );
        })}
      </table>

      <table border={1}>
        <tr>
          <th>S1 No</th>
          <th>Name</th>
          <th>City</th>
          <th>Age</th>
          <th>Designation</th>
        </tr>
        {object.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.age}</td>
              <td>{item.designation}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
