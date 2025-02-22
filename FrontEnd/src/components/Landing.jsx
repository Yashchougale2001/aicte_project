import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Landing = () => {
  return (
    <Container fluid className="bg-light p-5">
      <Row className="justify-content-center">
        <Col md={10} lg={10}>
          {/* Header Section */}
          <div className="text-center mb-4">
            <h2
              className="text mb-5"
              style={{ fontSize: "2.5rem", color: "#22333b" }}
            >
              Welcome to Auction App
            </h2>
            <p className="lead mb-4">
              Welcome to our Auction platform, where you can bid for the most
              exciting items at the best prices. Participate in live auctions
              and secure your favorite items through competitive bidding!
            </p>
            <p className="mb-4">
              Our auction system is designed to allow users to sell and buy
              items through a process of bidding. Sellers can list their
              products, and buyers can place bids until the auction closes. The
              highest bidder at the closing time wins the item.
            </p>
          </div>

          {/* Auction Types Section */}
          <div className="mb-4">
            <h4>Types of Auctions We Support:</h4>
            <ul style={{ listStylePosition: "inside", textAlign: "left" }}>
              <li>
                <strong>English Auction</strong>: The most common type, where
                bids increase progressively until the highest bid wins.
              </li>
              <li>
                <strong>Dutch Auction</strong>: The auctioneer begins with a
                high price, and the price decreases until someone accepts the
                price.
              </li>
              <li>
                <strong>Silent Auction</strong>: Bidders write down their bids
                privately, and the highest bid wins.
              </li>
            </ul>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-4">
            <h4>Why Choose Our Auction Platform?</h4>
            <ul style={{ listStylePosition: "inside", textAlign: "left" }}>
              <li>Competitive Bidding Process</li>
              <li>Wide Variety of Categories</li>
              <li>Real-Time Auction Updates</li>
              <li>Secure Payment Methods</li>
              <li>User-Friendly Interface</li>
            </ul>
          </div>

          <Button variant="primary" href="/signin" className="mt-3">
            Start Bidding Now!
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
