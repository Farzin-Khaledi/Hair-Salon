import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function AppointmentCard ( {service,date,_id,price,duration} ) {
   date = Date(date)
  
  return (
    <div className="AppointmentCard card">
      <div>
        <h2>Service:{service}</h2>
      <h3> </h3>
   
    </div>
    <div>
       
        <h3>Total price :{price} £</h3>
    </div>
    <div>
        <h2> Duration  </h2>
        <h3> {duration} Minutes</h3>
    </div>
    <div>
        <h2> Data </h2>
        <h3>{date}</h3>
    </div>
    <Link to={`/appointments/${_id}`}>
            <button>More Details</button>
          </Link>
     
      <p style={{ maxWidth: "400px" }}>{} </p>
    </div>

  );
}

export default AppointmentCard;