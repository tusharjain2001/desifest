import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import VerticalNavbar from "@/Components/Layout/VerticalNavbar";

export default function MainLayout() {
	const scrollRef = useRef(null);
	const [scrollY, setScrollY] = useState(0);

	// listen to scroll
	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;

		const onScroll = () => {
			setScrollY(el.scrollTop);
		};

		el.addEventListener("scroll", onScroll, { passive: true });
		onScroll(); // initial value

		return () => el.removeEventListener("scroll", onScroll);
	}, []);



	return (
		<div
			ref={scrollRef}
			className="w-full h-screen bg-[#100422] overflow-y-auto scrollbar-hide"
		>
			<VerticalNavbar />

			<div className="flex min-h-full flex-col">
				<Navbar />

				{/* 👇 PASS CONTEXT TO ALL ROUTES */}
				<main className="flex-1 w-full">
					<Outlet context={{ scrollRef, scrollY }} />
				</main>

				<Footer />
			</div>
		</div>
	);
}
