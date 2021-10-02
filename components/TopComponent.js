import React from "react";
import { Container, Col, Row, Link } from "react-bootstrap";
import {} from "react-bootstrap";

function TopComponent() {
  return (
    <>
      <div className="background"></div>

      <Container className="container-top">
        <Row className="section-top">
          <Col xs={12} md={6} className="section-top-left">
            <h1 className="neonText">YAY BEARS</h1>
            <p>8,085 Bear NFTs on Arbitrum. With extra Drip.</p>
          </Col>
          <Col xs={12} md={6} className="section-top-right">
            <img className="img-fluid" src="/assets/bears3.gif" fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TopComponent;
