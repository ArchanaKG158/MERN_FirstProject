import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

export default function ComboBox() {
  return (
    <div
      style={{
        height: "400px",
        width: "500px",
        backgroundColor: "white",
        borderRadius: "10px",
        margin: "8px 100px",
        padding: "45px 60px",
        boxShadow: "10px 5px 15px rgba(26, 25, 25, 0.897) inset",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Names"
        sx={{ width: 300, margin: "10px -50px" }}
        variant="outlined"
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300, margin: "10px 40px" }}
        renderInput={(params) => (
          <TextField {...params} label="College Names" />
        )}
      />
      <TextField
        id="outlined-basic"
        label="Phone"
        sx={{ width: 300, margin: "10px -50px" }}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Email"
        sx={{ width: 300, margin: "10px -50px" }}
        variant="outlined"
      />
      <br />
      <Button variant="contained" color="success">
        Submit
      </Button>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "Gopalan College" },
  { label: "St. Joseph" },
  { label: "Ryan International" },
  { label: "SM English College" },
  { label: "Polytechnic College" },
];
