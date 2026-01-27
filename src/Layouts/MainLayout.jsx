import { Outlet } from "react-router-dom";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import VerticalNavbar from "@/Components/Layout/VerticalNavbar";

export default function MainLayout() {
	return (
		<div className="w-full h-screen bg-[#100422] overflow-y-auto scrollbar-hide">
			<VerticalNavbar />
			<div className="flex min-h-full flex-col">
				<Navbar />

				<main className="flex-1 w-full">
					<Outlet />
				</main>

				<Footer />
			</div>
		</div>
	);
}
