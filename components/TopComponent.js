import React from "react";
import { Container, Col, Row, Link } from "react-bootstrap";
import {} from "react-bootstrap";

function TopComponent() {
  return (
    <>
      <div className="background"></div>

      <Container>
        <div className="section-top">
          <div className="section-top-left ">
            <div
              className="neonText"
              style={{ fontSize: "8rem", fontWeight: "bold" }}
            >
              ArbiSperm
            </div>
            <p>
              260 Digitally Generated ArbiSperm on Arbitrum. Just keep swimming.
            </p>
          </div>
          <div className="section-top-right">
            <img className="img-fluid" src="/assets/swimmers.gif" fluid />
          </div>
        </div>
      </Container>
    </>
  );
}

export default TopComponent;
