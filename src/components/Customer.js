import React from "react";
import p1 from "../image/p1.jpg";
import p2 from "../image/p2.jpg";
import p3 from "../image/p3.jpg";

const Customer = () => {
	return (
		<div
			className="flex flex-col justify-start items-center w-full h-[50vh] font-mono "
			id="people">
			<div className="flex gap-4 h-1/4 justify-center items-center text-3xl text-[#413d17] capitalize mt-4">
				Hear from our <strong>Customers</strong>
			</div>
			<div className="flex h-3/4 w-[65vw] mt-2 text-[#5e5923]">
				<div className="flex flex-col  w-1/3 mx-10 ">
					<div className="flex justify-center items-start h-1/3">
						<img
							src={p1}
							alt=""
							className="h-24 mt-4 object-cover w-24 rounded-full"
						/>
					</div>
					<div className="flex mt-10 h-2/3 text-center text-sm font-semibold">
						"I absolutely love Eatofy! The app is very user-friendly."
						<br />
						<br /> ~Kartik
					</div>
				</div>
				<div className="flex flex-col  w-1/3 mx-10">
					<div className="flex justify-center items-start h-1/3">
						<img
							src={p3}
							alt=""
							className="h-24 mt-4 object-cover w-24 rounded-full"
						/>
					</div>
					<div className="flex mt-10 h-2/3 text-center text-sm font-semibold">
						"Eatofy has revolutionized the way I experience dining."
						<br />
						<br /> ~Neha
					</div>
				</div>
				<div className="flex flex-col  w-1/3 mx-10">
					<div className="flex justify-center items-start h-1/3">
						<img
							src={p2}
							alt=""
							className="h-24 mt-4 w-24 object-cover rounded-full"
						/>
					</div>
					<div className="flex mt-10 h-2/3 text-center text-sm font-semibold">
						"Eatofy is just Wowwww !! I just love it."
						<br />
						<br /> ~Vikas
					</div>
				</div>
			</div>
		</div>
	);
};

export default Customer;
