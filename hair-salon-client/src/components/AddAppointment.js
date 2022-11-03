import { useState } from "react";
import axios from "axios";
import DateTimePicker from 'react-datetime-picker';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AddAppointment({refreshAppointment}) {
  const [service, setService] = useState('');
  const [date, setDate] = useState(new Date());
  const [Stylist, setStylist] = useState('');


  
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody ={service,date,Stylist};
   
    console.log('service => ', requestBody)

    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/appointments`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        // Reset the state
        setService("");
        setDate("");
        setStylist("");
        refreshAppointment();
      })
      .catch((error) => console.log(error));
  };

    
  const handleChange = (e) => {
    setService(e.target.value)
  } 
//const animatedComponents = makeAnimated();
  return (

    <div>
    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="https://cdn.mos.cms.futurecdn.net/cij4VhBaee5J95WdQkvr8Z-1920-80.jpg.webp" />
      <Card.Body>
      <Card.Title>Edit the Appointment</Card.Title>
      <form onSubmit={handleSubmit}>
      <Card.Text>
            <select label="Select the service" size="lg" onChange={handleChange}>
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
              
          
             
        <Button variant="success" type="submit">Confirm Booking</Button>
    
      </form>

     
      </Card.Body>
    </Card>
    </div>


  );
}

export default AddAppointment;


