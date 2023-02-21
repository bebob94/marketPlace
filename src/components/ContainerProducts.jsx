import { useEffect } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionFetch } from "../redux/action/action";

import Product from "./Product";

const ContainerProducts = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const hasError = useSelector((state) => state.hasError);

  useEffect(() => {
    dispatch(actionFetch());
  }, []);
  console.log(products);

  return (
    <Container>
      <Row>
        {hasError && <Alert variant="danger">Error 404: file not found</Alert>}
        {products.map((prod) => (
          <Product key={prod.id} product={prod} />
        ))}
      </Row>
    </Container>
  );
};

export default ContainerProducts;
