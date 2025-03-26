import { useState } from "react";

function AddToCard({ showAdToCard, hideAddToCard }) {
	const [plus, setplus] = useState(0);
	return (
		<div
			className={
				showAdToCard +
				` h-full right-0 top-0 w-full bg-[rgba(0,0,0,0.5)] transition-all duration-500 ease-in-out z-10`
			}
		>
			<div className="flex h-full transition-all duration-500 ease-in-out">
				<div
					className="w-full transition-all duration-500 ease-in-out"
					onClick={hideAddToCard}
				></div>
				<div className="flex flex-col items-center justify-center bg-amber-50 w-[521px] h-full px-[64px] transition-all duration-500 ease-in-out">
					<img
						className="w-[230px] h-[230px] max-h-[230px] max-w-[230px]"
						src="default-add-to-card.png"
						alt="default-add-to-card"
					/>
					<span className="text-[600] text-[17px] mt-[28px]">
						Blueberry Toasts and smoothie
					</span>
					<span className="text-center text-[11px] w-[394px] max-w-[394px] text-[#000000B0] mt-[17px] [line-height:27px]">
						Just have a single bite of this Black Forest pastry and it will all
						make a proper sense to you. The kick of cherry and rich chocolate of
						this super light, airy pastry will definitely make you feel "wow".
						The perfect combination of cherry cream and rich chocolate can
						provide the ultimate fulfillment to your dessert craving.
					</span>
					<div className="flex justify-between w-full mt-[41px] text-[17px] text-[600]">
						<span>NGN 2000.00</span>
						<span>10-20 Mins</span>
						<span>10 Pcs Avail</span>
					</div>
					<div className="flex justify-between w-full mt-[51px]">
						<div className="flex gap-[13px] items-center">
							<button
								className="bg-[#F3C294] w-[48px] h-[60px]"
								onClick={() => setplus(plus > 0 ? plus - 1 : 0)}
							>
								-
							</button>
							<span>{plus}</span>
							<button
								className="bg-[#F3C294] w-[48px] h-[60px]"
								onClick={() => setplus(plus + 1)}
							>
								+
							</button>
						</div>
						<button className="bg-[#00302E] text-white w-[144px] h-[60px]">
							Add to Card
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddToCard;
