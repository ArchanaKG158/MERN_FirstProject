import React from "react";

export default function Destructuring() {
  let fruits = ["apple", "banana", "orange"];
  // console.log(fruits[0]);
  // console.log(fruits[fruits.length - 1]);
  let first = fruits[0];
  let second = fruits[1];
  // console.log(first);
  // console.log(second);

  //new way
  const [a, b, c] = fruits;
  // console.log(a);
  // console.log(b);

  //object
  let person = { name: "john Doe", age: 32 };
  //old way
  console.log(person.name);
  //new way of destructuing object
  const { name, age } = person;
  console.log(name);
  console.log(age);

  let fullDetails = {
    id: 1,
    ...person,
  };
  console.log(fullDetails);
  return <div>Destructuring</div>;
}
