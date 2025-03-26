import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/icons/home-icon.svg";
import { ReactComponent as ProfileIcon } from "../assets/icons/profile-icon.svg";
import { ReactComponent as OrdersIcon } from "../assets/icons/orders-icon.svg";
import { ReactComponent as Card } from "../assets/icons/card-icon.svg";

function SideBar() {
	return (
		<div className="fixed left-0 h-full max-w-[320px] w-[320px] bg-[#fbfbfb]">
			<div className="flex flex-col h-full gap-[112px]">
				<Link to="/" className="flex gap-[19px] mt-[126px] justify-center">
					<img className="w-[57.47px] h-[67px]" src="lilies-logo.png" />
					<h1 className="text-[36px] text-4xl font-bold pt-[19px]">Lilies</h1>
				</Link>
				<div className="flex flex-col gap-[15px] justify-center px-[25px]">
					<div
						className={`rounded flex gap-[19px] items-center px-[15px] py-[13px] hover:bg-[#cacaca]
							${location.pathname === "/dashboard" ? " bg-[#efefef]" : ""}
						`}
					>
						<HomeIcon className="" />
						<h1 className="text-[17px] font-semibold">Dashboard</h1>
					</div>
					<div
						className={`rounded flex gap-[19px] items-center px-[15px] py-[13px] hover:bg-[#cacaca]
							${location.pathname === "/profile" ? " bg-[#efefef]" : ""}
						`}
					>
						<ProfileIcon
							className={
								location.pathname !== "/profile"
									? "fill-current text-gray-500"
									: ""
							}
						/>
						<h1 className="text-[17px] font-semibold">Your Profile</h1>
					</div>
					<div
						className={`rounded flex gap-[19px] items-center px-[15px] py-[13px] hover:bg-[#cacaca]
							${location.pathname === "/orders" ? " bg-[#efefef]" : ""}
						`}
					>
						<OrdersIcon
							className={
								location.pathname !== "/orders"
									? "fill-current text-gray-500"
									: ""
							}
						/>
						<h1 className="text-[17px] font-semibold">Orders</h1>
					</div>
					<div
						className={`rounded flex gap-[19px] items-center px-[15px] py-[13px] hover:bg-[#cacaca]
							${location.pathname === "/card" ? " bg-[#efefef]" : ""}
						`}
					>
						<Card
							className={
								location.pathname !== "/card"
									? "fill-current text-gray-500"
									: ""
							}
						/>
						<h1 className="text-[17px] font-semibold">Your Card</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
