import { useState } from "react";
import axios from "axios";
import DateTimePicker from 'react-datetime-picker';


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
      <div className="AddAppointment">
      <h3>Make an appointment</h3>
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
        
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default AddAppointment;


