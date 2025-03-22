export const Signup = () => {
	return (
		<div className="w-full">
			<div className="flex">
				<img className="h-screen" src="login-img.png" />
				<div className="flex flex-col w-full pl-[81px] pr-[107px]">
					<div className="text-[27px] font-semibold pt-[204px] text-center">
						Welcome to Lilies!
					</div>
					<form className="flex flex-col gap-12 mt-[61px]">
						<input
							type="text"
							placeholder="Your First Name"
							className="w-full h-[71px] px-[25px] py-[19px] rounded border-1 border-[rgba(251,221,187,0.49)]"
							required
						/>
						<input
							type="email"
							placeholder="Your Email address"
							className="w-full h-[71px] px-[25px] py-[19px] rounded border-1 border-[rgba(251,221,187,0.49)]"
							required
						/>
						<input
							type="password"
							placeholder="Your Password"
							className="w-full h-[71px] px-[25px] py-[19px] rounded border-1 border-[rgba(251,221,187,0.49)]"
							required
						/>
						<input
							type="submit"
							className="w-full h-[71px] px-[25px] py-[19px] rounded bg-[#00302e] text-[#fbddbb] cursor-pointer"
							value="Login"
						/>
					</form>
					<div className="flex justify-center items-center mt-[34px] gap-1">
						<span className="font-[14px] text-[rgba(0,48,46,0.91)]">
							Already have an account.
						</span>
						<a
							href="/login"
							className="text-[14px] font-bold text-[rgba(0,48,46,0.91)]"
						>
							LOGIN
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
