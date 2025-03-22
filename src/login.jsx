export const Login = () => {
	return (
		<div className="w-full">
			<div className="flex">
				<img className="h-screen" src="login-img.png" />
				<div className="flex flex-col w-full pl-[81px] pr-[107px]">
					<div className="text-[27px] font-semibold pt-[278px] text-center">
						Welcome Back!
					</div>
					<form className="flex flex-col gap-12">
						<input
							type="email"
							placeholder="Your Email address"
							className="w-full h-[71px] px-[25px] py-[19px] rounded border-1 border-[rgba(251,221,187,0.49)] mt-[61px]"
						/>
						<input
							type="password"
							placeholder="Your Password"
							className="w-full h-[71px] px-[25px] py-[19px] rounded border-1 border-[rgba(251,221,187,0.49)]"
						/>
						<input
							type="submit"
							className="w-full h-[71px] px-[25px] py-[19px] rounded bg-[#00302e] text-[#fbddbb] cursor-pointer"
							value="Login"
						/>
					</form>
					<div className="flex justify-between items-center mt-[34px]">
						<a href="/signup" className="font-[14px] text-[rgba(0,48,46,0.91)]">
							Create an accound
						</a>
						<a href="#" className="font-[14px] text-[rgba(0,48,46,0.91)]">
							Forgot Password
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
