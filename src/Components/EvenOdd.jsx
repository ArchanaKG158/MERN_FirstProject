import React from "react";

export default function EvenOdd() {
  const checkEvenOdd = (value) => {
    // let number = parseInt(value);
    let num = document.getElementById("number").value;
    num % 2 == 0 ? alert("even number") : alert("odd number");
  };

  return (
    <div>
      <h2>EvenOdd</h2>
      <input
        id="number"
        style={{
          height: "25px",
          width: "250px",
          border: "solid black",
        }}
        type="number"
        placeholder="Enter Number"
      />
      <button
        onClick={checkEvenOdd}
        style={{
          height: "30px",
          width: "100px",
          backgroundColor: "grey",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Submit
      </button>
    </div>
  );
}
