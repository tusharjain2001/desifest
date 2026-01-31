import React from 'react'
import ontariologo from '../../Assets/COMPANIES/ontariologo.svg'
import mississaugalogo from '../../Assets/COMPANIES/mississaugalogo.svg'
import factorlogo from '../../Assets/COMPANIES/factorlogo.svg'
import ontariowhitelogo from '../../Assets/COMPANIES/ontariowhitelogo.svg'
import ontarioartslogo from '../../Assets/COMPANIES/ontarioartslogo.svg'
import canadalogo from '../../Assets/COMPANIES/canadalogo.svg'
import canadianheritagelogo from '../../Assets/COMPANIES/canadianheritagelogo.svg'

const logos = [
    ontariologo,
    mississaugalogo,
    factorlogo,
    ontariowhitelogo,
    ontarioartslogo,
    canadalogo,
    canadianheritagelogo,
]

const OfficialLogos = () => {
    return (
        <section className="w-full bg-gradient-to-b from-[#0b021a] to-[#140326] py-20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <h2 className="oswaldd mb-16 text-center text-3xl tracking-widest text-white md:text-4xl">
                    OUR OFFICIAL LOGOS
                </h2>

                {/* Logos Grid */}
                <div className="grid grid-cols-2  gap-y-12 md:grid-cols-4 md:gap-y-16">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img
                                src={logo}
                                alt="Official logo"
                                className="object-contain opacity-90"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OfficialLogos
