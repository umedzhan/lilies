import { Route, Routes } from "react-router-dom";
import { Home } from "./src/home";
import { Login } from "./src/login";
import { Signup } from "./src/signup";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
		</Routes>
	);
};
