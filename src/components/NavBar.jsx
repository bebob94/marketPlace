import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavBar() {
  return (
    <Navbar className="bg-primary text-light">
      <Container>
        <Link to={"/"}>
          {" "}
          <Navbar.Brand>Bebazon</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Signed in as:</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
