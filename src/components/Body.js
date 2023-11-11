import React from "react";

const Body = () => {
	return (
		<div
			className="flex flex-col items-start justify-center h-screen text-white text-center"
			id="back">
			<div className="text-6xl w-[600px] mb-4 text-yellow-500 font-semibold">
				Welcome to Eatofy
				<p className="text-2xl mt-6 text-yellow-200">
					Where Every Bite is an Experience!
				</p>
			</div>
			<div className="w-[500px] text-md m-10 text-yellow-100">
				At Eatofy, we are passionate about delivering exceptional culinary
				experiences to our guests. Whether you're a seasoned food enthusiast or
				simply looking for a delightful dining experience, our restaurant is
				your go-to destination.
			</div>
			<button className="flex justify-center rounded-md items-center text-lg p-2 bg-yellow-400 text-yellow-900 font-semibold hover:scale-110 shadow-2xl border-yellow-700 border-4 w-48 h-10 ml-48">
				Learn More >
			</button>
		</div>
	);
};

export default Body;
