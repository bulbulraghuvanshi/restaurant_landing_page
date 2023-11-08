import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";

const Navbar = () => {
	return (
		<div className="flex flex-row border h-20 justify-end items-center pr-14 gap-16 text-lg font-mono shadow-xl">
			<div className="flex  w-1/3 h-20 items-center text-5xl font-bold text-yellow-600">
				EATOFY
			</div>
			<a href="">Home</a>
			<a href="">About</a>
			<a href="" className="flex justify-center items-center gap-1">
				<TbDiscount2 />
				Offers
			</a>
			<a href="">Contact Us</a>
			<a href="" className="text-2xl">
				<FaShoppingCart />
			</a>

			<button>Log in</button>
			<button className=" py-1 px-4 rounded-full bg-yellow-500 text-white">
				Sign up
			</button>
		</div>
	);
};

export default Navbar;
