import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Menu from "./components/Menu";
import Customer from "./components/Customer";
import Jobs from "./components/Jobs";

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
				<Jobs />
			</div>
			<div>
				<Customer />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
