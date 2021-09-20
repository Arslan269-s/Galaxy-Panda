import React from 'react';
import social from "../images/discord.png";
import socialTeligram from "../images/teligaram.png";
import socialTwittwer from "../images/twitter .png";
import instagram from "../images/instagaram.png";
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";

export const Arriving = () => {
    return (
        <section id="section-intro" style={{backgroundColor: "#161D30",}}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-4 col-md-6 mb-sm-30">
							<div className="feature-box f-boxed style-3" style={{backgroundColor: "#1E2443",}}>
								<div className="text">
									<h4 className="" style={{color: "#fff",}}>10,000 Ever Minted</h4>
									<p className="" style={{color: "#929BD0",}}>Each Galaxy panda is unique &
										algorithmically generated & minted on the blockchain.<br />We are only
										ever generating 10k completely unique Galaxy panda. There will be no further
										generations.</p>
								</div>
								<i className="wm icon_wallet"></i>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-sm-30">
							<div className="feature-box f-boxed style-3" style={{backgroundColor: "#1E2443",}}>
								<div className="text">
									<h4 className="" style={{color: "#fff",}}> are arriving</h4>
									<p className="" style={{color: "#929BD0",}}>Get in on the ground floor by
										collecting the exclusive Galaxy panda NFTs. See our roadmap for our future
										plans.
										</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-sm-30">
							<div className="feature-box f-boxed style-3" style={{backgroundColor: "#1E2443",}}>
								<div className="text">
									<h4 className="" style={{color: "#fff",}}>Join the Galaxy Panda Train</h4>
									<p className="" style={{color: "#929BD0",}}>Get the latest updates & get exclusive
										air drops & contests.</p>
									<div className="">
										<a href="https://discord.gg/KUr9vvdQKy" target="_blank"
											style={{display: "inline-block", verticalAlign: "top",}}>
											<img src={social} alt="" style={{width: "64px",}} />
										</a>
										<a href="https://t.me/SolanaSouls" target="_blank"
											style={{display: "inline-block", verticalAlign: "top",}}>
											<img src={socialTeligram} alt=""style={{width: "64px",}} />
										</a>
										<a href="https://twitter.com/GalaxyPandasNFT" target="_blank"
											style={{display: "inline-block", verticalAlign: "top",}}>
											<img src={socialTwittwer} alt="" style={{width: "64px",}} />
										</a>
										<a href="https://twitter.com/GalaxyPandasNFT" target="_blank"
											style={{display: "inline-block", verticalAlign: "top",}}>
											<img src={instagram} alt="" style={{width: "64px",}} />
										</a>
										<a href="https://twitter.com/GalaxyPandasNFT" target="_blank"
											style={{display: "inline-block", verticalAlign: "top",}}>
											<img src={facebook} alt="" style={{width: "64px",}} />
										</a>
										<a href="https://twitter.com/GalaxyPandasNFT" target="_blank"
											style={{display: "inline-block", verticalAlign: "top",}}>
											<img src={youtube} alt="" style={{width: "64px",}} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    )
}
