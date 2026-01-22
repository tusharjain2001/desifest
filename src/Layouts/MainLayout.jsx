import { Outlet } from "react-router-dom";
import Navbar from "@/Components/Layout/Navbar";
import VerticalNavbar from "@/Components/Layout/VerticalNavbar";
import Footer from "@/Components/Layout/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex bg-[#100422]">
      {/* Vertical Left Nav */}
      <VerticalNavbar />

      {/* Main Content */}
      <div className="flex-1 ml-16 flex flex-col">
        <Navbar />

        <main className="flex-1  pt-20">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
