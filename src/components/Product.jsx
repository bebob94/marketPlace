import { Card, Button, Col } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Col xs={3}>
      <Card className="myCard">
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="primary">apri prodotto</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
