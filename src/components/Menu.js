import React from "react";
import food from "../image/food1.jpg";

const Menu = () => {
	return (
		<div className="flex flex-col justify-center items-center h-[50vh] font-mono">
			<div className="flex items-center justify-center gap-4 text-3xl text-[#746d23] h-1/3 w-full">
				From Our<strong>Menu</strong>
			</div>
			<div className="flex flex-row h-5/6 w-[40vw]  gap-1 mt-4">
				{/* <div className="w-full border"></div> */}
				<div className="w-1/3 border">
					<div className="flex items-center justify-center h-5/6">
						<img src={food} alt="" className="h-[30vh] w-[20vw]" />
					</div>
					<div className="flex justify-center mt-3">Lorem ipsum</div>
				</div>
				<div className="w-1/3 border">
					<div className="flex items-center justify-center h-5/6">
						<img src={food} alt="" className="h-[30vh] w-[20vw]" />
					</div>
					<div className="flex justify-center mt-3">Lorem ipsum</div>
				</div>
				<div className="w-1/3 border">
					<div className="flex items-center justify-center h-5/6">
						<img src={food} alt="" className="h-[30vh] w-[20vw]" />
					</div>
					<div className="flex justify-center mt-3 ">Lorem ipsum</div>
				</div>
			</div>
			<div className="flex justify-center items-center w-full h-1/6">
				{/* <button className="flex justify-center items-center text-lg p-2 bg-yellow-500 text-white font-semibold hover:scale-110 shadow-sm shadow-black w-48 h-10">
					Subscribe Now
				</button> */}
			</div>
		</div>
	);
};

export default Menu;
