import React from "react";
import { Container, Accordion } from "react-bootstrap";
import {} from "react-bootstrap";

function FAQComponent() {
  return (
    <div className="faq-container-bg md:w-5/6 mx-auto">
      <Accordion className="accordian-container">
        <Accordion.Item eventKey="0" className="accordian-item">
          <Accordion.Header className="accordian-header">
            What is ArbiSperm?
          </Accordion.Header>
          <Accordion.Body className="accordian-body">
            ArbiSperm is amongst the first NFT collections launching on
            Arbitrum. Ethereum is cool, but L2 applications such as Arbitrum are
            the future. <b>Why sperm?</b> Sperm is the essence of life. Every
            day an immense amount of sperm is released into the world. Only the
            0.000001% make it. Become a part of the ArbiSperm community to be a
            be a part of the 0.000001% who are able to own a capped 260
            ArbiSperm.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="accordian-item">
          <Accordion.Header className="accordian-header">
            Where can I find ArbiSperm?
          </Accordion.Header>
          <Accordion.Body className="accordian-body">
            ArbiSperm are available for minting on arbisperm.com. There is
            currently no NFT marketplace on Arbitrum, but we have added a way to
            view ArbiSperm on this website. We are building a way to trade
            ArbiSperm as well. ArbiSperm also has a{" "}
            <a
              target="_blank"
              style={{ color: "#ADD8E6" }}
              href="https://twitter.com/arbisperm"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{" "}
            account and a{" "}
            <a
              target="_blank"
              style={{ color: "#ADD8E6" }}
              href="https://discord.com/invite/T676yVmEue"
              rel="noopener noreferrer"
            >
              Discord{" "}
            </a>
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
            🥚 Once all ArbiSperm have been minted, lucky ArbiSperm HODLers will
            be airdropped <b>ArbiEggs</b> which will also go for sale. <br></br>
            🆘 The team will be setting up a treasury with a portion of the
            funds to donate to <b>resolve.org</b>, a non-profit helping with
            infertility. <br></br> 🏁 Once all ArbiEggs are sold out, three
            lucky ArbiSperm and ArbiEgg HODLers will be randomly selected to win
            ETH.
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
              style={{ color: "#ADD8E6" }}
            >
              here
            </a>
            )
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQComponent;
