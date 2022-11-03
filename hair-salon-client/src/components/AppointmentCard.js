import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

// We are deconstructing props object directly in the parentheses of the function
function AppointmentCard ( {service,date,_id,price,duration} ) {
   date = Date(date)
  
  return (
    <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.mudpak.co.uk/wp-content/uploads/2021/09/banner.png" />
      <Card.Body>
        <Card.Title>Booked Appointment</Card.Title>
        <Card.Text></Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Service: {service}</ListGroup.Item>
        <ListGroup.Item>Price: {price} £</ListGroup.Item>
        <ListGroup.Item>Duration: {duration} Minutes</ListGroup.Item>
        <ListGroup.Item>Data And Time: {date}</ListGroup.Item>
      </ListGroup>
      <Link to={`/appointments/${_id}`}>
            <Button variant="info" >More Details</Button>
          </Link>
          </Card.Body>
    </Card>
      </div>


  );
}

export default AppointmentCard;
