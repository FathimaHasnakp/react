import React, { useState } from "react";
import axios from "axios";

const AxiosPut = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const updateUser = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, {
        name: name,
      })
      .then((res) => {
        alert("User Updated Successfully!");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Axios PUT (Update User)</h2>

      <input
        type="number"
        placeholder="User ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <input
        type="text"
        placeholder="New Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button onClick={updateUser} style={{ marginLeft: "10px" }}>
        Update
      </button>
    </div>
  );
};

export default AxiosPut;
