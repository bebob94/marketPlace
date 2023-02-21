import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_CART } from "../redux/action/action";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.content);
  return (
    <>
      {products.length === 0 ? (
        <Alert className="mt-3">
          <strong> Carrello vuoto: </strong> Prego Selezionare qualche prodotto!
        </Alert>
      ) : (
        <Container>
          <Row>
            {products.map((prod, i) => {
              return (
                <Col xs={12} className="d-flex m-2 align-items-center" key={i}>
                  <Button
                    className="mx-3"
                    onClick={() =>
                      dispatch({ type: REMOVE_FROM_CART, payload: i })
                    }
                  >
                    🗑
                  </Button>
                  <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    style={{ height: "100px", width: "100px" }}
                  />
                  <Row>
                    <h5 className="mx-3">{prod.title}</h5>
                    <h5 className="mx-3">{prod.price}€</h5>
                  </Row>
                </Col>
              );
            })}
          </Row>
          <h4 className="mt-4">
            TOTALE:
            {products.reduce(
              (tot, currentvalue) => tot + parseFloat(currentvalue.price),
              0
            )}{" "}
            €
          </h4>
        </Container>
      )}
    </>
  );
};

export default Cart;
