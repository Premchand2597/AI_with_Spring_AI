import React, { useState, useEffect } from "react";

function Add_data() {

  const [formData, setFormData] = useState({
    role_name: "",
    description: "",
    dept_id: "",
  });

  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  // Fetch data from backend
  const fetchData = async () => {
    try {
      const res = await fetch("http://192.168.1.66:9090/get-data");
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Load data on first render
  useEffect(() => {
    fetchData();
  }, []);

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

      const res = await fetch("http://192.168.1.66:9090/add-data", {
        method: "POST",
        body: form,
      });

      const text = await res.text();
      setMessage(text);

      // Clear inputs
      setFormData({ role_name: "", description: "", dept_id: "" });

      // Refresh list
      fetchData();
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

        <input
          style={{ width: "80%", height: "25px" }}
          type="text"
          name="role_name"
          placeholder="Enter role name"
          value={formData.role_name}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          style={{ width: "80%", height: "25px" }}
          type="text"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          style={{ width: "80%", height: "25px" }}
          type="number"
          name="dept_id"
          placeholder="Enter dept id"
          value={formData.dept_id}
          onChange={handleChange}
        />
        <br />
        <br />

        <button
          style={{
            border: "none",
            outline: "none",
            padding: "10px 20px",
            cursor: "pointer",
            background: "blue",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
          onClick={handleSubmit}
        >
          Add
        </button>

        {/* <p style={{ marginTop: "10px", fontWeight: "bold" }}>{message}</p> */}
      </div>

      {/* Display Table */}
      <div
        style={{
          width: "70%",
          margin: "20px auto",
          background: "#f7f7f7",
          padding: "15px",
          borderRadius: "5px",
        }}
      >
        <h3>Department Roles List</h3>
        <table
          border="1"
          cellPadding="8"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead style={{ background: "#ccc" }}>
            <tr>
              <th>Role ID</th>
              <th>Role Name</th>
              <th>Description</th>
              <th>Dept ID</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.role_id}>
                  <td>{item.role_id}</td>
                  <td>{item.role_name}</td>
                  <td>{item.description}</td>
                  <td>{item.dept_id}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Add_data;
