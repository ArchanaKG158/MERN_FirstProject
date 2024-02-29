import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArrowFunction() {
  function traditionalFunction() {
    alert("This is a traditional Function");
  }

  //Syntax for ArrowFunction
  const arrowFunction = () => {
    alert("This is an arrow Function");
  };
  // Arrow function makes code shorter by removing flower braces.
  // const arrowFunction = () => alert("This is an arrow Function");

  const Calculate = (a, b) => alert(a + b);
  var a = 10;
  let name = "Ravi";
  const state = "false";
  let array = ["Apple", "Banana", "Orange"];
  let object = { name: "Archana", age: 25, city: "Mangalore" };

  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        style={{ padding: "8px 15px", margin: "10px", cursor: "pointer" }}
      >
        Back
      </button>
      <h2>ArrowFunction</h2>

      <button onClick={traditionalFunction}>Traditional</button>
      <button onClick={arrowFunction}>Arrow Function</button>
      <button onClick={() => Calculate(1, 2)}>Calculate</button>
      <hr />

      {a}
      <br />
      {name}
      <br />
      {state}
      <br />
      {array}
      <br />
      {object.name}
      <br />
    </div>
  );
}
