import React, { useState } from 'react';
import { addDoctor } from '../api/api';

function AddDoctor() {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDoctor = { name, specialization };
    await addDoctor(newDoctor);
    alert("Doctor added successfully!");
    setName("");
    setSpecialization("");
  };

  return (
    <div>
      <h2>Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Doctor Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} required />
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
}

export default AddDoctor;
