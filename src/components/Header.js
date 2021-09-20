import React from 'react'
import logoImg from "../images/galaxy_panda.png";

export const Header = () => {
    return (
        <header className="transparent">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="de-flex sm-pt10">
							<div className="de-flex-col">
								<div className="de-flex-col">

									<div id="logo">
										<a href="index.html">
											<img alt="" src={logoImg}	
												style={{width: "90px", height: "90px", display:"inline-block", marginRight: "-5px", position: "relative", top: "2px", marginRight: "4px", marginBottom: "5px"}} />
											<span className="pixel-font"
												style={{color: "#FFF",fontSize: "36px",display: "inline-block",verticalAlign: "middle",letterSpacing: "1px",fontFamily: "bangers", color: "#00FFAB",}}>galaxy
												panda</span>
										</a>
									</div>

								</div>
							</div>
							<div className="de-flex-col header-col-mid">

								<ul id="mainmenu">
									<li>
										<a href="index.html">Home<span></span></a>
									</li>
									<li>
										<a href="roadmap.html">Roadmap<span></span></a>
									</li>
									<li>
										<a href="rankings.html">Rarity Ranking<span></span></a>
									</li>
									<li>
										<a href="attributes.html">Attributes<span></span></a>
									</li>
									<li>
										<a href="index.html#section-stats">Mint Stats<span></span></a>
									</li>
									<li>
										<a href="index.html#section-faq">FAQ<span></span></a>
									</li>
								</ul>
								<div className="menu_side_area">
									<a href="#" className="btn-main" style={{display: "inline-block",backgroundColor:"#550D8F",}}>Connect Wallet</a>
									<span className="menu-btn"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
    )
}
