import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidTruck } from "react-icons/bi";
import { GiForkKnifeSpoon } from "react-icons/gi";

const Work = () => {
	return (
		<div className="flex flex-col justify-center items-center h-[50vh] font-mono">
			<div className="flex items-center justify-center gap-4 text-3xl  text-[#746d23]   h-1/3 w-full">
				How It<strong>Works</strong>?
			</div>
			<div className="flex flex-row h-2/3 w-[50vw]">
				<div className="flex flex-col justify-center items-center  w-1/3 capitalize">
					<div className="flex justify-center items-center border border-yellow-500 rounded-full h-20 w-20">
						<FaPenToSquare className="text-3xl" />
					</div>
					<div className=" w-44 text-center mt-5 text-[#746d23]">
						Sign in & Choose from our Weekly Menu
					</div>
				</div>
				<div className="flex flex-col justify-center items-center  w-1/3 capitalize">
					<div className="flex justify-center items-center border border-yellow-500 rounded-full h-20 w-20">
						<BiSolidTruck className="text-3xl" />
					</div>
					<div className=" w-44 text-center mt-5 text-[#747123]">
						Delivery at your doorstep
					</div>
				</div>
				<div className="flex flex-col justify-center items-center  w-1/3 capitalize">
					<div className="flex justify-center items-center border border-yellow-500 rounded-full h-20 w-20">
						<GiForkKnifeSpoon className="text-3xl" />
					</div>
					<div className=" w-44 text-center mt-5 text-[#746d23]">
						Enjoy our delicious food
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center w-full h-1/3">
				<button className="flex justify-center items-center text-lg p-2 bg-yellow-500 text-white font-semibold hover:scale-110 shadow-sm shadow-black w-48 h-10">
					Subscribe Now
				</button>
			</div>
		</div>
	);
};

export default Work;
