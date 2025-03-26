import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
import AddToCard from "./components/AddToCard";

export const Dashboard = () => {
	const [showAdToCard, setShowAdToCard] = useState("hidden");
	const [uname, setuname] = useState("");

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			const decodedToken = jwtDecode(token);
			setuname(decodedToken.name);
			console.log(decodedToken);
		} else {
			setuname("");
			console.log("No token found");
		}
	});

	const toggleAddToCard = () => {
		setShowAdToCard(showAdToCard === "hidden" ? "absolute" : "hidden");
	};
	return (
		<div className="ml-[320px]">
			<SideBar />
			<div className="flex flex-col p-[68px] gap-[53px] h-[100vh]">
				<div className="flex justify-between">
					<div className="flex flex-col gap-1">
						<span className="font-semibold text-[23px]">
							Good morning, {uname}!
						</span>
						<span className="text-[14px] text-[#000000B0]">
							What delicious meal are you craving today?
						</span>
					</div>
					<div className="w-[50px] h-[50px]">
						<img src="dashboard-profile-photo.png" alt="user" />
					</div>
				</div>
				<div className="flex flex-wrap gap-[30px] overflow-y-scroll mb-[-68px]">
					{Array.from({ length: 20 }, (_, index) => (
						<Card key={index} Click={toggleAddToCard} />
					))}
				</div>
			</div>
			<AddToCard showAdToCard={showAdToCard} hideAddToCard={toggleAddToCard} />
		</div>
	);
};
