import React from "react";

import codepen from "../img/facebook-logo-circle-white.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import instagram from "../img/images.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
					        
							
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							
							<a
							    className="px-3"
								href="https://www.facebook.com/balaji.duraisamy.754"
								target="_blank"
								rel="noopener noreferrer"
								>
								<img className="img-fluid" src={codepen} alt="" style={{borderRadius:1+"%",
								height: 40 + "px",
								width: 40+ "px"}}/>
							</a>
							<a
								className="px-3"
								href="https://github.com/BalajiDuraisamy321"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} alt=""/> 
							</a>
							<a
							    className="px-3"
								href="https://www.linkedin.com/in/BalajiDuraisamy321"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} alt=""/>
							</a>
							<a
							    className="px-3"
								href="https://www.instagram.com/balaji.duraisamy.016"
								target="_blank"
								rel="noopener noreferrer">
								<img src={instagram} alt="" style={{borderRadius:1+"%",
								height: 25 + "px",
								width: 25+ "px",
								}}/>
							</a>
							
						</div>
					</div>
					<h5 className="pt-4">Balaji Duraisamy &copy;  <span style={{fontSize:70 + "%"
								}}>duraisamybalaji321@gmail.com</span></h5>
				</div>
			</div>
		);
	}
}

export default Footer;
