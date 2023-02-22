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
        <Container className="mt-4">
          <Row>
            <Col>
              <Row>
                {products.map((prod, i) => {
                  return (
                    <Col
                      xs={6}
                      className="d-flex m-2 align-items-center"
                      key={i}
                    >
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
            </Col>
            <Col xs={3}>
              {" "}
              <h4 className="mt-4">
                TOTALE:
                <strong className="ms-3">
                  {products.reduce(
                    (tot, currentvalue) => tot + parseFloat(currentvalue.price),
                    0
                  )}{" "}
                  €
                </strong>
              </h4>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Cart;
