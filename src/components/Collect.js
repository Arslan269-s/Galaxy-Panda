import React from 'react';
import change from "../images/changing-soul-sol.gif";

export const Collect = () => {
    return (
        <section id="section-stats" className="pt60 pb60" style={{backgroundColor: "#161D30",}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <span className="p-title invert" style={{backgroundColor: "#550D8F",}}>Collectible & Unique</span><br/>
                    <h2 style={{color: "#fff",}}>Cryptographically Signed & Staked with Proof of Ownership</h2>
                    <div className="small-border bg-color-2 sm-left" style={{backgroundColor: "#550D8F",}}></div>
                    <p style={{color: "#929BD0",}}>Algorithmically generated, unique, cute and collectibles NFTs.</p>
                </div>
                <div className="col-md-3">
                    <div className="nft_coll" style={{margin: "15px",}}>
                        <div className="nft_wrap">
                            <a href="#"><img src={change} alt=""
                                    style={{width: "100%", display: "block",}} /></a>
                        </div>
                        <div className="nft_coll_info" style={{paddingTop: "20px",}}>
                            <a href="#">
                                <h4>Totally Unique</h4>
                            </a>
                            <span>10k Ever Mints</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb30" >
                            <div className="de_count">
                                <h3 style={{color: "#fff",}}><span className="timer" data-to="10000" data-speed="3000" >10000</span></h3>
                                <h5 className="id-color" style={{color: "#fff",}}>Ever Minted</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb30" >
                            <div className="de_count">
                                <h3 style={{color: "#fff",}}><span className="timer" data-to="100" data-speed="3000">100</span></h3>
                                <h5 className="id-color" style={{color: "#fff",}}>Unique Attributes</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb30" >
                            <div className="de_count">
                                <h3 style={{color: "#fff",}}><span className="timer" data-to="2" data-speed="3000">2</span>m+</h3>
                                <h5 className="id-color" style={{color: "#fff",}}>Possible Combinations</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb30" >
                            <div className="de_count">
                                <h3 style={{color: "#fff",}}><span className="timer" data-to="100" data-speed="3000">100</span>%</h3>
                                <h5 className="id-color" style={{color: "#fff",}}>Sold Out</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
