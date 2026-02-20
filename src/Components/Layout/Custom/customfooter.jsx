import React from 'react'

import logo from '../../../Assets/COMMON/logon.png'
import logoinvert from '@/Assets/COMMON/logoinvert.png'

import insta from '../../../Assets/COMMON/insta.svg'
import facebook from '../../../Assets/COMMON/facebook.svg'
import youtube from '../../../Assets/COMMON/youtube.svg'

import ontariologo from '../../../Assets/COMPANIES/ontariologo.svg'
import ontariologoinvert from '../../../Assets/COMPANIES/ontariologoinvert.svg'

import mississaugalogo from '../../../Assets/COMPANIES/mississaugalogo.svg'
import mississaugalogoinvert from '../../../Assets/COMPANIES/mississaugalogoinvert.svg'

import factorlogo from '../../../Assets/COMPANIES/factorlogo.svg'
import factorlogoinvert from '../../../Assets/COMPANIES/factorlogoinvert.svg'

import ontariowhitelogo from '../../../Assets/COMPANIES/ontariowhitelogo.svg'
import ontariowhitelogoinvert from '../../../Assets/COMPANIES/ontariowhitelogoinvert.svg'

import ontarioartslogo from '../../../Assets/COMPANIES/ontarioartslogo.svg'
import ontarioartslogoinvert from '../../../Assets/COMPANIES/ontarioartslogoinvert.svg'

import canadalogo from '../../../Assets/COMPANIES/canadalogo.svg'
import canadalogoinvert from '../../../Assets/COMPANIES/canadalogoinvert.svg'

import canadianheritagelogo from '../../../Assets/COMPANIES/canadianheritagelogo.svg'
import canadianheritagelogoinvert from '../../../Assets/COMPANIES/canadianheritagelogoinvert.svg'
import OmnisendNewsletter from '../OmnisendNewsletter'
const Footer = ({ footerColor, textcolour }) => {
    const finalColor = textcolour || 'white'
    const useInvert = !!textcolour

    const socials = [
        { name: 'instagram', icon: insta },
        { name: 'facebook', icon: facebook },
        { name: 'youtube', icon: youtube },
    ]

    const sponsors = [
        { normal: ontariologo, invert: ontariologoinvert },
        { normal: mississaugalogo, invert: mississaugalogoinvert },
        { normal: factorlogo, invert: factorlogoinvert },
        { normal: ontariowhitelogo, invert: ontariowhitelogoinvert },
        { normal: ontarioartslogo, invert: ontarioartslogoinvert },
        { normal: canadalogo, invert: canadalogoinvert },
        { normal: canadianheritagelogo, invert: canadianheritagelogoinvert },
    ]

    return (
        <footer
            className="z-0 flex w-full flex-col p-8 md:py-10 md:pl-28"
            style={{
                backgroundColor: footerColor,
                color: finalColor,
            }}
        >
            {/* TOP */}
            <div className="flex items-center justify-between gap-4">
                <img src={useInvert ? logoinvert : logo} alt="DesiFest" className="h-14" />

                <div className="flex gap-3">
                    {socials.map(({ name, icon }) => (
                        <a key={name} href="#">
                            <img
                                src={icon}
                                alt={name}
                                style={{
                                    filter: useInvert ? 'invert(1)' : 'none',
                                    transition: '0.3s ease',
                                }}
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* NEWSLETTER */}
            <div className="flex flex-col gap-6 py-10">
                <OmnisendNewsletter />
            </div>

            {/* SPONSORS */}
            <div className="flex flex-wrap items-center justify-between py-10">
                {sponsors.map((item, index) => (
                    <img
                        key={index}
                        src={useInvert ? item.invert : item.normal}
                        alt="Sponsor"
                        className="object-contain"
                    />
                ))}
            </div>

            {/* BOTTOM */}
            <div
                className="mt-12 flex flex-col justify-between pt-6 text-xs opacity-70 md:flex-row"
                style={{
                    borderTop: `1px solid ${finalColor}`,
                }}
            >
                <p>Desifest© 2025. All rights reserved with the owner.</p>

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
