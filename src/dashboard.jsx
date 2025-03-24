import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./components/sideBar";
import Card from "./components/card";

export const Dashboard = () => {
	return (
		<div className="ml-[320px]">
			<SideBar />
			<div className="flex flex-col w-full p-[68px] gap-[53px]">
				<div className="flex justify-between">
					<div className="flex flex-col gap-1">
						<span className="font-semibold text-[23px]">
							Good morning, Oghenevwede!
						</span>
						<span className="text-[14px] text-[#000000B0]">
							What delicious meal are you craving today?
						</span>
					</div>
					<div className="w-[50px] h-[50px]">
						<img src="dashboard-profile-photo.png" alt="user" />
					</div>
				</div>
				<div className="flex flex-wrap gap-[30px]">
					<Card Rasm="burger-meal.png" />
					<Card Rasm="stir-fry-pasta.png" />
					<Card Rasm="burger-meal.png" />
					<Card Rasm="stir-fry-pasta.png" />
					<Card Rasm="burger-meal.png" />
					<Card Rasm="stir-fry-pasta.png" />
				</div>
			</div>
		</div>
	);
};
