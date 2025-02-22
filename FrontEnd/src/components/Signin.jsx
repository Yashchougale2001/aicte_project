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

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5001/signin", {
        username,
        password,
      });
      console.log("Signin Response:", res.data);

      if (res.data.token) {
        localStorage.setItem("authToken", res.data.token);
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      console.error("Signin Request Error:", err.response?.data || err.message);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          <div className="p-4 border rounded shadow-lg bg-light">
            <h2 className="text-center mb-4 text-primary">Signin</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSignin}>
              {/* Username Field */}
              <Form.Group controlId="username" className="mb-3">
                <Form.Label className="text-secondary">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="border-primary"
                />
              </Form.Group>

              {/* Password Field with Show/Hide */}
              <Form.Group controlId="password" className="mb-3">
                <Form.Label className="text-secondary">Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-primary"
                  />
                  <Button
                    variant={
                      showPassword ? "outline-danger" : "outline-primary"
                    }
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

              {/* Signin Button */}
              <Button variant="primary" type="submit" className="w-100 mt-3">
                Signin
              </Button>
            </Form>

            <div className="text-center mt-3">
              <p className="text-muted">
                Don't have an account?{" "}
                <a href="/signup" className="text-primary">
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Signin;
