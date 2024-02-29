import React from "react";

export default function StudentInfo() {
  let student = [
    {
      Firstname: "Robert",
      Lastname: "Smith",
      Phone: 1254789652,
      Email: "robert@123",
      Address: "Mangalore",
    },
    {
      Firstname: "Alan",
      Lastname: "David",
      Phone: 1255623652,
      Email: "alan@123",
      Address: "Mangalore",
    },
    {
      Firstname: "Smith",
      Lastname: "Exswer",
      Phone: 1254789652,
      Email: "smith@123",
      Address: "Bangalore",
    },
    {
      Firstname: "Zephyr",
      Lastname: "Phit",
      Phone: 12547891254,
      Email: "zephyr@123",
      Address: "Mumbai",
    },
    {
      Firstname: "John",
      Lastname: "Walker",
      Phone: 1254783265,
      Email: "john@123",
      Address: "Delhi",
    },
  ];
  return (
    <div>
      <h3>StudentInfo</h3>
      <br />
      <table
        border={3}
        cellPadding={10}
        cellSpacing={3}
        width={1500}
        height={200}
      >
        <tbody>
          <tr id="row1">
            <th rowSpan={1} colSpan={6}>
              Student Information
            </th>
          </tr>
          <tr id="row2">
            <th rowSpan={2}>Sl No</th>
            <th colSpan={2}>Full name</th>
            <th colSpan={2}>Contacts</th>
            <th rowSpan={2}>Address</th>
          </tr>

          <tr id="tdata">
            <td>First Name</td>
            <td>Last Name</td>

            <td>Phone</td>
            <td>Email</td>
          </tr>

          {student.map((item, index) => {
            return (
              <tr>
                <td id="sl">{index + 1}</td>
                <td>{item.Firstname}</td>
                <td>{item.Lastname}</td>
                <td>{item.Phone}</td>
                <td>{item.Email}</td>
                <td>{item.Address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
