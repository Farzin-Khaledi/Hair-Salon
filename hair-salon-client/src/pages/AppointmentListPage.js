import { useState, useEffect } from "react";
import axios from "axios";
// import AddAppointment from "./../components/AddAppointment";
import AppointmentCard from "./../components/AppointmentCard";

const API_URL = "http://localhost:5005";


function AppointmentListPage() {

  const [appointments, setAppointments] = useState([]);

  const getAllAppointments = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/api/appointments`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => setAppointments(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllAppointments();
  }, [] );


  
  return (
    <div className="AppointmentListPage">

      { appointments.map((appointment) => <AppointmentCard appointment={appointment} />  )} 
       
    </div>
  );
}

export default AppointmentListPage;

