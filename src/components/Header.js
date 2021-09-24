import React, { useState, useEffect } from "react";
import logoImg from "../images/galaxy_panda.png";
import { Connection, Transaction, clusterApiUrl } from "@solana/web3.js";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
// import  splToken from '@solana/spl-token';

export const Header = () => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // window.solana.connect();
    // window.solana.on("connect", () => {
    //   let address = window.solana.publicKey.toString();
    //   setAccount(address);
    // })
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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <div id="logo">
              <a href="index.html">
                <img
                  alt=""
                  src={logoImg}
                  style={{
                    width: "70px",
                    height: "70px",
                    display: "inline-block",

                    position: "relative",
                    top: "0px",
                    marginRight: "4px",
                    marginBottom: "0px",
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
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav collasible-nav-dropdown">
            <Nav className="ms-auto">
              <Nav.Link href="index.html">Home</Nav.Link>
              <Nav.Link href="roadmap.html">Roadmap</Nav.Link>
              <NavDropdown title="NFT" id="collasible-nav-dropdown">
                <NavDropdown.Item href="rankings.html">
                  Rarity Ranking
                </NavDropdown.Item>
                <NavDropdown.Item href="attributes.html">
                  Attributes
                </NavDropdown.Item>
                <NavDropdown.Item href="index.html#section-stats">
                  Mint State
                </NavDropdown.Item>

              </NavDropdown>
              <Nav.Link href="token.html">token</Nav.Link>
              <Nav.Link href="game.html">Game</Nav.Link>
              <Nav.Link href="index.html#section-faq">FAQ</Nav.Link>
            
              <div className="menu_side_area">
                <button
                  className="btn btn-primary"
                  id="connect"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#550D8F",

                    marginRight: "12px",
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
                    id="disconnect"
                    style={{ backgroundColor: "#550D8F" }}
                    onClick={disconnect}
                  >
                    Disconnect Wallet
                  </button>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

    // <header className="transparent">
    // 		<div className="container">
    // 			<div className="row">
    // 				<div className="col-md-12">
    // 					<div className="de-flex sm-pt10">
    // 						<div className="de-flex-col">
    // 							<div className="de-flex-col">

    // <div id="logo">
    // 	<a href="index.html">
    // 	<img
    //         alt=""
    //         src={logoImg}
    // 			 style={{
    //           width: "90px",
    //           height: "90px",
    //           display: "inline-block",
    //           // marginRight: "-5px",
    //           position: "relative",
    //           top: "2px",
    //           marginRight: "4px",
    //           marginBottom: "5px",
    //         }} />
    // 		<span className="pixel-font"
    // 			 style={{
    //           color: "#FFF",
    //           fontSize: "36px",
    //           display: "inline-block",
    //           verticalAlign: "middle",
    //           letterSpacing: "1px",
    //           fontFamily: "bangers",
    //           color: "#00FFAB",
    //         }}>
    //          galaxy
    // 			panda</span>
    // 	</a>
    // </div>

    // 							</div>
    // 						</div>
    // 						<div className="de-flex-col header-col-mid">

    // 							<ul id="mainmenu">
    // 								<li>
    // 									<a href="index.html">Home<span></span></a>
    // 								</li>
    // 								<li>
    // 									<a href="roadmap.html">Roadmap<span></span></a>
    // 								</li>

    // 								<li className="dropdown"><a href="">NFT </a>
    // 									<ul className="dropdown-menu">
    // 										<li><a href="rankings.html">Rarity Ranking</a></li>
    // 										<li><a href="attributes.html">Attributes</a></li>
    // 										<li><a href="index.html#section-stats">Mint Stats</a></li>
    // 									</ul>
    // 								</li>
    // 								<li>
    // 									<a href="token.html">Token<span></span></a>
    // 								</li>
    // 								<li>
    // 									<a href="game.html">Game<span></span></a>
    // 								</li>
    // 								<li>
    // 									<a href="index.html#section-faq">FAQ<span></span></a>
    // 								</li>
    // 							</ul>
    // {/* <div className="menu_side_area">
    // 	<a href="#" className="btn-main"
    // 		style={{display: "inline-block", background: "#14c58a !important",}}>Connect Wallet</a>
    // 	<span id="menu-btn"></span>
    // </div> */}
    // <div className="menu_side_area">
    //       <button
    //       className="btn btn-primary" id="connect"
    //       style={{
    //         display: "inline-block",
    //         backgroundColor: "#550D8F",

    //         marginRight: "12px",

    //       }}
    //       onClick={connect}
    //     >
    //       {account === null
    //         ? "Connect Wallet"
    //         : `${account.slice(0, 4)}...${account.slice(40)}`}
    //     </button>
    //     {account === null ? null : (
    //       <button
    //         className="btn btn-primary" id="disconnect"
    //         style={{ backgroundColor: "#550D8F", }}
    //         onClick={disconnect}
    //       >
    //         Disconnect Wallet
    //       </button>
    //     )}
    //         </div>
    //                   <span id="menu-btn"></span>
    //
    // 					</div>
    // 				</div>
    // 			</div>
    // 		</div>
    // </div>
    // </header>
  );
};
