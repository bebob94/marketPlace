import { Container, Navbar } from "react-bootstrap";

function MyNavBar() {
  return (
    <Navbar className="bg-primary text-light">
      <Container>
        <Navbar.Brand href="#home">Bebazon</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Signed in as:</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
