import { useState, useEffect } from "react";
import axios from "axios";
// import AddAppointment from "./../components/AddAppointment";
import StylistCard from "../components/StylistCard";
import AddAppointment from "../components/AddAppointment";

const API_URL = "http://localhost:5005";


function StylistListPage() {

  const [stylists, setStylists] = useState([]);

  const getAllStylists = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/api/stylists`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => setStylists(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllStylists();
  }, [] );

  
  return (
    <div className="StylistListPage">
      <AddAppointment refreshStylists={getAllStylists} /> 
      { stylists.map((stylist) => <StylistCard stylist={stylist} />  )} 
       
    </div>
  );
}

export default StylistListPage;

