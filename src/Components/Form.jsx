import React, { useState } from "react";

export default function Form({ setUser }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();

  // whenever using object we should use function separately...
  // const [user, setUser] = useState({ name: "", phone: "" });

  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };
  // console.log(user);

  const handleSubmit = () => {
    setUser({ name: name, phone: phone });
  };

  // These below functions can also be used inside onchange event....
  // const handleChange = (e) => {
  //   // console.log(e.target.value);
  //   setName(e.target.value);
  // };
  // const handleChangeNo = (e) => {
  //   setPhone(e.target.value);
  // };

  return (
    <div style={{ fontFamily: "cursive" }}>
      <h1 style={{ backgroundColor: "greenyellow" }}>Form</h1>
      {/* Name:{user.name}
      <br />
      PhoneNo:{user.phone}
      <br /> */}
      {/* Whenever using any object we need to use same name as tht of obj name..  */}
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        style={{ border: "solid" }}
        // onChange={handleChange}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        type="number"
        name="phone"
        placeholder="Enter Phone number"
        // onChange={handleChange}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <br />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}
