import React, { useState } from "react";
import axios from "axios";

const AxiosDelete = () => {
  const [id, setId] = useState("");

  const deleteUser = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        alert("User Deleted Successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Axios DELETE (Delete User)</h2>

      <input
        type="number"
        placeholder="User ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button
        onClick={deleteUser}
        style={{ marginLeft: "10px", color: "red" }}
      >
        Delete
      </button>
    </div>
  );
};

export default AxiosDelete;
