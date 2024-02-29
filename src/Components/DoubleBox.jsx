import React from "react";

export default function DoubleBox() {
  return (
    <body>
      <div
        class="squareContainer"
        style={{
          width: "500px",
          height: "500px",
          position: "relative",
          opacity: 0.5,
        }}
      >
        <div
          class="squarebox1"
          style={{
            top: "100px",
            right: "100px",
          }}
        ></div>
        <div
          class="squarebox2"
          style={{
            top: "100px",
            left: "100px",
          }}
        ></div>
      </div>
    </body>
  );
}
