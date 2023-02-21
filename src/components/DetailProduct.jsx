import { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
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
      <Row>
        <Card className="mt-3">
          <Card.Img
            variant="top"
            src={product.thumbnail}
            style={{ height: "500px" }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.brand}</Card.Text>
            <Card.Text>{product.category}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.price} €</Card.Text>
            <Button
              variant="primary"
              onClick={() => dispatch({ type: ADD_TO_CART, payload: product })}
            >
              Aggiungi al carrello 🛒
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default DetailProduct;
