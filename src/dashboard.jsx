import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./components/sideBar";
import Card from "./components/card";

export const Dashboard = () => {
	return (
		<div className="ml-[320px]">
			<SideBar />
			<Card Rasm="burger-meal.png" />
			<Card Rasm="stir-fry-pasta.png" />
		</div>
	);
};
