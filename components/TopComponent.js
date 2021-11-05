import React from "react";
import { Container, Col, Row, Link } from "react-bootstrap";
import {} from "react-bootstrap";

function TopComponent() {
  return (
    <div className="w-full mb-48">
      <div className="background"></div>
        <div className="h-screen px-10 w-full flex flex-col md:flex-row justify-evenly items-center pt-16">
            <div className="text-center md:w-1/2 md:flex md:items-center md:justify-center md:flex-col">
              <div
                className="md:text-left neonText lg:text-8xl text-6xl md:text-6xl"
                style={{ fontWeight: "bold" }}
              >
                ArbiSperm
              </div>
              <div className="mt-3 lg:text-3xl mb-8" style={{ color: 'white'}}>
                260 Digitally Generated ArbiSperm on Arbitrum. Just keep
                swimming.
              </div>
            </div>
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <img className="w-1/2 md:w-2/3 lg:w-3/4" src="/assets/swimmers.gif" fluid />
          </div>
        </div>
    </div>
  );
}

export default TopComponent;
