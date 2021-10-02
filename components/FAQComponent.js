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
            YAY Bears is the first NFT collection launching on Arbitrum,
            inspired by the life and work of Kanye West. We are huge fans of
            Kanye, and we wanted to give ourselves and other fans a way to
            express our love of his music and eccentricity on the blockchain,
            especially as Donda has finally been released. Kanye is not
            affiliated with this project in any way.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="accordian-item">
          <Accordion.Header className="accordian-header">
            But wait, what about copyright?
          </Accordion.Header>
          <Accordion.Body className="accordian-body">
            We’ve taken care to avoid using any trademarks or copyrighted art.
            While some of our art resembles copyrighted artwork (this is due to
            the nature of the project’s inspiration), we strongly believe our
            designs fall under parody fair use. However, should copyright owners
            feel otherwise, this project will become an interesting experiment
            in decentralization. Our NFTs live on Arbitrum, and all artwork is
            hosted on IPFS. Fans and holders of YAY Bears are encouraged to host
            the artwork on their own IPFS nodes in order to ensure its
            availability.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="accordian-item">
          <Accordion.Header className="accordian-header">
            Where can I find YAY Bears?
          </Accordion.Header>
          <Accordion.Body className="accordian-body">
            YAY Bears are available for minting on this website. There is
            currently no NFT marketplace on Arbitrum, but we are building our
            own marketplace to account for this until OpenSea or another
            marketplace supports Arbitrum. YAY Bears also have a{" "}
            <a href="https://twitter.com/YAYBEAR">Twitter</a> account and a{" "}
            <a href="https://discord.gg/p9aYnfBBab">Discord </a>server. Follow
            us and join the server to become a part of the community!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="accordian-item">
          <Accordion.Header className="accordian-header">
            Does the team keep any YAY Bears?
          </Accordion.Header>
          <Accordion.Body className="accordian-body">
            The team will be minting 50 Bears for giveaways, marketing, and team
            members.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="accordian-item">
          <Accordion.Header className="accordian-header">
            Do YAY Bears have any utility?
          </Accordion.Header>
          <Accordion.Body className="accordian-body">
            Once all YAY Bears have been minted, the team will be setting up a
            treasury with a portion of the funds to donate to charity. YAY Bear
            holders will get to vote on what charity those funds are donated to.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5" className="accordian-item">
          <Accordion.Header className="accordian-header">
            How to mint YAY Bears on Arbitrum?
          </Accordion.Header>
          <Accordion.Body className="accordian-body">
            We have written a tutorial on how to mint YAY Bears on Arbitrum. You
            can check it out (
            <a
              href="https://hackmd.io/@YayBears/minting"
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
            When will next generations come out and what will they be able to
            do?
          </Accordion.Header>
          <Accordion.Body className="accordian-body">
            We had no idea how successful this project would be or if people
            would even want to buy these. However, if a strong community forms
            around YAY Bears we are happy to explore additional functionalities
            and a next generation of YAY Bears.
          </Accordion.Body>
        </Accordion.Item> */}
      </Accordion>

      {/* <Container className="faq-container">
        
      </Container> */}
    </div>
  );
}

export default FAQComponent;
