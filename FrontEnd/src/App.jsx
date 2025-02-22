import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import AuctionItem from "./components/AuctionItem";
import PostAuction from "./components/PostAuction";
import Landing from "./components/Landing";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="app">
        <NavbarComponent />

        <Container className="my-4">
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auction/:id" element={<AuctionItem />} />
            <Route path="/post-auction" element={<PostAuction />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>

        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
