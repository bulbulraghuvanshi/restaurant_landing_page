import React from "react";
import food from "../image/food1.jpg";
import food2 from "../image/food2.jpg";
import food3 from "../image/food3.jpg";

const Menu = () => {
	return (
		<div className="flex flex-col justify-center items-center h-[60vh] font-mono">
			<div className="flex items-center justify-center gap-4 text-3xl text-[#746d23] h-1/3 w-full ">
				From Our<strong>Menu</strong>
			</div>
			<div className="flex h-5/6 w-[40vw] overflow-x-auto gap-3 mt-4 mb-2">
				{/* <div className="w-full border"></div> */}
				<div className="w-1/3 border cursor-pointer">
					<div className="flex w-full items-center justify-center h-5/6">
						<img
							src={food}
							alt=""
							className="h-[30vh] w-[20vw] object-cover object "
						/>
					</div>
					<div className="flex justify-center mt-3">Chinese</div>
				</div>
				<div className="w-1/3 border cursor-pointer">
					<div className="flex w-full items-center justify-center h-5/6">
						<img
							src={food2}
							alt=""
							className="h-[30vh] w-[20vw] object-cover"
						/>
					</div>
					<div className="flex justify-center mt-3">Indian</div>
				</div>
				<div className="w-1/3 border cursor-pointer">
					<div className="flex w-full items-center justify-center h-5/6">
						<img
							src={food3}
							alt=""
							className="h-[30vh] w-[20vw] object-cover"
						/>
					</div>
					<div className="flex justify-center mt-3 ">Italian</div>
				</div>
			</div>
			<div className="flex justify-center items-center w-full h-1/6 my-3 mb-5">
				<button className="flex justify-center items-center text-md  text-black hover:scale-110   w-96 h-10">
					View this Week's full Menu >
				</button>
			</div>
		</div>
	);
};

export default Menu;
