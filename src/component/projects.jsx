import React from "react";
import Vmarine from "../img/Screenshot from 2019-10-18 20-46-48.png";
import aguaDeLuz from "../img/Screenshot from 2019-10-18 20-49-09.png";
import todo from "../img/Screenshot from 2019-10-18 21-01-44.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeIn}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"testbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeInRight
								}>
								<div className="overlay">
									<div className="text">
										<h2>C R I Pumps</h2>
									</div>
									<div>
										<button
											id="vmarine-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var marineModal = document.getElementById(
													"vmarine"
												);
												modalBG.style.display = "block";
												marineModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"aguabg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>C R I Pumps 2018</h2>
									</div>
									<div>
										<button
											id="agua-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var aguaModal = document.getElementById(
													"agualuz"
												);
												modalBG.style.display = "block";
												aguaModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"todobg col-12 col-sm-12 col-md-4 " +
									this.props.fadeInRight
								}>
								<div className="overlay">
									<div className="text">
										<h2>Marvel Movie Tickets</h2>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="vmarine" className="modal-card">
						<div className="visual">
							<img src={Vmarine} alt=""/>
						</div>
						<div className="modal-info">
							<h2>CRI PUMPS</h2>
							<div className="modal-description">
								<ul>
									<li>
										Prototype for The responsive static page for creating invitation 
									</li>
									<li>
										Designed with Bootstrap,
										css3 and ReactJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<h4>Comming Soon!</h4>
								<a
									href="https://dazzling-babbage-93eeff.netlify.com"
									target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 600,
										fontSize: 0.7 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"vmarine"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="agualuz" className="modal-card">
						<div className="visual">
							<img src={aguaDeLuz} alt=""/>
						</div>
						<div className="modal-info">
							<h2>C R I pumps 2018</h2>
							<div className="modal-description">
								<ul>
									<li>
										Prototype website to creating static responsive website.
									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap and
										React Js
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://happy-hugle-757c8a.netlify.com"
									target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 600,
										fontSize: 0.7 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var aguaModal = document.getElementById(
											"agualuz"
										);
										modalBG.style.display = "none";
										aguaModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card">
						<div className="visual">
							<img src={todo} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Marvel Movie Tickets</h2>
							<div className="modal-description">
								<ul>
									<li>
										Cenema Tickets for Marvel movies
									</li>
									<li>
										Developed with HTML5, CSS3, JavaScript and Bootstrap.
										
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a href="https://remittent-certifica.000webhostapp.com/cenema_ticket.html" target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 600,
										fontSize: 0.7+ "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
