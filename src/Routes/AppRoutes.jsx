import { Routes, Route } from "react-router-dom";
import MainLayout from "@/Layouts/MainLayout";

// ===== Main Pages =====
import HomePage from "@/Pages/HomePage";
import AboutPage from "@/Pages/AboutPage";
import ArtistPage from "@/Pages/ArtistPage";
import CommunityPage from "@/Pages/CommunityPage";
import ConcertPage from "@/Pages/ConcertPage";
import MediaPage from "@/Pages/MediaPage";
import PressKitPage from "@/Pages/PressKitPage";
import ShopPage from "@/Pages/ShopPage";
import NotFoundPage from "@/Pages/NotFoundPage";

// ===== Community Pages =====
import OpenMic from "@/Pages/Community/OpenMic";
import SofaSession from "@/Pages/Community/SofaSession";
import ArtistSignUp from "@/Components/Concerts/ArtistSignUp";
import Volunteer2026 from "@/Components/Concerts/Volunteer2026";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ===== Main Layout ===== */}
      <Route element={<MainLayout />}>
        {/* Home */}
        <Route index element={<HomePage />} />

        {/* Static Pages */}
        <Route path="about" element={<AboutPage />} />
        <Route path="artist" element={<ArtistPage />} />
        <Route path="concerts" element={<ConcertPage />} />
        <Route path="media" element={<MediaPage />} />
        <Route path="press-kit" element={<PressKitPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="artistsignup" element={<ArtistSignUp />} />
        <Route path="volunteersignup" element={<Volunteer2026 />} />

        {/* Community */}
        <Route path="community">
          <Route index element={<CommunityPage />} />
          <Route path="openmic" element={<OpenMic />} />
          <Route path="sofa-session" element={<SofaSession />} />
        </Route>

        {/* 404 - Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
