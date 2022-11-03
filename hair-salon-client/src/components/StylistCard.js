
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';



// We are deconstructing props object directly in the parentheses of the function


function StylistCard ( {stylist} ) {

  return (
  
         <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{stylist.name} Profile</Card.Title>
        <Card.Text></Card.Text>

        <ListGroup className="list-group-flush">
            <ListGroup.Item>Name: {stylist.name}</ListGroup.Item>
            <ListGroup.Item>Email: {stylist.email}</ListGroup.Item>
            <ListGroup.Item>Mobile: {stylist.mobile}</ListGroup.Item>

      </ListGroup>
          </Card.Body>
    </Card>
      </div>

  

  );
}

export default StylistCard;