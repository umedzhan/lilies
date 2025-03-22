import { Route, Routes } from "react-router-dom";
import { Home } from "./src/home";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
};
