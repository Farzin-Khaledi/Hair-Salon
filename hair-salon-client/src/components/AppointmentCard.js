import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function AppointmentCard ( {appointment} ) {
  
  return (
    <div className="AppointmentCard card">
      <Link to={`/appointments/${appointment._id}`}> </Link>
      <div>
        <h2>Service:</h2>
      {appointment.services.map((service) => (
        <h3> { service}</h3>
      ))}
    </div>
    <div>
       
        <h3>Total price :{appointment.price} £</h3>
    </div>
    <div>
        <h2> Duration  </h2>
        <h3> {appointment.durationInMinutes} Minutes</h3>
    </div>
    <div>
        <h2> Data  </h2>
        <h3> {appointment.date} Minutes</h3>
    </div>
 

      <Link to="/appointments">
        <button>Back to Appointments</button>
      </Link>
     
      <p style={{ maxWidth: "400px" }}>{} </p>
    </div>

  );
}

export default AppointmentCard;