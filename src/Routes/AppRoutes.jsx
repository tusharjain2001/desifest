import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/Layouts/MainLayout'
import CustomLayout from '@/Layouts/CustomLayout'

// ===== Main Pages =====
import HomePage from '@/Pages/HomePage'
import AboutPage from '@/Pages/AboutPage'
import CommunityPage from '@/Pages/CommunityPage'
import ConcertPage from '@/Pages/ConcertPage'
import MediaPage from '@/Pages/MediaPage'
import PressKitPage from '@/Pages/PressKitPage'
import NotFoundPage from '@/Pages/NotFoundPage'

// ===== Community Pages =====
import OpenMic from '@/Pages/Community/OpenMic'
import SofaSession from '@/Pages/Community/SofaSession'
import OurArtists from '@/Pages/ArtistPage'
// ===== Concerts Pages =====
import ArtistSignUp from '@/Components/Concerts/ArtistSignUp'
import Volunteer2026 from '@/Components/Concerts/Volunteer2026'

import ShopPage from '@/Pages/ShopPage'
export default function AppRoutes() {
    return (
        <Routes>
            {/* ===== Event Layout Routes (Top Level) ===== */}
            <Route element={<CustomLayout footerColor="#022195" />}>
                <Route path="open-mic" element={<OpenMic />} />
            </Route>

            <Route element={<CustomLayout footerColor="#6108AA" />}>
                <Route path="sofa-session" element={<SofaSession />} />
            </Route>

            <Route element={<CustomLayout footerColor="#CEBDE6" />}>
                <Route path="our-artists" element={<OurArtists />} />
            </Route>

            {/* ===== Main Layout ===== */}
            <Route element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="concerts" element={<ConcertPage />} />
                <Route path="media" element={<MediaPage />} />
                <Route path="press-kit" element={<PressKitPage />} />
                <Route path="shop" element={<ShopPage />} />
                <Route path="artistsignup" element={<ArtistSignUp />} />
                <Route path="volunteersignup" element={<Volunteer2026 />} />

                {/* Community only shows CommunityPage */}
                <Route path="community" element={<CommunityPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}
