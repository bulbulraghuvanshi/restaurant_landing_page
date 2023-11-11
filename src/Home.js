import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Menu from "./components/Menu";

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
				<Work />
			</div>
			<div>
				<Menu />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
