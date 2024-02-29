import React, { useEffect, useState } from "react";

// Without human interaction, ruseeffect will trigger the function
export default function RuseEffect() {
  const [count, setCount] = useState(0);
  const [square, setSquare] = useState(0);

  // Syntax........
  // page refresh and based on dependency.....
  useEffect(() => {
    setSquare(count * count);
    console.log(square);
  }, [
    /*dependency*/
    count,
  ]);
  return (
    <div>
      <h1>{count}</h1>
      <h1>
        Square of {count} is:{square}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
