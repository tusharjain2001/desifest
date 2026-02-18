import React from 'react'
import logo from '../../Assets/COMMON/logo.svg'
import insta from '../../Assets/COMMON/insta.svg'
import facebook from '../../Assets/COMMON/facebook.svg'
import youtube from '../../Assets/COMMON/youtube.svg'
import ontariologo from '../../Assets/COMPANIES/ontariologo.svg'
import mississaugalogo from '../../Assets/COMPANIES/mississaugalogo.svg'
import factorlogo from '../../Assets/COMPANIES/factorlogo.svg'
import ontariowhitelogo from '../../Assets/COMPANIES/ontariowhitelogo.svg'
import ontarioartslogo from '../../Assets/COMPANIES/ontarioartslogo.svg'
import canadalogo from '../../Assets/COMPANIES/canadalogo.svg'
import canadianheritagelogo from '../../Assets/COMPANIES/canadianheritagelogo.svg'

const Footer = () => {
    const socials = [
        {
            name: 'instagram',
            icon: insta,
            href: 'https://www.instagram.com/desifestmusic/',
        },
        {
            name: 'facebook',
            icon: facebook,
            href: 'https://www.facebook.com/desiFEST',
        },
        {
            name: 'youtube',
            icon: youtube,
            href: 'https://www.youtube.com/@desifestmusic/videos',
        },
    ]

    return (
        <footer className="bg-midnight-purple z-50 flex w-full flex-col p-8 text-white md:py-10 md:pl-28">
            {/* TOP */}
            <div className="flex items-center justify-between gap-4">
                <img src={logo} alt="DesiFest" className="h-14" />

                <div className="flex gap-3">
                    {socials.map(({ name, icon, href }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            className="flex items-center justify-center transition hover:opacity-80"
                        >
                            <img src={icon} alt={name} />
                        </a>
                    ))}
                </div>
            </div>

            {/* NEWSLETTER */}
            <div className="flex flex-col gap-4 py-10 md:flex-row">
                <input
                    type="text"
                    placeholder="Enter Name"
                    className="flex-1 border border-white bg-[#FFFFFF0D] px-4 py-4 text-sm outline-none placeholder:text-xl placeholder:text-[#F5F5F580]"
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    className="flex-1 border border-white bg-[#FFFFFF0D] px-4 py-4 text-sm outline-none placeholder:text-xl placeholder:text-[#F5F5F580]"
                />

                <button className="bg-neon-yellow px-6 py-2 text-lg font-bold whitespace-nowrap text-black uppercase hover:bg-lime-300">
                    Subscribe to our Newsletter
                </button>
            </div>

            {/* NAV */}

            {/* SPONSORS */}
            <div className="flex flex-wrap items-center justify-between py-10">
                {[
                    ontariologo,
                    mississaugalogo,
                    factorlogo,
                    ontariowhitelogo,
                    ontarioartslogo,
                    canadalogo,
                    canadianheritagelogo,
                ].map((logo, index) => (
                    <img key={index} src={logo} alt="Sponsor" className="object-contain" />
                ))}
            </div>

            {/* BOTTOM */}
            <div className="mt-12 flex flex-col justify-between border-t border-[#FEFDFD] pt-6 text-xs opacity-70 md:flex-row">
                <p className="text-[#FEFDFD]">
                    Desifest© 2025. All rights reserved with the owner.
                </p>

                <div className="mt-4 flex gap-6 md:mt-0">
                    {[
                        'Trademark Guidelines',
                        'Privacy Policy',
                        'Copyright Notice',
                        'Terms of Use',
                    ].map((item) => (
                        <a key={item} href="#" className="hover:opacity-100">
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
