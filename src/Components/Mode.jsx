import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Mode() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = () => {
    setDarkMode(!darkMode);
  };

  const navigate = useNavigate();

  return (
    <div className={darkMode ? "darkColor" : "lightColor"}>
      <button
        onClick={() => navigate(-1)}
        style={{ padding: "8px 15px", margin: "10px", cursor: "pointer" }}
      >
        Back
      </button>
      <h1
        style={{
          fontFamily: "cursive",
          fontWeight: "bold",
          // textAlign: "center",
        }}
      >
        UseState
      </h1>
      <button
        style={{
          padding: "15px 30px",
          borderRadius: "20px",
          fontFamily: "cursive",
          cursor: "pointer",
          alignContent: "center",
        }}
        onClick={darkTheme}
      >
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
