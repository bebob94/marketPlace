import { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ADD_TO_CART } from "../redux/action/action";

const DetailProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const myProduct = async () => {
      try {
        let response = await fetch(
          `https://dummyjson.com/product/${params.id}`
        );
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setProduct(data);
        } else {
          alert("merda qualcosa è andato storto");
        }
      } catch (error) {
        alert(error);
      }
    };

    myProduct();
  }, [params.id]);

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Card.Img
            variant="top"
            src={product.thumbnail}
            style={{ height: "350px" }}
          />
        </Col>
        <Col>
          <ListGroup className="mt-3">
            <ListGroup.Item>
              <strong>{product.title}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong> Brand: </strong>
              {product.brand}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong> Category: </strong>
              {product.category}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong> Description: </strong>
              {product.description}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong> Price: </strong>
              {product.price} €
            </ListGroup.Item>
          </ListGroup>

          <Button
            className="mt-4"
            variant="primary"
            onClick={() => dispatch({ type: ADD_TO_CART, payload: product })}
          >
            Aggiungi al carrello 🛒
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailProduct;
