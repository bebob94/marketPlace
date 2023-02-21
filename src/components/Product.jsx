import { Card, Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART, PRODUCT_SELECTED } from "../redux/action/action";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Col xs={3}>
      <Card className="myCard">
        <Card.Img
          variant="top"
          src={product.thumbnail}
          style={{ height: "180px" }}
        />
        <Card.Body>
          <Card.Title className="troncare">{product.title}</Card.Title>
          <Card.Text>{product.brand}</Card.Text>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>{product.price} €</Card.Text>
          <Row>
            <Col xs={8} className="me-2">
              <Link
                to={`/Detail/${product.id}`}
                onClick={() =>
                  dispatch({ type: PRODUCT_SELECTED, payload: product.id })
                }
              >
                <Button variant="primary">apri prodotto</Button>
              </Link>
            </Col>
            <Col xs={1} className="ms-2">
              <Button
                variant="primary"
                onClick={() =>
                  dispatch({ type: ADD_TO_CART, payload: product })
                }
              >
                🛒
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
