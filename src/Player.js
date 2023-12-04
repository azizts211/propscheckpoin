import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Player=(props)=>{
  return(
 
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={props.el.photo} style={{height:"150px"}} />
      <Card.Body>
        <Card.Title>{props.el.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.el.address}</Card.Subtitle>
        <Card.Text>
        {props.el.age}
        </Card.Text>
       
      </Card.Body>
    </Card>

  )
}
export default Player