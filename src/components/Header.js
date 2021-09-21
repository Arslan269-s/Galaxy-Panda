import React, { useState, useEffect } from "react";
import logoImg from "../images/galaxy_panda.png";
import { Connection, Transaction,clusterApiUrl } from "@solana/web3.js";
// import  splToken from '@solana/spl-token';

export const Header = () => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // window.solana.connect();
    // window.solana.on("connect", () => {
    //   let address = window.solana.publicKey.toString();
    //   setAccount(address);
    // });
    setLoading(false);
  }, []);
  async function connect(e) {
    e.preventDefault();
    const isPhantomInstalled = window.solana && window.solana.isPhantom;
    if (isPhantomInstalled) {
      await window.solana.connect();
      window.solana.on("connect", () => {
        let address = window.solana.publicKey.toString();
        setAccount(address);
      });
    } else {
      console.log(`Phantom is not Installed`);
    }
  }

  async function disconnect(e) {
    e.preventDefault();
    await window.solana.disconnect();
    setAccount(null);
  }

  return (
    <header className="transparent">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">
                  <div className="de-flex-col">
                    <div id="logo">
                      <a href="index.html">
                        <img
                          alt=""
                          src={logoImg}
                          style={{
                            width: "90px",
                            height: "90px",
                            display: "inline-block",
                            marginRight: "-5px",
                            position: "relative",
                            top: "2px",
                            marginRight: "4px",
                            marginBottom: "5px",
                          }}
                        />
                        <span
                          className="pixel-font"
                          style={{
                            color: "#FFF",
                            fontSize: "36px",
                            display: "inline-block",
                            verticalAlign: "middle",
                            letterSpacing: "1px",
                            fontFamily: "bangers",
                            color: "#00FFAB",
                          }}
                        >
                          galaxy panda
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <a href="index.html">
                        Home<span></span>
                      </a>
                    </li>
                    <li>
                      <a href="roadmap.html">
                        Roadmap<span></span>
                      </a>
                    </li>
                    <li>
                      <a href="rankings.html">
                        Rarity Ranking<span></span>
                      </a>
                    </li>
                    <li>
                      <a href="attributes.html">
                        Attributes<span></span>
                      </a>
                    </li>
                    <li>
                      <a href="index.html#section-stats">
                        Mint Stats<span></span>
                      </a>
                    </li>
                    <li>
                      <a href="index.html#section-faq">
                        FAQ<span></span>
                      </a>
                    </li>
                  </ul>
                  <div className="menu_side_area">
                    <button
                      className="btn btn-primary"
                      style={{
                        display: "inline-block",
                        backgroundColor: "#550D8F",
                      }}
                      onClick={connect}
                    >
                      {account === null
                        ? "Connect Wallet"
                        : `${account.slice(0, 4)}...${account.slice(40)}`}
                    </button>
                    {account === null ? null : (
                      <button
                        className="btn btn-primary"
                        style={{ backgroundColor: "#550D8F" }}
                        onClick={disconnect}
                      >
                        Disconnect Wallet
                      </button>
                    )}
                    <span className="menu-btn"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
