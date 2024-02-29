import React from "react";

export default function Spread() {
  let array1 = [1, 2, 3, 4, 5];
  let array2 = [6, 7, 8, 9];
  let combinedArray = [...array1, ...array2];
  // console.log(array1);
  // console.log(array2);
  // console.log(combinedArray);
  let object1 = { name: "Archana", age: 20 };
  let object2 = { city: "Bangalore", designation: "Software Developer" };
  let mergedObject = { ...object1, ...object2 };
  // console.log(mergedObject);

  var inputText;
  let array = [];
  let id = [];
  // let value;
  const textDisplay = (event) => {
    // console.log(event.target.name);
    // id = { id: (value = array.length + 1) };
    inputText = {
      ...inputText,
      [event.target.name]: event.target.value,
    };
  };

  const textClick = () => {
    // console.log([inputText]);
    let userID = array.length == 0 ? 1 : array[array.length - 1].user_id + 1;
    let fullinfo = {
      user_id: userID,
      ...inputText,
    };
    array = [...array, fullinfo];
    console.log(array);
  };

  return (
    <div>
      <h1>Spread</h1>
      <input
        name="username"
        type="text"
        placeholder="Enter Username"
        onChange={textDisplay}
      />
      <input
        name="Contact"
        type="number"
        placeholder="Enter contact number"
        onChange={textDisplay}
      />
      <input
        name="email"
        type="text"
        placeholder="Enter email"
        onChange={textDisplay}
      />
      <button onClick={textClick}>Submit</button>
    </div>
  );
}
