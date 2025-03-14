import React, { useState } from 'react';
import { addPatient } from '../api/api';

function AddPatient() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPatient = { name, age };
    await addPatient(newPatient);
    alert("Patient added successfully!");
    setName("");
    setAge("");
  };

  return (
    <div>
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Patient Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}

export default AddPatient;
