import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';



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
        const oneAppointment = response._id;
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
    <div className="EditAppointment">
      <h3>Edit the Appointment</h3>

      <form onSubmit={handleSubmit}>
            <select onChange={handleChange}>
                  <option value={"jen's haircut"}>Jen's haircut 20£</option>
                  <option value={"lady's haircut"}>Lady's haircut 20£</option>
                  <option value={"beard trim"}>Beard trim 10£</option>
                  <option value={"color"}>color 10£</option>
                  <option value={"highlight"}>highlight 10£</option>
                  <option value={"kid's haircut"}>Kid's haircut 10£</option>
                  <option value={"beard trim"}>Beard trim 10£</option>
            </select>
            <div>
              <DateTimePicker onChange={setDate} value={date} />
              </div>
        
        <button type="submit">Edit Your Booking</button>
      </form>

      <button onClick={deleteProject}>Delete Booking</button>
    </div>
  );
}

export default EditAppointment;