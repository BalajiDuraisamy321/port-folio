import React from "react";

import codepen from "../img/facebook-logo-circle-white.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import email from "../img/58485698e0bb315b0f7675a8.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
					        <a
								href=""
								target="_blank"
								rel="noopener noreferrer">
								<img src={email} alt="" style={{borderRadius:1+"%",
								height: 30 + "px",
								width: 30+ "px",
								marginLeft:1+"px"}}/>
							</a>
							    duraisamybalaji321@gmail.com
							
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							
							<a
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
								href="https://www.linkedin.com/in/BalajiDuraisamy321"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} alt=""/>
							</a>
							
						</div>
					</div>
					<h5 className="pt-4">Balaji Duraisamy &copy; 2019</h5>
				</div>
			</div>
		);
	}
}

export default Footer;
