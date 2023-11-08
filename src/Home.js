import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

const Home = () => {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div className="">
				<Body />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
