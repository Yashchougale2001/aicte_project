import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Alert,
  Container,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    try {
      await axios.post("http://localhost:5001/signup", {
        username,
        password,
      });

      alert("Signup successful! Please sign in.");
      navigate("/signin"); // Redirect to signin page
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      setError(
        err.response?.data?.message || "Signup failed. Please try again."
      );
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          <div className="p-4 border rounded shadow-lg bg-white">
            <h2 className="text-center mb-4 text-primary">Signup</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSignup}>
              {/* Username Field */}
              <Form.Group controlId="username" className="mb-3">
                <Form.Label className="text-secondary">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Password Field with Show/Hide */}
              <Form.Group controlId="password" className="mb-4">
                <Form.Label className="text-secondary">Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i
                      className={`bi ${
                        showPassword ? "bi-eye-slash" : "bi-eye"
                      }`}
                    ></i>
                  </Button>
                </InputGroup>
              </Form.Group>

              {/* Signup Button */}
              <Button variant="primary" type="submit" className="w-100 mb-3">
                Signup
              </Button>

              {/* Signin Link */}
              <div className="text-center">
                <p className="text-muted">
                  Already have an account?{" "}
                  <a href="/signin" className="text-primary">
                    Sign in here
                  </a>
                </p>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
