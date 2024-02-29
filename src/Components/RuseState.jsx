import React, { useEffect, useState } from "react";

// Without human interaction, ruseeffect will trigger the function
export default function RuseState() {
  let initialValue;
  initialValue =
    localStorage.getItem("counter") == null
      ? 0
      : parseInt(localStorage.getItem("counter"));

  const [count, setCount] = useState(initialValue);

  let a = [
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

  localStorage.setItem("Data", JSON.stringify(a));
  // localStorage.setItem("Data", "Rahul");
  console.log(JSON.parse(localStorage.getItem("Data")));
  // localStorage.removeItem("Data");
  // localStorage.clear();

  const Increment = () => {
    let a = count + 1;
    setCount(a);
    localStorage.setItem("counter", a);
  };
  const Decrement = () => {
    let a = count - 1;
    setCount(a);
    localStorage.setItem("counter", a);
  };

  const Reset = () => {
    let a = 0;
    setCount(a);
    localStorage.setItem("counter", a);
  };
  // Syntax........
  // page refresh and based on dependency.....
  // useEffect(() => {
  //   setSquare(count * count);
  //   console.log(count);
  //   console.log(square);
  // }, [
  //   /*dependency*/
  //   count,
  // ]);
  return (
    <div>
      <h1>{initialValue}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
