import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function EditAppointment(props) {
  const [service, setService] = useState("");
  const [date, setDate] = useState(new Date());

  const navigate =  useNavigate();
  const { appointmentId } = useParams();
  
  
  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    
    // Send the token through the request "Authorization" Headers 
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/appointments/${appointmentId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }    
      )
      .then((response) => {
        const oneAppointment =response
        setService(oneAppointment.service);
        setDate(oneAppointment.date);
      })
      .catch((error) => console.log(error));
    
  }, [appointmentId]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { service, date };
  
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');  

    // Send the token through the request "Authorization" Headers   
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/appointments/${appointmentId}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }              
      )
      .then((response) => {
        navigate(`/appointments/${appointmentId}`)
      });
  };
  
  
  const deleteProject = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');      
    
    // Send the token through the request "Authorization" Headers   
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/api/appointments/${appointmentId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }           
      )
      .then(() => navigate("/appointments"))
      .catch((err) => console.log(err));
  };  
  const handleChange = (e) => {
    setService(e.target.value)
  } 
  
  return (
    <div>
    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="https://cdn.mos.cms.futurecdn.net/cij4VhBaee5J95WdQkvr8Z-1920-80.jpg.webp" />
      <Card.Body>
      <Card.Title>Edit the Appointment</Card.Title>
      <form onSubmit={handleSubmit}>
      <Card.Text>
            <select value={service} label="Select the service" size="lg" onChange={handleChange}>
                  <option value={"jen's haircut"}>Jen's haircut 20£</option>
                  <option value={"lady's haircut"}>Lady's haircut 20£</option>
                  <option value={"beard trim"}>Beard trim 10£</option>
                  <option value={"color"}>color 10£</option>
                  <option value={"highlight"}>highlight 10£</option>
                  <option value={"kid's haircut"}>Kid's haircut 10£</option>
                  <option value={"beard trim"}>Beard trim 10£</option>
            </select>
            </Card.Text>
            <Card.Text><DateTimePicker id="calender" onChange={setDate} value={date} /></Card.Text>
              
          
             
        <Button variant="success" type="submit">Edit Your Booking</Button>
        <Button variant="danger" onClick={deleteProject}>Delete Booking</Button>
      </form>

     
      </Card.Body>
    </Card>
    </div>
  );
}

export default EditAppointment;




   
       
