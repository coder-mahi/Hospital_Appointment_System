const API_BASE_URL = "http://localhost:8080/api"; // Adjust based on your backend

export const fetchDoctors = async () => {
  const response = await fetch(`${API_BASE_URL}/doctors`);
  return response.json();
};

export const addDoctor = async (doctorData) => {
  const response = await fetch(`${API_BASE_URL}/doctors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(doctorData),
  });
  return response.json();
};
