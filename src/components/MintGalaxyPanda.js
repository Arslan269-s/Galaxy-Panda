import React from 'react';
import single from "../images/single-buy.png";
// import double from "../images/double.png";

export const MintGalaxyPanda = () => {
    return (
        <section style={{backgroundColor: "#161D30",}}>
				<div className="container">
					<h2 className="" style={{textAlign: "center", display: "block", color: "#fff",}}>Mint a
						Galaxy Panda</h2>
					<p className=""
						style={{textAlign: "center", marginBottom: "30px", display: "block", color: "#848CC0",}}>Mint a Galaxy Panda by
						connecting
						your Sollet or Phantom wallet.</p>
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6 col-sm-12">
							<img src={single} style={{ maxHeight: "300px", width: "300px", margin: "0px auto 20px", display: "block",}} />
							
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 " >
							<div className="pricing-s1 mb30" style={{backgroundColor: "#21273e",}}>
								<div className="top">
									<h2 style={{color: "#fff",}}>Single</h2>
									<p className="plan-tagline" style={{color: "#929BD0",}}>1 Galaxy panda</p>
								</div>
								<div className="mid text-light bg-color" style={{backgroundColor: "#7D3DA9",}}>
									<p className="price">
										<span className="m opt-1">$?</span>
										<span className="month">SOL</span>
									</p>
								</div>
								<div className="bottom">
									<ul style={{textAlign: "center",}}>
										<li style={{color: "#fff",}}><i className="fa fa-check" style={{color: "#7D3DA9",}}></i>1x Galaxy panda Unique NFT</li>
										<li style={{color: "#fff",}}><i className="fa fa-check" style={{color: "#7D3DA9",}}></i>$? SOL per NFT</li>
									</ul>
								</div>
								<div className="action">
									<a href="#" className="btn-main pixel-font pr-3"
										style={{fontSize: "24px", padding: "15px 30px", letterSpacing: "2px", backgroundColor: "#550D8F",}}>Sale Opening Soon</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    )
}
