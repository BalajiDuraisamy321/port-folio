import React from "react";
import layers from "../img/layers.png";
import cogwheel from "../img/cogwheel.png";
import pen from "../img/pen.png";
import browser from "../img/browser.png";
import myImage from "../img/myImage.png";
import PropTypes from "prop-types";

export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}>
					About
				</h1>
				<div className="row mt-5">
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
						<img src={layers} alt=""/>
						<h4>Responsive</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
						<img src={pen} alt=""/>
						<h4>Design</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						<img src={cogwheel} alt=""/>
						<h4>Performance</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						<img src={browser} alt=""/>
						<h4>Agile</h4>
					</div>
				</div>

				<div className="row" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
						<img
							className={"img-fluid " + this.props.fadeIn}
							src="https://lh3.googleusercontent.com/lZnGPyCxXWQNBWMXmspRgFlzmt1Sz1QGwdwMXNoIdEuJ4c7ex2AJH6LYwgqtM7t9Wf2a0EzcHRSfR-5iZYFpjYX86IiEEEu94sCQN6lgsJHMIq0-RbWawUs8or8bSQ7HgKda8gdphruKx4Aq52rGizlU2dGlFet9mec3onm7Er092eqWAq_roZYDgKN4kFoh-VmtJH5DDJ77bZf9m7C88ZDTqKnHX-CXNEbKZ5hPp7PndFdwionArgsmZ3f2i_rrDIf72KNIjlAq3CCMO7-K1fMNAgadOQpJKx9u1OWLWDbSz9hgzJ7as2uUN3ls5_6pOjgY9vpwZrIyQehJlI1byH7kuBqKdJv6F2WR-CvR0hHMBzrPB3qgvtGXWM_jAzbDQDRUhWiwHdJ6fcWO_UeadeenwyXxgbIHG6dHiE7QoUgyHESkIdXY7oLuMxrqmSEMmwgXenleNflGBoqjnHcBQo6LvX0Ec_iRdDrXJDouSBLPGbIEhxIa91a0BJj0wOHJsGfFQKvuvZzwskQJjeXGm3nIbxp0RPclT97xTcUsmBTyss6usChc8ET7EN_ThwnPLz0ZBUvujnzEtvad09rqdqUDpywhj9cLooSKLhCQQZAkegCQxUTOArqY0Xdg90rHDw0v51zHk178wxdASgTQBr0xn-FaUHtwEERk1Eo6I2b4is-dftquPZ0=w476-h669-no"
							alt=""
							style={{
								borderRadius:  45 +"%" +0 + "%",
								height: 250 + "px",
								width: 250 + "px"
							}}
						/>
						<p className={"mytext pt-3 " + this.props.fadeIn}>
							I love to transform ideas into reality using code. I
							am passionate about using Javascript and animations
							to create awesome user experiences.
						</p>
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-6 " +
							this.props.tada
						}>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								HTML5
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS3
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Javascript
							</div>
						</div>
						
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								ReactJS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								NodeJs
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 70 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Bootstrap
							</div>
						</div>
						
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								JQuery
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
