import React from "react";

export default function Props() {
  // Destructing and writing code without using props...
  function Hello({ name, phone, mail }) {
    return (
      <h1>
        My name is {name}
        <br /> phone: {phone} <br /> email: {mail}
      </h1>
    );
  }

  // function Hello(props) {
  //   return (
  //     <h1>
  //       My name is {props.name}
  //       <br /> phone: {props.phone}
  //     </h1>
  //   );
  // }

  let email = "uday@gmail.com";
  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>Props</h1>
      {/* {Hello("Acchh")} */}

      {/* Below code is called Props.... Passing the value to the attribute*/}
      {/* arguments passed into the components */}
      <Hello name="Acch" phone={9632548745} mail={email} />
    </div>
  );
}
