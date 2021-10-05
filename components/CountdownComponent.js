import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import CountDownTimer from "./CountDownTimer";

function CountdownComponent() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`10/14/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  const hoursMinSecs = { hours: 90, minutes: 20, seconds: 40 };

  return (
    <div className="timer-container-bg ">
      <Container className="timer-container mb-5">
        <Row className="timer-top">
          <Col xs={12} md={12}>
            <p>
              {timerComponents.length ? (
                <>
                  <h1>Launching In...</h1>
                  {timerComponents}
                </>
              ) : (
                <span>Minting On Arbitrum!</span>
              )}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CountdownComponent;
