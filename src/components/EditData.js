import React, { useEffect, useState } from 'react';
import BaseUrl from './BaseUrl';

const EditData = (props) => {

    const [openEditFlag, setOpenEditFlag] = useState(props.modelOpenFlag);
    const [fetchedDetails, setFetchedDetails] = useState(props.fetchedData);

    useEffect(() => {
        setOpenEditFlag(props.modelOpenFlag);
        setFetchedDetails(props.fetchedData);
    }, [props.modelOpenFlag, props.fetchedData]);

    function closeEditModal(){
        setOpenEditFlag(false);
        props.onClose();
    }  

    function handleOnChangeForEditData(e){
        const {name, value} = e.target;
        setFetchedDetails((prev)=>({
            ...prev,
            [name]: value
        }))
    }

    const handleUpdate = async () => {
    try {
      const form = new FormData();
      form.append("role_id", fetchedDetails.role_id);
      form.append("role_name", fetchedDetails.role_name);
      form.append("description", fetchedDetails.description);
      form.append("dept_id", fetchedDetails.dept_id);

      const res = await fetch(`${BaseUrl}update-data`, {
        method: "PUT",
        body: form,
      });

      const text = await res.text();

      setFetchedDetails({ role_name: "", description: "", dept_id: "" });
      props.reloadData();
      closeEditModal();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    {openEditFlag && 
        <div style={{
            background: "rgba(0, 0, 0, 0.5)", 
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            display: openEditFlag ?  'block': 'none'}}>
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
            <h3>Edit Department Role</h3>

            <input className="form-control"
            type="text"
            name="role_name"
            placeholder="Enter role name"
            value={fetchedDetails.role_name}
            onChange={handleOnChangeForEditData}
            />
            <br />

            <input className="form-control"
            type="text"
            name="description"
            placeholder="Enter description"
            value={fetchedDetails.description}
            onChange={handleOnChangeForEditData}
            />
            <br />

            <input className="form-control"
            type="number"
            name="dept_id"
            placeholder="Enter dept id"
            value={fetchedDetails.dept_id}
            onChange={handleOnChangeForEditData}
            />
            <br />
            <br />

            <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
            <button className="btn btn-secondary mx-2" onClick={closeEditModal}>Cancel</button>
        </div>
      </div>
    }
    </>
  )
}

export default EditData
