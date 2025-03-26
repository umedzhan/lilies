import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();

		const res = await fetch("https://m6024.myxvest.ru/lilies/login.php", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});

		const data = await res.json();
		if (data.token) {
			localStorage.setItem("token", data.token);
			console.log(data);
		} else {
			console.log(data);
		}
	};

	const [type, settype] = useState("password");
	const [show, setshow] = useState("show");

	const checktype = () => {
		if (type == "text") {
			settype("password");
			setshow("show");
		}
		if (type == "password") {
			settype("text");
			setshow("hide");
		}
	};

	return (
		<div className="w-full">
			<div className="flex">
				<img className="h-screen" src="login-img.png" />
				<div className="flex flex-col w-full pl-[81px] pr-[107px]">
					<div className="text-[27px] font-semibold pt-[278px] text-center">
						Welcome Back!
					</div>
					<form onSubmit={handleLogin} className="flex flex-col gap-12">
						<input
							type="email"
							placeholder="Your Email address"
							onChange={(e) => setemail(e.target.value)}
							className="w-full h-[71px] px-[25px] py-[19px] rounded border-1 border-[rgba(251,221,187,0.49)] mt-[61px]"
						/>
						<div className="relative">
							<input
								type={type}
								placeholder="Your Password"
								onChange={(e) => setpassword(e.target.value)}
								className="w-full h-[71px] px-[25px] py-[19px] rounded border-1 border-[rgba(251,221,187,0.49)]"
							/>
							<p
								onClick={checktype}
								className="absolute top-6 right-[30px] text-[#00302e]"
							>
								{show}
							</p>
						</div>
						<input
							type="submit"
							className="w-full h-[71px] px-[25px] py-[19px] rounded bg-[#00302e] text-[#fbddbb] cursor-pointer"
							value="Login"
						/>
					</form>
					<div className="flex justify-between items-center mt-[34px]">
						<Link
							to="/signup"
							className="font-[14px] text-[rgba(0,48,46,0.91)]"
						>
							Create an accound
						</Link>
						<a href="#" className="font-[14px] text-[rgba(0,48,46,0.91)]">
							Forgot Password
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
