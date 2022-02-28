import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
			<a className="navbar-brand text-white" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler text-white"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="justify-content-lg-end collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link text-white" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item ">
						<a className="nav-link text-white" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-white" href="#">
							Service
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-white" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
