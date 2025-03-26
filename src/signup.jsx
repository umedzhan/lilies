import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const navigate = useNavigate();

	const handleSignup = async (e) => {
		e.preventDefault();

		const res = await fetch("https://m6024.myxvest.ru/lilies/register.php", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, password }),
		});

		const data = await res.json();
		console.log(data);

		if (data.ok === true) {
			navigate("/login");
		} else {
			console.log(data);
		}
	};

	const [type, settype] = useState("password");
	const [show, setshow] = useState("show");

	const checktype = () => {
		if (type == "text") {
			settype("password");
			setshow("hide");
		}
		if (type == "password") {
			settype("text");
			setshow("show");
		}
	};

	return (
		<div className="w-full">
			<div className="flex">
				<img className="h-screen" src="login-img.png" />
				<div className="flex flex-col w-full pl-[81px] pr-[107px]">
					<div className="text-[27px] font-semibold pt-[204px] text-center">
						Welcome to Lilies!
					</div>
					<form
						onSubmit={handleSignup}
						className="flex flex-col gap-12 mt-[61px]"
					>
						<input
							type="text"
							placeholder="Your First Name"
							onChange={(e) => setname(e.target.value)}
							className="w-full h-[71px] px-[25px] py-[19px] rounded border-1 border-[rgba(251,221,187,0.49)]"
							required
						/>
						<input
							type="email"
							placeholder="Your Email address"
							onChange={(e) => setemail(e.target.value)}
							className="w-full h-[71px] px-[25px] py-[19px] rounded border-1 border-[rgba(251,221,187,0.49)]"
							required
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
					<div className="flex justify-center items-center mt-[34px] gap-1">
						<span className="font-[14px] text-[rgba(0,48,46,0.91)]">
							Already have an account.
						</span>
						<Link
							to="/login"
							className="text-[14px] font-bold text-[rgba(0,48,46,0.91)]"
						>
							LOGIN
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
