import React from "react";
import { GiCook } from "react-icons/gi";
import { FaPen } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Jobs = () => {
	return (
		<div className="flex flex-col justify-start items-center w-full h-[60vh] font-mono bg-yellow-200">
			<div className="flex flex-col items-center justify-center h-1/2 w-full mt-6 ">
				<GiCook className="text-8xl text-yellow-900" />
				<div className="text-2xl mt-2 font-semibold text-yellow-700">
					Jobs at Eatofy!
				</div>
			</div>
			<form className="flex flex-col  h-1/2 w-full mt-5">
				<div className="flex flex-row items-center justify-center h-2/3 w-full ">
					<div className="flex flex-col items-center justify-center w-1/2 gap-4">
						<div className="flex items-center justify-center h-8 w-[70%] ">
							<div className="flex items-center justify-center border-b-2 border-l-2 border-black h-8 w-20 shadow-lg">
								<IoMdPerson className="text-xl" />
							</div>
							<div className="h-8 bg-black w-[60vw] shadow-lg">
								<input
									type="text"
									placeholder="FIRST NAME*"
									className="h-8 w-full px-3 bg-yellow-100 border-b-2 border-black border-r-2 border-l-2 outline-none"
								/>
							</div>
						</div>
						<div className="flex items-center justify-center h-8 w-[70%]">
							<div className="flex items-center justify-center border-b-2 border-l-2 border-black h-8 w-20 shadow-lg">
								<IoMdPerson className="text-xl" />
							</div>
							<div className="h-8 bg-black w-[60vw] shadow-lg">
								<input
									type="text"
									placeholder="LAST NAME*"
									className="h-8 w-full px-3 bg-yellow-100 border-b-2 border-black border-r-2 border-l-2 outline-none"
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center w-1/2 gap-4 ">
						<div className="flex items-center justify-center h-8 w-[70%]">
							<div className="flex items-center justify-center border-b-2 border-l-2 border-black h-8 w-20 shadow-lg">
								<MdEmail className="text-xl" />
							</div>
							<div className="h-8 bg-black w-[60vw] shadow-lg">
								<input
									type="text"
									placeholder="EMAIL*"
									className="h-8 w-full px-3 bg-yellow-100 border-b-2 border-black border-r-2 border-l-2 outline-none"
								/>
							</div>
						</div>
						<div className="flex items-center justify-center h-8 w-[70%]">
							<div className="flex items-center justify-center border-b-2 border-l-2 border-black h-8 w-20 shadow-lg">
								<FaPhoneAlt />
							</div>
							<div className="h-8 bg-black w-[60vw] shadow-lg">
								<input
									type="text"
									placeholder="PHONE*"
									className="h-8 w-full px-3 bg-yellow-100 border-b-2 border-black border-r-2 border-l-2 outline-none"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center h-8 mt-4">
					<div className="flex items-center justify-center border-b-2 border-l-2 border-black h-8 w-11 shadow-lg">
						<FaPen />
					</div>
					<div className="h-8 bg-black w-[60vw] shadow-lg">
						<input
							type="text"
							placeholder="MESSAGE*"
							className="h-8 w-full px-3 bg-yellow-100 border-b-2 border-black border-r-2 border-l-2 outline-none"
						/>
					</div>
				</div>
			</form>
			<div className="flex items-center justify-center h-1/4 w-full mb-5 mt-3 ">
				<button className="flex justify-center items-center text-lg p-2 bg-yellow-500 text-white font-semibold hover:scale-110 shadow-sm shadow-black w-48 h-10">
					Submit
				</button>
			</div>
		</div>
	);
};

export default Jobs;
