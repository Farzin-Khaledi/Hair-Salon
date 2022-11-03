// We are deconstructing props object directly in the parentheses of the function


function StylistCard ( {stylist} ) {

  return (
    <div className="StylistCard card">
      <div>
        <h3>Name : {stylist.name}</h3>
    </div>
    <div>
        <h3>email : {stylist.email}</h3>
    </div>
    <div>
        <h3>mobile : {stylist.mobile}</h3>
    </div>
      
        

    
      <p style={{ maxWidth: "400px" }}>{} </p>
    </div>

  );
}

export default StylistCard;