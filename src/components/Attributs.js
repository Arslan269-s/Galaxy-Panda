import React from 'react';
import attrImg from "../images/Fire_sword_img.png";

export const Attributs = () => {
    return (
        <section id="section-video" class="pb60" style={{backgroundColor: "#161D30",}}>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-md-4">
							<span class="p-title invert" style={{backgroundColor: "#550D8F",}}>Original Art</span><br/>
							<h2 style={{color: "#fff",}}>Handcrafted Art & Attributes</h2>
							<div class="small-border bg-color-2 sm-left" style={{backgroundColor: "#550D8F",}}></div>
							<p style={{color: "#929BD0",}}>We worked hard to painstakingly create hundreds of different attributes for the Galaxy
								panda
								eco-system! Here's a sneak peak of the behinds the scenes process.</p>
						</div>
						<div class="col-md-5">
							<iframe title="vimeo-player" src="https://player.vimeo.com/video/597823043?h=e34c93a88e"
								style={{width: "100%", height:"270", frameborder:"0", }}></iframe>
						</div>
						<div class="col-md-3">
							<span class="p-title invert" style={{backgroundColor: "#550D8F",}}>Becomes...</span><br/>
							<img src={attrImg} alt="" style={{maxWidth: "100%"}} />
						</div>
					</div>
				</div>
			</section>
    )
}
