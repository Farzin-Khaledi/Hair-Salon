import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
         <Card style={{ width: '28rem' }}>
         <Card.Img variant="top" src="https://cdn.mos.cms.futurecdn.net/cij4VhBaee5J95WdQkvr8Z-1920-80.jpg.webp" />
         <Card.Body>
         <Card.Title>Appointment Details</Card.Title>
         <Card.Text>{appointment.service}</Card.Text>
         <Card.Text>{appointment.date}</Card.Text>
         </Card.Body>
    </Card>
    </>
      )}

          


      <Link to="/appointments">
        <Button variant="warning" >Back to appointments</Button>
      </Link>
          
      <Link to={`/appointments/edit/${appointmentId}`}>
        <Button variant="success" >Edit Appointment</Button>
      </Link>
      
    </div>
  );
}

export default AppointmentDetails;