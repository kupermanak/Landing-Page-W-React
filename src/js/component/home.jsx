import React from "react";
import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Body />
			<Footer />
		</div>
	);
};

export default Home;
