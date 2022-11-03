import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';



// We are deconstructing props object directly in the parentheses of the function


function StylistCard ( {stylist} ) {

  return (
    <Container>
      <Row>
        <Col> 
         <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.mudpak.co.uk/wp-content/uploads/2021/09/banner.png" />
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
    </Col>
      </Row>
    </Container>
  

  );
}

export default StylistCard;