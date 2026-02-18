import React from 'react'
import Digit from '../Animations/Digit'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className="z-30 mt-20 flex min-h-screen flex-col gap-16 px-6 py-12 md:flex-row md:justify-between md:px-20 md:py-16">
            {/* LEFT SECTION */}
            <div className="flex flex-1 flex-col">
                {/* Header Navigation */}
                <div className="dm-sans-400 flex gap-4">
                    <button
                        onClick={() => navigate('/sponsorship')}
                        className="bg-neon-yellow oswald-500 bg-midnight-purple border-2 px-3 py-2 text-sm text-black uppercase md:text-3xl"
                    >
                        Sponsorship
                    </button>
                </div>

                {/* HERO TEXT */}
                <div className="flex flex-col">
                    <div className="flex items-end gap-3 leading-none">
                        <div className="oswaldd text-soft-lavender text-8xl leading-none font-medium md:text-9xl">
                            THE
                        </div>

                        <div className="dm-sans-400 text-sm text-white md:text-lg">
                            <div>TWO DAYS.</div>
                            <div>ONE COMMUNITY.</div>
                            <div>COUNTLESS MOMENTS.</div>
                        </div>
                    </div>

                    <div className="special-gothic-one-regular text-neon-yellow flex h-32 items-center overflow-hidden text-8xl leading-none font-black sm:text-7xl md:text-[120px]">
                        <Digit value={2} delay={0} />
                        <Digit value={0} delay={0.1} />
                        <Digit value={2} delay={0.2} />
                        <Digit value={6} delay={0.3} />
                    </div>

                    <div className="oswaldd text-soft-lavender text-8xl leading-none font-medium sm:text-6xl md:text-[120px]">
                        CONCERT
                    </div>

                    <p className="dm-sans-400 max-w-xl text-sm font-light tracking-wide text-white sm:text-lg md:text-xl">
                        LIVE MUSIC. SHARED ENERGY. REAL CONNECTION
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-row gap-4 pt-6">
                        <button
                            onClick={() => navigate('/artistsignup')}
                            className="oswaldd bg-neon-yellow px-6 py-4 text-lg font-medium text-black hover:cursor-pointer hover:bg-lime-300 md:px-8 md:text-3xl"
                        >
                            ARTIST SIGN UP
                        </button>

                        <button
                            onClick={() => navigate('/volunteersignup')}
                            className="oswaldd border-neon-yellow text-neon-yellow bg-midnight-purple border-2 px-6 py-4 text-lg font-medium hover:cursor-pointer hover:bg-[#26193A80] md:px-8 md:text-3xl"
                        >
                            VOLUNTEER
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="dm-sans-400 flex flex-1 flex-col gap-10 text-white">
                {/* Day 01 */}
                <div className="border-b border-white pb-10">
                    <p className="dm-sans-500 mb-2 text-xl font-semibold tracking-wider md:text-xl">
                        DAY 01
                    </p>

                    <h3 className="special-gothic-one-regular mb-3 text-5xl font-extrabold md:text-5xl">
                        JUNE 19
                    </h3>

                    <p className="mb-6 text-xl md:text-lg">7:00PM – 10:00PM</p>

                    <h4 className="oswaldd mb-2 text-2xl font-medium tracking-wide md:text-2xl">
                        EVENING SHOWCASE
                    </h4>

                    <p className="max-w-md text-xl font-thin text-white md:text-xl">
                        19+ International artist for a ticketed event
                    </p>
                </div>

                {/* Day 02 */}
                <div className="border-b border-white pb-10">
                    <p className="dm-sans-500 mb-2 text-xl font-semibold tracking-wider md:text-xl">
                        DAY 02
                    </p>

                    <h3 className="special-gothic-one-regular mb-3 text-5xl font-extrabold md:text-5xl">
                        JUNE 20
                    </h3>

                    <p className="mb-6 text-xl md:text-lg">5:00PM – 10:00PM</p>

                    <h4 className="oswaldd mb-2 text-2xl font-medium tracking-wide md:text-2xl">
                        FOOD VENDORS, BRAND ACTIVATION
                    </h4>

                    <p className="max-w-md text-xl font-thin text-white md:text-xl">
                        8 to 10 fusion and multicultural performances, focusing on HipHop, Dance and
                        Pop music
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
