import React from 'react';
import attrImg from "../images/tikio.jpg";

export const Attributs = () => {
    return (
        <section id="section-video" className="pb60" style={{backgroundColor: "#161D30",}}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-4">
							<span className="p-title invert" style={{backgroundColor: "#550D8F",}}>Original Art</span><br/>
							<h2 style={{color: "#fff",}}>Handcrafted Art & Attributes</h2>
							<div className="small-border bg-color-2 sm-left" style={{backgroundColor: "#550D8F",}}></div>
							<p style={{color: "#929BD0",}}>We worked hard to painstakingly create hundreds of different attributes for the Galaxy
								panda
								eco-system! Here's a sneak peak of the behinds the scenes process.</p>
						</div>
						<div className="col-md-5">
							<iframe title="vimeo-player" src="https://www.youtube.com/embed/Lx3zdurREbY"
								style={{width: "100%", height:"270", frameBorder:"0", }}></iframe>
						</div>
						<div className="col-md-3">
							<span className="p-title invert" style={{backgroundColor: "#550D8F",}}>Becomes...</span><br/>
							<img src={attrImg} alt="" style={{maxWidth: "100%"}} />
						</div>
					</div>
				</div>
			</section>
    )
}
