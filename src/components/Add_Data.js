import React, { useState, useEffect } from "react";
import BaseUrl from "./BaseUrl";
import { Link } from "react-router-dom";

function Add_data(props) {

  const [formData, setFormData] = useState({
    role_name: "",
    description: "",
    dept_id: "",
  });
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async () => {
    try {
      const form = new FormData();
      form.append("role_name", formData.role_name);
      form.append("description", formData.description);
      form.append("dept_id", formData.dept_id);

      const res = await fetch(`${BaseUrl}add-data`, {
        method: "POST",
        body: form,
      });

      const text = await res.text();
      setMessage(text);

      // Clear inputs
      setFormData({ role_name: "", description: "", dept_id: "" });

      // Refresh list
      props.reloadData();
    } catch (error) {
      console.error(error);
      setMessage("Error: Could not insert data.");
    }
  };

  return (
    <>
      <div
        style={{
          background: "#ddd",
          width: "50%",
          margin: "1% auto",
          padding: "20px",
          textAlign: "center",
          borderRadius: "5px",
        }}
      >
        <h3>Add Department Role</h3>

        <input className="form-control"
          type="text"
          name="role_name"
          placeholder="Enter role name"
          value={formData.role_name}
          onChange={handleChange}
        />
        <br />

        <input className="form-control"
          type="text"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />

        <input className="form-control"
          type="number"
          name="dept_id"
          placeholder="Enter dept id"
          value={formData.dept_id}
          onChange={handleChange}
        />
        <br />
        <br />

        <button className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add
        </button>

        <Link className="btn btn-success mx-2" to="/">Ask AI</Link>

        {/* <p style={{ marginTop: "10px", fontWeight: "bold" }}>{message}</p> */}
      </div>
    </>
  );
}

export default Add_data;
