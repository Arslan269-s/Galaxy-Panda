import React from 'react';
import footerImg1 from "../images/discord.png";
import footerImg2 from "../images/teligaram.png";
import footerImg3 from "../images/twitter .png";
import footerImg4 from "../images/social-instagram.jfif";
import footerImg5 from "../images/social_facebook.png";
import footerImg6 from "../images/social_tiktok.png";
import svg from "../images/solana-sol-logo.svg";
import galaxyFooter from "../images/galaxy_panda.png";

export const Footer = () => {
    return (
        <footer style={{backgroundColor: "#272F45",}}>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-1">
                    <div className="widget">
                        <h5 style={{color: "#00FFAB",}}>Galaxy panda</h5>
                        <p>10,000 algorithmically generated, cute and collectible NFTs with proof of ownership
                            stored on the blockchain.</p>
                       
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-1">
                    <div className="widget">
                        <h5 style={{color: "#00FFAB",}}>Resources</h5>
                        <ul>
                            <li><a href="#">Roadmap</a></li>
                            <li><a href="index.html#section-faq">FAQ</a></li>
                            <li><a href="index.html#section-stats">Quick Stats</a></li>
                            <li><a href="#">Mint a Galaxy panda</a></li>
                        </ul>
                        <br />
                        <h5 style={{color: "#00FFAB",}}>Launching your own NFTs?</h5>
                        <ul>
                            <li><a href="https://nftdevs.com/">We can help. Learn more.</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-1">
                    <div className="widget mb-2 pb-0">
                        <h5 style={{color: "#00FFAB",}}>Community</h5>
                        <a href="https://discord.gg/KUr9vvdQKy" target="_blank"
                            style={{display: "inline-block", verticalAlign: "top",}}>
                            <img src={footerImg1} alt="" style={{width: "64px", }}/>
                        </a>
                        <a href="https://t.me/SolanaSouls" target="_blank"
                            style={{display: "inline-block", verticalAlign: "top",}}>
                            <img src={footerImg2} alt="" style={{width: "64px", }}/>
                        </a>
                        <a href="https://twitter.com/GalaxyPandasNFT" target="_blank"
                            style={{display: "inline-block", verticalAlign: "top",}}>
                            <img src={footerImg3} alt="" style={{width: "64px", }}/>
                        </a>
                    </div>
                    <div className="widget-2 mb-2 pb-0">
                        <a href="https://discord.gg/KUr9vvdQKy" target="_blank"
                            style={{display: "inline-block", verticalAlign: "top",}}>
                            <img src={footerImg4} alt=""
                                style={{width: "50px", marginLeft: "10px", borderRadius: "8px", marginTop: "8px",}} />

                        </a>
                        <a href="https://t.me/SolanaSouls" target="_blank"
                            style={{display: "inline-block", verticalAlign: "top",}}>
                            <img src={footerImg5} alt=""
                                style={{width: "50px", marginLeft: "10px", borderRadius: "8px", marginTop: "8px",}} />

                        </a>
                        <a href="https://twitter.com/GalaxyPandasNFT" target="_blank"
                            style={{display: "inline-block", verticalAlign: "top",}}>
                            <img src={footerImg6} alt=""
                                style={{width: "50px", marginLeft: "10px", borderRadius: "8px", marginTop: "8px",}} />

                        </a>
                    </div>

                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <iframe src="https://discord.com/widget?id=836637190259081216&amp;theme=dark" height="300"
                        allowtransparency="true" frameBorder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        style={{width: "100%",}}></iframe>
                </div>
            </div>
        </div>
        <div className="subfooter">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex">
                            <div className="de-flex-col">
                                <a href="index.html">
                                    <img alt="" className="f-logo" src={galaxyFooter}
                                        style={{height: "48px", marginRight: "15px", }}/><span className="copy">&copy; Galaxy
                                        Panda</span>
                                </a>
                                <a href="https://solana.com/"
                                    style={{marginLeft: "30px", position: "relative", top: "-1px",}}>
                                    Built on the <img alt="" src={svg}
                                        style={{width: "24px", display: "inline-block", }}/> blockchain.
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
