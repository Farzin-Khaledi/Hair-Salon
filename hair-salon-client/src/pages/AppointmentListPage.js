import { useState, useEffect } from "react";
import axios from "axios";
import AddAppointment from "./../components/AddAppointment";
import AppointmentCard from "./../components/AppointmentCard";

function AppointmentListPage() {

  const [appointments, setAppointments] = useState([]);

  const getAllAppointments = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${process.env.REACT_APP_API_URL}/api/appointments`,
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
      <AddAppointment refreshAppointment={getAllAppointments} />
      { appointments.map((appointment) => <AppointmentCard key={appointment._id}{...appointment} />  )} 
       
    </div>
  );
}

export default AppointmentListPage;

