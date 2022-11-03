import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
//import AddAppointment from "../components/AddAppointment";
// import AddAppointment from "../components/AddAppointment";
// import AppointmentCard from "../components/AppointmentCard";

function AppointmentDetails(props) {
  const [appointment, setAppointment] = useState(null);
  const { appointmentId } = useParams();
  
  
  const getAppointment = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/appointments/${appointmentId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneAppointment = response.data;
        setAppointment(oneAppointment);
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {
    getAppointment();
  }, [] );

  
  return (
    <div className="AppointmentDetails">
      {appointment && (
        <>
          <h1>{appointment.service}</h1>
          <p>{appointment.date}</p>
        </>
      )}

          


      <Link to="/appointments">
        <button>Back to appointments</button>
      </Link>
          
      <Link to={`/appointments/edit/${appointmentId}`}>
        <button>Edit Appointment</button>
      </Link>
      
    </div>
  );
}

export default AppointmentDetails;