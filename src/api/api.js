const API_BASE_URL = "http://localhost:8080/api"; // Update if needed

// Fetch all doctors
export const fetchDoctors = async () => {
  const response = await fetch(`${API_BASE_URL}/doctors`);
  return response.json();
};

// Add a new doctor
export const addDoctor = async (doctorData) => {
  const response = await fetch(`${API_BASE_URL}/doctors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(doctorData),
  });
  return response.json();
};

// Fetch all patients
export const fetchPatients = async () => {
  const response = await fetch(`${API_BASE_URL}/patients`);
  return response.json();
};

// Add a new patient
export const addPatient = async (patientData) => {
  const response = await fetch(`${API_BASE_URL}/patients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patientData),
  });
  return response.json();
};

// Fetch all appointments
export const fetchAppointments = async () => {
  const response = await fetch(`${API_BASE_URL}/appointments`);
  return response.json();
};
