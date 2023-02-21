import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToContainer } from "../redux/action/action";
import Error from "./Error";
import IsLoading from "./IsLoading";

import Product from "./Product";

const ContainerProducts = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productsData.products);
  const hasError = useSelector((state) => state.productsData.hasError);
  const isLoading = useSelector((state) => state.productsData.isLoading);

  useEffect(() => {
    dispatch(addToContainer("products"));
  }, []);

  return (
    <Container>
      <Row>
        {isLoading ? (
          <IsLoading />
        ) : hasError ? (
          <Error />
        ) : (
          products.map((prod) => <Product key={prod.id} product={prod} />)
        )}
      </Row>
    </Container>
  );
};

export default ContainerProducts;
