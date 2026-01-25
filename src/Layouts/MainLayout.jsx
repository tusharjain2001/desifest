import { Outlet } from "react-router-dom";
import Navbar from "@/Components/Layout/Navbar";
import VerticalNavbar from "@/Components/Layout/VerticalNavbar";
import Footer from "@/Components/Layout/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex bg-[#100422]">
      <VerticalNavbar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

