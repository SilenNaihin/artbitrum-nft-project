import React from "react";
import { Container, Accordion } from "react-bootstrap";
import {} from "react-bootstrap";

function FAQComponent() {
  return (
    <div className="faq-container-bg">
      <Accordion className="accordian-container">
        <Accordion.Item eventKey="0" className="accordian-item">
          <Accordion.Header className="accordian-header">
            What is ArbiSperm?
          </Accordion.Header>
          <Accordion.Body className="accordian-body">
            ArbiSperm is amongst the first NFT collections launching on
            Arbitrum. We strongly believe in two things. The power of life, and
            the power of layer 2. Sperm is the essence of life. Every day a too
            large to count amount of sperm is released into the world. Only the
            0.000001% make it. Become a part of the ArbiSperm community to be a
            part of the 0.000001% who are able to own a capped 200 ArbiSperm. We
            believe in the power of Ethereum but L2 applications such as
            Arbitrum are the future.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="accordian-item">
          <Accordion.Header className="accordian-header">
            Where can I find ArbiSperm?
          </Accordion.Header>
          <Accordion.Body className="accordian-body">
            ArbiSperm are available for minting on this website. There is
            currently no NFT marketplace on Arbitrum, but we are currently
            adding a way to view and trade ArbiSperm on this website. ArbiSperm
            also has a <a href="https://twitter.com/arbisperm">Twitter</a>{" "}
            account and a{" "}
            <a href="https://discord.com/invite/T676yVmEue">Discord </a>
            server. Follow us and join the server to become a part of the
            community!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="accordian-item">
          <Accordion.Header className="accordian-header">
            Does the team keep any ArbiSperm?
          </Accordion.Header>
          <Accordion.Body className="accordian-body">
            The team will be minting 20 ArbiSperm for giveaways, marketing, and
            team members.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="accordian-item">
          <Accordion.Header className="accordian-header">
            What does the future of ArbiSperm look like?
          </Accordion.Header>
          <Accordion.Body className="accordian-body">
            Once all ArbiSperm have been minted, the team will be setting up a
            treasury with a portion of the funds to donate to charity. ArbiSperm
            holders will get to vote on what charity those funds are donated to.
            As well, once completely minted, two ArbiSperm that win the race
            will be randomly selected to win ETH.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5" className="accordian-item">
          <Accordion.Header className="accordian-header">
            How to mint ArbiSperm on Arbitrum?
          </Accordion.Header>
          <Accordion.Body className="accordian-body">
            We have written a tutorial on how to mint ArbiSperm on Arbitrum. You
            can check it out (
            <a
              href="https://hackmd.io/@ArbiSperm/Byq8ZW6rF"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            )
          </Accordion.Body>
        </Accordion.Item>
        {/* <Accordion.Item eventKey="4" className="accordian-item">
          <Accordion.Header className="accordian-header">
            What does the future hold
          </Accordion.Header>
          <Accordion.Body className="accordian-body">
            We had no idea how successful this project would be or if people
            would even want to buy these.
          </Accordion.Body>
        </Accordion.Item> */}
      </Accordion>

      {/* <Container className="faq-container">
        
      </Container> */}
    </div>
  );
}

export default FAQComponent;
