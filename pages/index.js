/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.css";
import FAQComponent from "../components/FAQComponent";
import TopComponent from "../components/TopComponent";
import CountdownComponent from "../components/CountdownComponent";
import MintComponent from "../components/MintComponent";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

export default function Home() {

  return (
    <div>
      <Head>
        <title>ArbiSperm</title>
        <meta name="description" content="260 ArbiSperm on Arbitrum" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        />
      </Head>

      <main>
        <TopComponent />
        <CountdownComponent />
        <FAQComponent />
        <MintComponent />
      </main>

      <footer className="footer" style={{ paddingBottom: "12px" }}>
        <h2 style={{ marginTop: "12px" }}>ArbiSperm &copy; 2021</h2>
        <p>
          Smart Contract Address: CHANGE THIS
          <a href="https://arbiscan.io/address/0x2a0c81d09d28cD94E4bc65006d98cdE3095161FF">
            0x2a0c81d09d28cD94E4bc65006d98cdE3095161FF
          </a>
        </p>
        <div className="socials">
          <a href="https://twitter.com/arbisperm">
            <span>
              <FaTwitter /> &nbsp; &nbsp; &nbsp;
            </span>
          </a>
          <a href="https://discord.com/invite/T676yVmEue">
            <span>
              <FaDiscord /> &nbsp; &nbsp; &nbsp;
            </span>
          </a>
          <span className="fa fa-linkedin-square"></span>
        </div>
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>
      </footer>
    </div>
  );
}
