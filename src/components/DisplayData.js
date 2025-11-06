import React, { useEffect, useState } from 'react'
import BaseUrl from './BaseUrl';
import Add_data from './Add_Data';
import EditData from './EditData';

const DisplayData = () => {

const [data, setData] = useState([]);
const [isEditModelOpen, setIsEditModelOpen] = useState(false);
  const [fetchedEditData, setFetchedEditData] = useState({
    role_id: "",
    role_name: "",
    description: "",
    dept_id: "",
  });

// Fetch data from backend
  const fetchData = async () => {
    try {
      const res = await fetch(`${BaseUrl}get-data`);
      const result = await res.json();
      //console.log("result == "+JSON.stringify(result));
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Load data on first render
  useEffect(() => {
    fetchData();
  }, []);

    async function handleEditClick(id){
      try {
        const res = await fetch(`${BaseUrl}get-data-by-id?id=${id}`);
        const result = await res.json();
        //console.log("result == "+JSON.stringify(result));
        setFetchedEditData({
          role_id: result.role_id,
          role_name: result.role_name,
          description: result.description,
          dept_id: result.dept_id,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }

    setIsEditModelOpen(true);
  }

    function handleDeleteClick(id){
      fetch(`${BaseUrl}delete-by-id?id=${id}`, {
        method: "DELETE",
      })
      .then((res) => {
        if (res.ok) {
          fetchData(); // Refresh the data after successful deletion
        } else {
          console.error("Error deleting item");
        }
      })
    .catch ((error) => {
      console.error(error);
    });
  }

  return (
    <>
    <EditData 
    reloadData={fetchData} 
    modelOpenFlag={isEditModelOpen}           
    fetchedData={fetchedEditData}          
    onClose={() => setIsEditModelOpen(false)}
    />
    <Add_data 
    reloadData={fetchData}
    />
      
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
        <table className="table table-hover">
          <thead>
            <tr>
              <th colSpan={2}>Action</th>
              <th>SL No</th>
              <th>Role ID</th>
              <th>Role Name</th>
              <th>Description</th>
              <th>Dept ID</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item.role_id}>
                  <td onClick={() => handleEditClick(item.role_id)} style={{color: "green", cursor: "pointer"}}>Edit</td>
                  <td onClick={() => handleDeleteClick(item.role_id)} style={{color: "red", cursor: "pointer"}}>Delete</td>
                  <td>{index + 1}</td>
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
  )
}

export default DisplayData
