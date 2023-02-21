import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const IconCart = () => {
  const cartLength = useSelector((state) => state.cart.content.length);

  return (
    <Container>
      <Row className="justify-content-end mt-3">
        <Col xs={2}>
          <Link to={"/Cart"}>
            🛒 {cartLength} <strong>Carrello</strong>{" "}
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default IconCart;
