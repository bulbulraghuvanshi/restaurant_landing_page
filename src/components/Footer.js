import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="flex flex-row bg-black w-full h-80 font-mono">
			<div className=" flex flex-col justify-center items-start pl-20 w-1/3  gap-1 ">
				<div className="flex flex-col h-5/6">
					<p className="text-4xl font-semibold text-yellow-500 mt-20">
						GET IN TOUCH
					</p>
					<p className="mt-5 text-yellow-100">Phone: 0234-9988776654</p>
					<a href="" className="text-yellow-100">
						Email: food@eatofy.co.in
					</a>
					<div className="flex mt-6 gap-4">
						<a
							href="https://www.facebook.com/"
							className="text-yellow-100 text-xl">
							<BsFacebook />
						</a>
						<a href="https://twitter.com/" className="text-yellow-100 text-2xl">
							<AiFillTwitterCircle />
						</a>
						<a
							href="https://www.instagram.com/"
							className="text-yellow-100 text-2xl">
							<TiSocialInstagram />
						</a>
					</div>
				</div>
				<div className="flex items-center text-yellow-500 h-1/6">
					Stay Healthy...Stay Safe !!!!
				</div>
			</div>
			<div className="flex flex-col w-1/3">
				<div className="flex flex-col justify-center h-5/6 bg-black ">
					<div className="text-2xl font-semibold text-yellow-500">Location</div>
					<div className="flex  mt-4 gap-20">
						<div className="mr-5 text-yellow-100">
							<p>Varanasi</p>
							<p>Bengaluru</p>
							<p>Jaipur</p>
							<p>Delhi</p>
							<p>Patna</p>
							<p>Hyderabad</p>
						</div>
						<div className="text-yellow-100">
							<p>Chandigarh</p>
							<p>Ahmedabad</p>
							<p>Dehradun</p>
							<p>Bhubaneshwar</p>
							<p>Noida</p>
							<p>Gwalior</p>
						</div>
						<div className="text-yellow-100">
							<p>Indore</p>
							<p>Vadodra</p>
							<p>Mysuru</p>
						</div>
					</div>
				</div>
				<div className="flex items-center h-1/6  gap-1 text-yellow-500">
					<FaCopyright />
					2023 Eatofy Pvt. Ltd.
				</div>
			</div>
			<div className="w-1/3 ">
				<img src="src/image/E-logos.jpeg" alt="" className="h-20 w-20" />
			</div>
		</div>
	);
};

export default Footer;
