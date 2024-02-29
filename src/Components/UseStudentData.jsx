import React, { useState } from "react";

const TableData = () => {
  const [data, setData] = useState([
    { id: 1, name: "Rohan", phone: "12365478", branch: "CS" },
    { id: 2, name: "Jeevan", phone: "5626659", branch: "IS" },
    { id: 3, name: "Maddy", phone: "25478962", branch: "ES" },
    { id: 4, name: "Arjun", phone: "32658922", branch: "Physics" },
    { id: 5, name: "Uday", phone: "96548722", branch: "Biology" },
  ]);

  const handleDelete = (dltitem) => {
    const updateData = data.filter((item, index) => index !== dltitem);
    setData(updateData);
  };

  return (
    <div>
      <h3>Student Data with Delete option</h3>
      <table border={2} cellPadding={10} cellSpacing={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Branch</th>
            <th>Remove Item</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.branch}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
