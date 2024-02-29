import React from "react";
import { a, Greeting } from "./Export";
// import {Greeting} from "./Export"
import { b, c, GroupFunction } from "./Export";
import FunctionName from "./Default";
export default function Import() {
  console.log(a);
  return (
    <div>
      Import-{a},{b},{c}
      <button onClick={GroupFunction} style={{ width: "60px", height: "20px" }}>
        Group
      </button>
      <button onClick={Greeting} style={{ width: "40px", height: "20px" }}>
        HY
      </button>
      <FunctionName />
    </div>
  );
}
