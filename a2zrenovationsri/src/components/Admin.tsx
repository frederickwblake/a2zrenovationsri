import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { toast } from "react-toastify";
import axios from "axios";

const Admin: React.FC = () => {
  interface ContactData {
    idContactUS: number;
    FirstName: string;
    LastName: string;
    EmailAdress: string;
    PhoneNumber: string;
    ProjectAdress: string;
    // Add other properties as needed
  }
  const [data, setData] = useState<ContactData[]>([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div
      style={{ marginTop: "100px", marginLeft: "50px", marginRight: "50px" }}
    >
      <table className="table">
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>No. </th>
            <th style={{ textAlign: "left" }}>First Name </th>
            <th style={{ textAlign: "left" }}>Last Name</th>
            <th style={{ textAlign: "left" }}>Email Adress </th>
            <th style={{ textAlign: "left" }}>Phone Number</th>
            <th style={{ textAlign: "left" }}>Project Adress </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.idContactUS}>
                <th scope="row">{index + 1}</th>

                <td>{item.FirstName}</td>
                <td>{item.LastName}</td>
                <td>{item.EmailAdress}</td>
                <td>{item.PhoneNumber}</td>
                <td>{item.ProjectAdress}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
