import React, { useState } from "react";

//React Hook function name start with first letter capital......
export default function State() {
  // let name = "John";

  // const changename = () => {
  //   name = "Rahul";}

  const [name, setName] = useState("Acch");
  const [color, setColor] = useState("red");
  const [count, setCount] = useState(1);
  const [Myname, setMyName] = useState();
  const [phone, setPhone] = useState();
  const [backgroundColor, setBackgroundColor] = useState("");
  const [on, setOn] = useState(false);
  const [display, setDisplay] = useState(false);
  const [changeColor, setChangeColor] = useState("blue");

  const [edit, setEdit] = useState(false);
  const [close, setClose] = useState(false);

  const btnChange = () => {
    setEdit(!edit);
    setClose(!close);
  };

  // const [value, setValue] = useState("data");
  const [editing, setEditing] = useState(false);

  // const handleEdit = () => {
  //   setEditing(true);
  // };

  // const handleCancel = () => {
  //   setEditing(false);
  // };

  // const [state, setState] = useState(false);

  const changeState = () => {
    setName("Uday");
  };

  const backgroundchange = (e) => {
    setBackgroundColor(e.target.value);
    setOn(false);
  };

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const [mycar, setMycar] = useState({
    color: "red",
    brand: "Ford",
    model: "Mustang",
  });

  const handleevent = (e) => {
    setMycar({
      brand: "Ford",
      model: "Mustang",
      color: e.target.value,
    });
    setDisplay(false);
  };

  return (
    <div style={{ backgroundColor: on ? backgroundColor : " " }}>
      <h1 style={{ backgroundColor: "red" }}>UseState</h1>
      <h2>{name}</h2>
      <button onClick={changeState}>Change name</button>
      <h1 style={{ backgroundColor: "black", color: color }}>
        My fav color is {color}
      </h1>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("Blue")}>Blue</button>
      <button onClick={() => setColor("Green")}>Green</button>
      <button onClick={() => setColor("Orange")}>Orange</button>
      <hr />
      <h1>counter:{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <hr />
      <h2>Name:{Myname}</h2>
      <h2>Phone: {phone}</h2>
      <input
        onChange={(e) => setMyName(e.target.value)}
        type="text"
        placeholder="Enter your name"
      />
      <br />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="phonenumber"
        placeholder="Enter your Phone"
      />
      <br />
      <hr />
      <input
        onChange={backgroundchange}
        type="text"
        placeholder="Enter color"
      />
      <button onClick={() => setOn(!on)}>Change color</button>
      <hr />
      <h2 style={{ color: "red", fontFamily: "cursive" }}>Registration</h2>
      Name: {user.name}{" "}
      <input type="text" name="name" onChange={handlechange} /> <br />
      Phone: {user.phone}{" "}
      <input type="text" name="phone" onChange={handlechange} /> <br />
      Email: {user.email}{" "}
      <input type="text" name="email" onChange={handlechange} /> <br />
      Address: {user.address}{" "}
      <input type="text" name="address" onChange={handlechange} /> <br />
      <button>Save</button>
      <hr />
      <h1 style={{ color: display ? mycar.color : " " }}>
        I Have {display ? mycar.color : "red"} {display ? mycar.brand : "ford"}{" "}
        {display ? mycar.model : "Mustang"}
      </h1>
      <input type="text" placeholder="change color" onChange={handleevent} />
      <button onClick={() => setDisplay(!display)}>Save</button>
      <hr />
      <button
        onClick={() => setChangeColor("red")}
        style={{
          backgroundColor: changeColor,
          border: "solid",
          borderRadius: "10px",
          padding: "10px",
          cursor: "pointer",
          boxShadow: "10px, 5px, 5px, black",
        }}
      >
        Change Color
      </button>
      <hr />
      <button onClick={btnChange}>{edit ? "Cancel" : "Close"}</button>
      <button onClick={btnChange}>{close ? "Update" : "Edit"}</button>
      {/* {state ? (
        <>
          <button onClick={() => updateBtn(false)}>Close</button>
          <button onClick={() => setState(true)}>Edit</button>
        </>
      ) : (
        <>
          <button onClick={() => setState(false)}>Cancel</button>
          <button onClick={() => updateBtn(false)}>Update</button>
        </>
      )} */}
      <hr />
      <input
        type="text"
        // value={editing}
        disabled={!editing}
        style={{ border: "solid", boxShadow: "3px 5px 5px black" }}
      />
      {editing ? (
        <button onClick={() => setEditing(false)}>Cancel</button>
      ) : (
        <button onClick={() => setEditing(true)}>Edit</button>
      )}
    </div>
  );
}
