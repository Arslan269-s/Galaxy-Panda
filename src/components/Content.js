import React,{useState} from 'react';
import ContentImg from "../images/galaxy_panda.png";
import bg from "../images/transparent_background_synth_stars.png";

export const Content = () => {
	const [counter,setCounter] = useState(1);
    return (
        <section id="section-hero" aria-label="section" className=""
				style={{background: "linear-gradient(200deg, rgba(165,70,121,1) 0%, rgba(117,64,171,1) 100%)", zIndex: "1",}}>
				<div className="v-center">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-md-4">
							
								<img src={ContentImg}  alt="img"/>
									
							</div>
							<div className="col-md-8">
								<div className="bg-content-img" style={{width: "80px", height: "20px",}}>
								<img src={bg} alt="img"/>
								</div>
								<div className="spacer-single"></div>
								<h6 className="limited"><span style={{fontSize: "24px", letterSpacing: "2px", color: "#ffda59",}}
										
										>Limited: 10,001
										Unique NFTs on Solana</span></h6>
								<div className=""></div>
								<h1 className="introducing">Introducing <span className="pixel-font" style={{color: "#00FFAB",fontFamily: "bangers",}}
										>galaxy
										panda.</span></h1>
								<p style={{color: "#fcd95a",}} className="generated-p">
									10,001 uniquely generated, cute and collectible pixel art galaxy panda
									with
									proof of ownership stored on the Solana blockchain.</p>
								<div className="spacer-10"></div>
								<div id="mint-button">
									<a style={{color: "#fff",}} href="" className="roadmap">
										Sale
										Opening Soon</a>
									<p style={{color: "#fcd95a",}} >Our mint
										is over,  our team is busy working on our roadmap.<br />However, if you're
										looking to launch your own NFTs join the Solana community - we can help. <a
											href="https://docs.google.com/forms/d/e/1FAIpQLSfP8BLwy8RuHyuHbpmWi367AdVdhH63ifyajboUnRxoo_kEfw/viewform"
											style={{color: "#fff",}}>Click here to find
											out more.</a></p>
									<div className="mb-sm-30"></div>
								</div>
							</div>
						</div>
						<form onSubmit={(e)=>e.preventDefault()}>
							<div className="container" style={{width: "40% !importent",}}>
								<div className="content" style={{backgroundColor: "#1F273E",}}>
									<h1 className="text-center pt-5 pb-3"> Mint Galaxy Panda</h1>
									<div className="container">
										<div className="row">	
											<div className="col-lg-6 col-md-6 col-sm-12">
												<div className="button-add">
													<span id="span-1"><button className="minus" onClick={()=>setCounter(counter-1)}>-</button>
														<h2>{counter}</h2><button className="plus" onClick={()=>setCounter(counter+1)}>+</button>
													</span>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12">
												<div className="btn-galaxy">
													<button onClick={()=>alert("Minted")}>Mint</button>
												</div>
											</div>
										</div>
										<div className="mint">
											<p> $? SOL per Mint</p>
										</div>
										<div className="counter">
											<div className="counter-icon"><i className="fa fa-compass" aria-hidden="true"></i>
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
    )
}
