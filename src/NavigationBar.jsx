import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png"; // ← import your logo

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar-custom px-3">
      <Container>
        {/* Logo + Brand */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Befriend Seniors Logo"
            style={{
              height: "40px",
              width: "auto",
              marginRight: "10px",
            }}
          />
          <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            Befriend Seniors
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/founder">Founder</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
