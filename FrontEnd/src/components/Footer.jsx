import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="justify-content-between">
          {/* Quick Links */}
          <Col md={3} sm={6}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-white text-decoration-none"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/post-auction"
                  className="text-white text-decoration-none"
                >
                  Post Auction
                </Link>
              </li>
              <li>
                <Link
                  to="/post-auction"
                  className="text-white text-decoration-none"
                >
                  Auction Items
                </Link>
              </li>
            </ul>
          </Col>

          {/* Subscribe Section */}
          <Col md={4} sm={6}>
            <h5>Subscribe to our Newsletter</h5>
            <p>Get the latest auction updates straight to your inbox.</p>
            <Form className="mt-4">
              <Form.Group controlId="subscribeEmail" className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="me-2"
                />
                <Button variant="primary">Subscribe</Button>
              </Form.Group>
            </Form>
          </Col>

          {/* Social Media Links */}
          <Col md={3} sm={12} className="text-md-end text-center mt-3 mt-md-0">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="bg-light" />

        {/* Copyright Section */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; 2024 Auction App. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
