/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.css";
import FAQComponent from "../components/FAQComponent";
import TopComponent from "../components/TopComponent";
import CountdownComponent from "../components/CountdownComponent";
// import MintComponent from "../components/MintComponent";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

export default function Home() {

  return (
    <div>
      <Head>
        <title>ArbiSperm</title>
        <meta name="description" content="8K YAY Bears on Arbitrum" />
        <meta charSet='utf-8' />
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
        {/* <MintComponent /> */}
      </main>

      <footer className="footer">
        <h1>ArbiSperm &copy; 2021</h1>
        <p>Smart Contract Address: CHANGE THIS<a href="https://arbiscan.io/address/0x53930807383be7139e1da1a758370cd64469ee43">0x53930807383Be7139E1DA1A758370cd64469Ee43</a></p>
        <div className="socials">
          <a href="https://twitter.com/yaybearnfts">
            <span>
              <FaTwitter /> &nbsp; &nbsp; &nbsp;
            </span>
          </a>
          <a href="https://discord.gg/p9aYnfBBab">
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
