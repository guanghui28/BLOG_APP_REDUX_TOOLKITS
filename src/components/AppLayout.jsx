import { Outlet } from "react-router-dom";
import { Navbar } from "../app/Navbar";

export default function AppLayout() {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
}
