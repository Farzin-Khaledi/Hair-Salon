import axios from 'axios';

class AppointmentsService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/appointments
  createOne = (requestBody) => {
    return this.api.post('/api/appointments', requestBody);
  }

  // GET /api/appointments
  getAll = () => {
    return this.api.get('/api/appointments');
  }

  // GET /api/appointments/:id
  getOne = (id) => {
    return this.api.get(`/api/appointments/${id}`);
  }

  // PUT /api/appointments/:id
  updateOne = (id, requestBody) => {
    return this.api.put(`/api/appointments/${id}`, requestBody);
  }

  // DELETE /api/appointments/:id
  deleteAppointment = (id) => {
    return this.api.delete(`/api/appointments/${id}`);
  } 


}

// Create one instance (object) of the service
const appointmentsService = new AppointmentsService();

export default appointmentsService;