import React, { useEffect, useState } from 'react';
import { fetchDoctors } from '../api/api';

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function getDoctors() {
      const data = await fetchDoctors();
      setDoctors(data);
    }
    getDoctors();
  }, []);

  return (
    <div>
      <h2>Doctor List</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>{doctor.name} - {doctor.specialization}</li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorList;
