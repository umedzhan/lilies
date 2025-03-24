import { Route, Routes } from "react-router-dom";
import { Home } from "./src/home";
import { Login } from "./src/login";
import { Signup } from "./src/signup";
import { Dashboard } from "./src/dashboard";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	);
};
