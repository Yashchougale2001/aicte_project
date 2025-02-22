import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <Navbar bg="secondary" variant="dark" expand="lg" className="px-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Auction App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center">
          <Nav className="d-flex align-items-center gap-3">
            <Nav.Link as={Link} to="/signup" className="px-3 text-white">
              Signup
            </Nav.Link>
            <Nav.Link as={Link} to="/signin" className="px-3 text-white">
              Signin
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="px-3 text-white">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/post-auction" className="px-3 text-white">
              Post Auction
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex align-items-center">
          {isAuthenticated && (
            <>
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </div>
      </Container>
      <Nav.Link as={Link} to="/profile" className="px-3">
        <i
          className="bi bi-person-circle"
          style={{ fontSize: "1.5rem", color: "white" }}
        ></i>
      </Nav.Link>
    </Navbar>
  );
}

export default NavbarComponent;
