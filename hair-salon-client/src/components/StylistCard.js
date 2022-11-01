import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function StylistCard ( { stylist} ) {
  
  return (
    <div className="StylistCard card">
      <Link to={`/stylists/${stylist._id}`}> </Link>
      <div>
        <h3>Name : {stylist.name}</h3>
    </div>
    <div>
        <h3>email : {stylist.email}</h3>
    </div>
    <div>
        <h3>mobile : {stylist.mobile}</h3>
    </div>
      <Link to="/stylists">
        <button>Back to Stylists</button>
      </Link>
          
    
      <Link >
      <button>Edit</button>
      <button>Delete</button>
      </Link>
     
      <p style={{ maxWidth: "400px" }}>{} </p>
    </div>

  );
}

export default StylistCard;