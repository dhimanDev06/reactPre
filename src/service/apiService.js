import axios from "axios";

// Create an Axios instance with base URL
const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
});
// https://everestgreenscapegroup.com/backend/api.php?type=banner&status=active
const egsClient = axios.create({
  baseURL: "https://everestgreenscapegroup.com/backend", // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// API service functions
const ApiService = {
  getUsers: () => apiClient.get("/users"),
  getBanner: () => egsClient.get("api.php?type=banner&status=active"),
  getUserById: (id) => apiClient.get(`/users/${id}`),
  createUser: (userData) => apiClient.post("/users", userData),
  updateUser: (id, userData) => apiClient.put(`/users/${id}`, userData),
  deleteUser: (id) => apiClient.delete(`/users/${id}`),
};

export default ApiService;
