import React, { useEffect, useState } from 'react';
import { fetchPatients } from '../api/api';

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function getPatients() {
      const data = await fetchPatients();
      setPatients(data);
    }
    getPatients();
  }, []);

  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name} - {patient.age} years</li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;
