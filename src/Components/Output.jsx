import React, { useState } from "react";

export default function Output({ user }) {
  // const [user, setUser] = useState({ name: "", phone: "" });

  return (
    <div>
      <h1 style={{ backgroundColor: "greenyellow" }}>OutPut</h1>
      Name: {user.name}
      <br />
      PhoneNo: {user.phone}
      <br />
    </div>
  );
}
