import { useState } from "react";

function Card({ Rasm = "burger-meal.png", Click = "() => {}" }) {
	return (
		<div className="flex flex-col justify-center items-center border-[#00302E24] border-[1px] max-w-[240px] max-h-[307px] w-[240px] h-[307px] rounded">
			<img src={Rasm} alt="rasm" className="max-w-[90px] max-h-[90px]" />
			<div
				className="flex flex-col items-center justify-center"
				onClick={Click}
			>
				<div className="font-semibold text-[17px] mt-[13px]">
					Stir Fry Pasta
				</div>
				<div className="text-[11px] max-w-[172px] text-[#000000B0] text-center mt-1">
					The in-house pasta and chicken by chef Moose
				</div>
			</div>
			<div className="flex justify-between mt-[22px] w-full px-[29px]">
				<div className="font-bold text-[13px] text-[#00302E]">N 1,000,00</div>
				<div
					className="font-medium text-[13px] text-[#06e775]"
					onClick={() => {
						let nechi = parseInt(localStorage.getItem("card"));
						localStorage.setItem("card", nechi + 1);
					}}
				>
					Add to Card
				</div>
			</div>
		</div>
	);
}

export default Card;
