import { NavLink } from 'react-router-dom'
import insta from '../../Assets/COMMON/insta.svg'
import facebook from '../../Assets/COMMON/facebook.svg'
import youtube from '../../Assets/COMMON/youtube.svg'
import tiktok from '../../Assets/COMMON/image.png'

const navItems = [
    { label: 'The 2026 Concert', path: '/concerts' },
    { label: 'About', path: '/about' },
    { label: 'Artists', path: '/our-artists' },
    { label: 'Community', path: '/community' },
    { label: 'Media', path: '/media' },
]

export default function VerticalNavbar() {
    return (
        <aside
            className="absolute fixed top-0 left-0 z-90 hidden h-24 w-[99999px] origin-top-left bg-[#2C223C] md:flex"
            style={{ transform: 'rotate(-90deg) translateX(-100%)' }}
        >
            <div className="flex h-full w-full flex-row-reverse items-center gap-2 px-1">
                {/* Navigation */}
                <div className="flex flex-row-reverse items-center gap-2">
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            className="flex h-28 shrink-0 items-center justify-center"
                        >
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `text-xm dm-sans-400 rounded-full border px-2 py-2 text-center tracking-wide transition ${
                                        isActive
                                            ? 'border-neon-yellow text-neon-yellow'
                                            : 'border-white text-white'
                                    } `
                                }
                            >
                                {item.label}
                            </NavLink>
                        </div>
                    ))}
                </div>

                {/* Social Icons (below nav) */}
                <div className="text-soft-lavender flex flex-row-reverse items-center gap-2">
                    <a
                        href="https://www.facebook.com/desiFEST"
                        className="rotate-90 opacity-70 transition hover:opacity-100"
                    >
                        <img src={facebook} alt="Facebook" className="h-10" />
                    </a>

                    <a
                        href="https://www.instagram.com/desifestmusic/"
                        className="rotate-90 opacity-70 transition hover:opacity-100"
                    >
                        <img src={insta} alt="Instagram" className="h-10" />
                    </a>

                    <a
                        href="https://www.youtube.com/@desifestmusic/videos"
                        className="rotate-90 opacity-70 transition hover:opacity-100"
                    >
                        <img src={youtube} alt="YouTube" className="h-10" />
                    </a>
                    <a
                        href="https://www.tiktok.com/@desifest"
                        className="rotate-90 opacity-70 transition hover:opacity-100"
                    >
                        <img src={tiktok} alt="TikTok" className="h-10 rounded-full border-2 border-black p-2 invert" />
                    </a>
                </div>
            </div>
        </aside>
    )
}
