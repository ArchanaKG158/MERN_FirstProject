import React from "react";
import { useNavigate } from "react-router-dom";

export default function EmployeeInfo() {
  let employee = [
    {
      Profile: "Archana",
      Designation: "Software Developer",
      Department: "IT Department",
      Skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "PHP",
        "MySQL",
        "Express",
        "MongoDB",
      ],
      PhoneNo: "123658965",
      Email: "Arch@123",
      Address: "Mangalore",
      imagesrc:
        "https://instacaptionsforall.in/wp-content/uploads/2023/11/60-1-1024x1024.jpg",
    },
    {
      Profile: "Ajith",
      Designation: "Event Manager",
      Department: "Event",
      Skills: ["Python", "Java", "JavaScript"],
      PhoneNo: "265895423",
      Email: "Ajith@1526",
      Address: "Kundapura",
      imagesrc:
        "https://gyanvaan.com/wp-content/uploads/2023/05/awesome-dp-for-boys-single-3.jpg",
    },
    {
      Profile: "Ashwini",
      Designation: "Title Insurance",
      Department: "Mortgage",
      Skills: ["Fast", "SIU", "HTML"],
      PhoneNo: "25698745",
      Email: "Ashwini@1526",
      Address: "Bangalore",
      imagesrc:
        "https://photosfile.com/wp-content/uploads/2022/04/Girl-Attitude-DP-75.jpeg",
    },
    {
      Profile: "Uday",
      Designation: "Radiologist",
      Department: "Radiology",
      Skills: ["MRI", "CT", "Xray"],
      PhoneNo: "9625487542",
      Email: "Uday@15221546",
      Address: "Bangalore",
      imagesrc:
        "https://e1.pxfuel.com/desktop-wallpaper/655/375/desktop-wallpaper-121-whatsapp-dp-boy-stylish-boy-dp.jpg",
    },
  ];

  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => navigate(-1)}
        style={{ padding: "8px 15px", margin: "10px", cursor: "pointer" }}
      >
        Back
      </button>
      <h3>Employee Information</h3>
      {/* <button style={{ display: "flex", margin: "5px 20px" }}>Back</button> */}
      <br />
      <table
        border={3}
        cellPadding={10}
        cellSpacing={3}
        width={1500}
        height={200}
      >
        <tbody>
          <tr id="emprow1">
            <th rowSpan={1} colSpan={8}>
              Employee Information
            </th>
          </tr>
          <tr id="emprow2">
            <th rowSpan={1}>Sl No</th>
            <th colSpan={1}>Profile</th>
            <th colSpan={1}>Designation</th>
            <th colSpan={1}>Department</th>
            <th colSpan={1}>Skills</th>
            <th colSpan={2}>Contacts</th>
            <th colSpan={1}>Address</th>
          </tr>

          {employee.map((item, index) => {
            return (
              <tr>
                <td id="sl">{index + 1}</td>
                <td>
                  <img
                    src={item.imagesrc}
                    style={{
                      borderRadius: "50px",
                      height: "90px",
                      width: "90px",
                      transform: "translate(-40%,12%)",
                    }}
                  />
                  {item.Profile}
                </td>
                <td>{item.Designation}</td>
                <td>{item.Department}</td>
                <td>
                  <ul type="square">
                    {item.Skills.map((skill, index) => (
                      <div
                        style={{
                          width: "100px",
                          height: "25px",
                          backgroundColor: "burlywood",
                          borderRadius: "30px",
                          margin: "5px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <li>{skill}</li>
                      </div>
                    ))}
                  </ul>
                </td>
                <td>{item.Email}</td>
                <td>{item.PhoneNo}</td>
                <td>{item.Address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
