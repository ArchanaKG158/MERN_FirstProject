import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [tableData, setTableData] = useState([]);

  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const submitBtn = () => {
    setTableData([...tableData, formData]);
    console.log(tableData);
  };

  return (
    <div
      style={{
        height: "400px",
        width: "500px",
        backgroundColor: "rgba(69, 69, 67, 0.771)",
        borderRadius: "10px",
        margin: "8px 100px",
        padding: "45px 60px",
        boxShadow: "10px 5px 15px rgba(26, 25, 25, 0.897) inset",
      }}
    >
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handlechange}
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          padding: "15px 20px",
          width: "95%",
          borderRadius: "10px",
          margin: "3px 10px",
          boxShadow: "5px 5px 5px rgba(110, 103, 103, 0.897)",
        }}
      />
      <br />
      <input
        type="number"
        placeholder="Phone No.."
        name="phone"
        onChange={handlechange}
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          padding: "15px 20px",
          width: "95%",
          borderRadius: "10px",
          margin: "3px 10px",
          boxShadow: "5px 5px 5px rgba(110, 103, 103, 0.897)",
        }}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handlechange}
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          padding: "15px 20px",
          width: "95%",
          borderRadius: "10px",
          margin: "3px 10px",
          boxShadow: "5px 5px 5px rgba(110, 103, 103, 0.897)",
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Address"
        name="address"
        onChange={handlechange}
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          padding: "15px 20px",
          width: "95%",
          borderRadius: "10px",
          margin: "3px 10px",
          boxShadow: "5px 5px 5px rgba(110, 103, 103, 0.897)",
        }}
      />
      <br />
      <button
        type="submit"
        onClick={submitBtn}
        style={{
          fontSize: "15px",
          margin: "30px 10px",
          padding: "15px 25px",
          width: "90%",
          fontWeight: "bold",
          cursor: "pointer",
          borderRadius: "10px",
          backgroundColor: "rgb(150, 226, 84)",
          boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.897)",
        }}
      >
        Submit
      </button>
      <div>
        <table
          border={3}
          cellPadding={10}
          cellSpacing={3}
          width={1000}
          height={200}
          style={{ margin: "50px -120px" }}
        >
          <tbody>
            <tr id="row1">
              <th colSpan={5}>Student Information</th>
            </tr>
            <tr id="row2">
              <th>Sl No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
            </tr>

            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default RegistrationForm;
