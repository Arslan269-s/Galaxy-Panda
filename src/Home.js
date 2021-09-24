import { useEffect, useState } from "react";
import ContentImg from "./images/galaxy_panda.png";
import bg from "./images/transparent_background_synth_stars.png";
import logoImg from "./images/galaxy_panda.png";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

// import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  // CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";

const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

const Home = (props) => {
  const [balance, setBalance] = useState();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const [counter, setCounter] = useState(1);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));
  const [itemsAvailable, setItemsAvailable] = useState();
  const [itemsRedeemed, setItemsRedeemed] = useState();

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState();

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(() => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsRemaining,
        itemsAvailable,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet,
        props.candyMachineId,
        props.connection
      );

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
      setItemsAvailable(itemsAvailable);
      setItemsRedeemed(itemsRedeemed);
    })();
  }, [wallet, props.candyMachineId, props.connection]);

  return (
    <>
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
                {wallet && (
                  <button>
                    <span>
                      {shortenAddress(wallet.publicKey.toBase58() || "")}
                    </span>{" "}
                    {wallet && (
                      <span>{(balance || 0).toLocaleString()} SOL</span>
                    )}
                  </button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <section
        id="section-hero"
        aria-label="section"
        className=""
        style={{
          background:
            "linear-gradient(200deg, rgba(165,70,121,1) 0%, rgba(117,64,171,1) 100%)",
          zIndex: "1",
        }}
      >
        <div className="v-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <img src={ContentImg} alt="img" />
              </div>
              <div className="col-md-8">
                <div
                  className="bg-content-img"
                  style={{ width: "80px", height: "20px" }}
                >
                  <img src={bg} alt="img" />
                </div>
                <div className="spacer-single"></div>
                <h6 className="limited">
                  <span
                    style={{
                      fontSize: "24px",
                      letterSpacing: "2px",
                      color: "#ffda59",
                    }}
                  >
                    Limited: 10,001 Unique NFTs on Solana
                  </span>
                </h6>
                <div className=""></div>
                <h1 className="introducing">
                  Introducing{" "}
                  <span
                    className="pixel-font"
                    style={{ color: "#00FFAB", fontFamily: "bangers" }}
                  >
                    galaxy panda.
                  </span>
                </h1>
                <p style={{ color: "#fcd95a" }} className="generated-p">
                  10,001 uniquely generated, cute and collectible pixel art
                  galaxy panda with proof of ownership stored on the Solana
                  blockchain.
                </p>
                <div className="spacer-10"></div>
                <div id="mint-button">
                  <a style={{ color: "#fff" }} href="" className="roadmap">
                    Sale Opening Soon
                  </a>
                  <p style={{ color: "#fcd95a" }}>
                    Our mint is over, our team is busy working on our roadmap.
                    <br />
                    However, if you're looking to launch your own NFTs join the
                    Solana community - we can help.{" "}
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfP8BLwy8RuHyuHbpmWi367AdVdhH63ifyajboUnRxoo_kEfw/viewform"
                      style={{ color: "#fff" }}
                    >
                      Click here to find out more.
                    </a>
                  </p>
                  <div className="mb-sm-30"></div>
                </div>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="container" style={{ width: "40% !importent" }}>
                <div className="content" style={{ backgroundColor: "#1F273E" }}>
                  <h1 className="text-center pt-5 pb-3"> Mint Galaxy Panda</h1>
                  <div className="container">
                    <div className="row">

                      
                      <div className="col-lg-6 col-md-6 col-sm-12" style={{marginLeft:"70px"}}>
                        {!wallet ? (
                          <ConnectButton>Connect Wallet</ConnectButton>
                        ) : (
                          <MintButton
                            disabled={isSoldOut || isMinting || !isActive}
                            onClick={onMint}
                            variant="contained"
                          >
                            {isSoldOut ? (
                              "SOLD OUT"
                            ) : isActive ? (
                              isMinting ? (
                                <CircularProgress />
                              ) : (
                                "MINT"
                              )
                            ) : (
                              <Countdown
                                date={startDate}
                                onMount={({ completed }) =>
                                  completed && setIsActive(true)
                                }
                                onComplete={() => setIsActive(true)}
                                renderer={renderCounter}
                              />
                            )}
                          </MintButton>
                        )}
                      </div>

                      {wallet && (
                        <h5
                          style={{
                            textAlign: "center",
                            color: "white",
                            marginTop: "10px",
                          }}
                        >
                          Item sold: {itemsRedeemed}/{itemsAvailable}
                        </h5>
                      )}
                    </div>
                    <div className="mint">
                      <p> 0.01 SOL per Mint</p>
                    </div>
                    <div className="counter">
                      <div className="counter-icon">
                        <i className="fa fa-compass" aria-hidden="true"></i>
                        <h2 className="">Galax Drop Countdown</h2>
                      </div>
                    </div>
                    <div className="timer-counter">
                      <div id="timer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </>
  );
};

const renderCounter = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <CounterText>
      {hours} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Home;
