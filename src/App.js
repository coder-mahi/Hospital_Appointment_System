import React from 'react';
import './App.css';
import AddDoctor from './components/AddDoctor';
import DoctorList from './components/DoctorList';
import AddPatient from './components/AddPatient';
import PatientList from './components/PatientList';
import AppointmentList from './components/AppointmentList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hospital Management System</h1>
        <AddDoctor />
        <DoctorList />
        <AddPatient />
        <PatientList />
        <AppointmentList />
      </header>
    </div>
  );
}

export default App;
