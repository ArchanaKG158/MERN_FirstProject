import React, { useEffect, useState } from "react";
let inputvalue = {
  width: " 60px",
  height: "44px",
  backgroundColor: "white",
  fontSize: "20px",
  fontStyle: "normal",
  fontFamily: "Arial, Helvetica, sans-serif",
  textAlign: "center",
  fontSize: "30px",
};
let button1 = {
  width: "200px",
  height: "50px",
  backgroundColor: "grey",
  color: "black",
  margin: "30px 12px",
  borderRadius: "5%",
  fontSize: "20px",
  fontStyle: "normal",
  fontFamily: "Arial, Helvetica, sans-serif",
  border: "none",
  cursor: "pointer",
};
let button2 = {
  width: "200px",
  height: "50px",
  backgroundColor: "orange",
  color: "black",
  margin: "30px 12px",
  borderRadius: "5%",
  fontSize: "20px",
  fontStyle: "normal",
  cursor: "pointer",
  fontFamily: "Arial, Helvetica, sans-serif",
  border: "none",
};
let button3 = {
  width: "200px",
  height: "50px",
  backgroundColor: "green",
  color: "black",
  margin: "30px 12px",
  borderRadius: "5%",
  fontSize: "20px",
  cursor: "pointer",
  fontStyle: "normal",
  fontFamily: "Arial, Helvetica, sans-serif",
  border: "none",
};

export default function TablesEffect() {
  const [count, setCount] = useState(1);
  const [result, setResult] = useState(1);
  const [value, setvalue] = useState(1);

  useEffect(() => {
    setResult(value * count);
  }, [count]);

  const multiplication = (e) => {
    setvalue(e.target.value);
    // setResult(e.target.value * parseInt(count));
  };

  const output = () => {
    // setResult(value * parseInt(count + 1));
    setCount(count + 1);
  };

  const output2 = () => {
    setCount(count - 1);
    // setResult(value * parseInt(count - 1));
  };

  const clear = () => {
    setCount("");
    setResult("");
    setvalue("");
  };

  return (
    <div>
      <div style={{ fontSize: "36px" }}>
        <input
          type="number"
          style={inputvalue}
          value={value}
          onChange={multiplication}
        />
        X{count}={result}
      </div>
      <div>
        <button style={button1} onClick={output}>
          Increment
        </button>
        <button style={button2} onClick={clear}>
          Clear
        </button>
        <button style={button3} onClick={output2}>
          Decrement
        </button>
      </div>
    </div>
  );
}
