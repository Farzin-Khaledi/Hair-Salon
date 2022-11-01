import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

const services = [
  {
  name:"jen's haircut",
  price:20,
  duration: 30
  }, 
  {
    name: "lady's haircut",
    price: 20 ,
    duration: 30,
  },
  {
    name: "beard trim",
    price: 10,
    duration:15,
  },
  {
    name: "color",
    price: 45,
    duration:40,
  },
  {
    name: "Kid's haircut",
    price: 10,
    duration:20,
  },
];


function AddAppointment(props) {
  const [selectedService, setSelectedService] = useState([]);
  //const [data, setDate] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {selectedService};

    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .post(
        `${API_URL}/api/appointments`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        // Reset the state
        setSelectedService([]);
        props.refreshAppointments();
      })
      .catch((error) => console.log(error));
  };
 

  return (
    <div className="AddAppointment">
      <h3>Make an appointment</h3>
      

      <form onSubmit={handleSubmit}>
        <label>Service : </label>
        <select multi>
          {services.map(service =>(<><option>{service.name}:{service.price}£ ,{service.duration} mins </option></>))}
        </select>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddAppointment;
