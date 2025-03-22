export const Home = () => {
	return (
		<div className="w-full h-full font-arial bg-[#00302e] text-white">
			<div className="flex px-[98px] pt-[59px] text-[17px]">
				<div className="flex gap-[22.52px]">
					<img className="w-[57.47px] h-[67px]" src="lilies-logo.png" />
					<h1 className="text-[36px] text-4xl font-bold pt-[19px]">Lilies</h1>
				</div>
				<div className="flex justify-end flex-1 items-center">
					<div className="flex gap-[45px] items-center">
						<a className="font-medium text-[#fbddbb]" href="/">
							Home
						</a>
						<a className="font-medium" href="/login">
							Login
						</a>
						<a
							className=" font-medium bg-[#e2b887] rounded px-[38px] py-[10px]"
							href="/signup"
						>
							Sign Up
						</a>
					</div>
				</div>
			</div>
			<div className="mt-[161px] flex pl-[98px] pr-[136px]">
				<div className="w-full flex flex-col gap-[21px]">
					<div className="font-medium text-[64px] pt-[74px] [line-height:77px]">
						Order <span className="text-[#e2b887]">food</span> anytime,
						<br />
						anywhere
					</div>
					<div className="font-normal text-[18px] [line-height:33px]">
						Browse from our list of specials to place your order and have food
						<br />
						delivered to you in no time. Affordable, tasty and fast!
					</div>
					<div className="flex gap-[12px]">
						<img className="h-[50px]" src="app-store.png" />
						<img className="h-[50px]" src="google-play.png" />
					</div>
				</div>
				<div className="flex justify-end ">
					<img
						className="w-100 h-100 max-w-100 max-h-100"
						src="bon-vivant-qom5MPOER-I-unsplash 1.png"
					/>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center pt-[180px] gap-[35px]">
				<span className="font-bold text-[36px]">Special Meals of the Day</span>
				<span className="font-normal text-[18px] text-center">
					Check our sepecials of the day and get discounts on all our meals
					<br /> and swift delivery to what ever location within Ilorin.
				</span>
			</div>
			<div className="flex pt-[96px] pl-[131px] pr-[96px] justify-between text-center">
				<div className="flex flex-col">
					<img className="w-[250px] h-[250px]" src="stir-fry-pasta.png" />
					<span className="font-bold text-[24px] text-[#fbddbb] mt-[35px]">
						Stir Fry Pasta
					</span>
					<span className="font-normal font-[18px] [line-height:33px] mt-[14px]">
						Stir fry pasta yada yada yada
						<br />
						because of Sesan
					</span>
				</div>
				<div className="flex flex-col">
					<img className="w-[250px] h-[250px]" src="meat-balls.png" />
					<span className="font-bold text-[24px] text-[#fbddbb] mt-[35px]">
						Meat Balls
					</span>
					<span className="font-normal font-[18px] [line-height:33px] mt-[14px]">
						Stir fry pasta yada yada yada
						<br />
						because of Sesan
					</span>
				</div>
				<div className="flex flex-col">
					<img className="w-[250px] h-[250px]" src="burger-meal.png" />
					<span className="font-bold text-[24px] text-[#fbddbb] mt-[35px]">
						Burger Meal
					</span>
					<span className="font-normal font-[18px] [line-height:33px] mt-[14px]">
						Stir fry pasta yada yada yada
						<br />
						because of Sesan
					</span>
				</div>
			</div>
			<div className="flex pt-[268px] pl-[128px] pb-[201px] pr-[110px] items-center">
				<div className="flex flex-col gap-[32px] w-full">
					<div className="text-[#fbddbb] font-bold text-[36px]">
						Get notified when we update!
					</div>
					<div className="">
						Get notified when we add new items to our specials menu,
						<br />
						update our price list of have promos!
					</div>
				</div>
				<div className="flex gap-2">
					<input
						type="text"
						placeholder="gregphilips@gmail.com"
						className="w-[400px] h-[50px] bg-[#f7f7f7] rounded p-[15px] text-black placeholder:text-[#b2b2b2] fonr-normal text-[18px] outline-none"
					/>
					<button className="w-[200px] h-[50px] bg-[#fbddbb] rounded text-black">
						Subscribe
					</button>
				</div>
			</div>
			<footer className="flex flex-col bg-[#0b0d17] px-[165px] w-full">
				<div className="flex flex items-center justify-between pt-[64px] w-full pb-[64px]">
					<div className="flex flex-col gap-6">
						<span className="font-bold text-[18px]">Company</span>
						<div className="flex flex-col gap-3 text-[14px]">
							<span>About Us</span>
							<span>Careers</span>
							<span>Contact Us</span>
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<span className="font-bold text-[18px]">Support</span>
						<div className="flex flex-col gap-3 text-[14px]">
							<span>Help</span>
							<span>Privacy Policy</span>
							<span>Terms of Use</span>
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<span className="font-bold text-[18px]">Legal</span>
						<div className="flex flex-col gap-3 text-[14px]">
							<span>Cookie Policy</span>
							<span>Terms of Service</span>
							<span>Dispute Resolution</span>
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<span className="font-bold text-[18px]">Install App</span>
						<div className="flex flex-col gap-4">
							<img className="w-[162px]" src="google-play.png" />
							<img className="w-[162px]" src="app-store.png" />
						</div>
					</div>
				</div>
				<hr className="mx-[-165px] h-[1px] border-t border-[rgba(255,255,255,0.1)]" />
				<div className="flex justify-between py-[24px] px-[180px]">
					<div className="text-[14px]">© 2021 LILIES, All rights reserved</div>
					<div className="flex gap-6">
						<img src="instagram-logo.png" />
						<img src="twitter-logo.png" />
						<img src="youtube-logo.png" />
					</div>
				</div>
			</footer>
		</div>
	);
};
