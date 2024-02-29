import React from "react";

export default function Ternary() {
  let state = true;
  // if (state) {
  //   alert("True");
  // } else if (state == null) {
  //   alert("Null");
  // } else {
  //   alert("False");
  // }

  // Using Ternary operator
  // state == true
  //   ? alert("True")
  //   : state == null
  //   ? alert("Null")
  //   : alert("False");

  var inputData;
  const handleChange = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    inputData = event.target.value;
  };

  const FuncSubmit = () => {
    console.log(inputData);
  };
  return (
    <div>
      <h1 style={{ color: state == true ? "green" : "red" }}>Ternary</h1>
      <input name="number" type="number" onChange={handleChange} />
      <button onClick={FuncSubmit}>Submit</button>
    </div>
  );
}
