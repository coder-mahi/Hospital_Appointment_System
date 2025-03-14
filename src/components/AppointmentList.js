import React, { useEffect, useState } from 'react';
import { fetchAppointments } from '../api/api';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function getAppointments() {
      const data = await fetchAppointments();
      setAppointments(data);
    }
    getAppointments();
  }, []);

  return (
    <div>
      <h2>Appointment List</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.doctorName} with {appointment.patientName} on {appointment.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
