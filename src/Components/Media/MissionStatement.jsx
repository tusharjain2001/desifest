import React from 'react'

export default function MissionSection() {
    return (
        <section className="w-full px-4 py-20 text-white">
            <div className="mx-auto max-w-6xl text-center">
                {/* MISSION LABEL */}
                <p className="mb-6 text-[18px] tracking-[0.3em] uppercase">Mission Statement</p>

                {/* HEADING */}
                <h1 className="oswaldd mb-6 text-5xl leading-tight md:text-[80px]">
                    {/* Mobile layout */}
                    <span className="block md:hidden">
                        Where South
                        <br />
                        <span className="text-light-lavender">Asian</span> Artists
                        <br />
                        Meet the <span className="text-light-lavender">World</span>
                    </span>

                    {/* Desktop layout */}
                    <span className="hidden md:block">
                        Where <span className="text-light-lavender">South Asian</span>
                        <br />
                        Artists Meet the <span className="text-light-lavender">World</span>
                    </span>
                </h1>

                {/* DESCRIPTION */}
                <p className="dm-sans-400 mx-auto mb-16 max-w-3xl text-sm text-gray-300 md:text-base">
                    To become the leading global platform for South Asian Arts & Culture. We aim to
                    connect artists, creators and audiences from the diverse South Asian diaspora,
                    fostering a profound sense of belonging and mutual appreciation.
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
                    <div className="flex flex-col items-start border-l-2 border-white pl-4 text-left">
                        <div className="dm-sans-400 text-[24px] text-white">FACEBOOK FANS</div>
                        <div className="text-neon-yellow special-gothic-one-regular text-[48px] leading-none">
                            13K+
                        </div>
                    </div>

                    <div className="flex flex-col items-start border-l-2 border-white pl-4 text-left">
                        <div className="dm-sans-400 text-[24px] text-white">INSTAGRAM FANS</div>
                        <div className="text-neon-yellow special-gothic-one-regular text-[48px] leading-none">
                            28K+
                        </div>
                    </div>

                    <div className="flex flex-col items-start border-l-2 border-white pl-4 text-left">
                        <div className="dm-sans-400 text-[24px] text-white">TOTAL IMPRESSIONS</div>
                        <div className="text-neon-yellow special-gothic-one-regular text-[48px] leading-none">
                            45M+
                        </div>
                    </div>

                    <div className="flex flex-col items-start border-l-2 border-white pl-4">
                        <div className="dm-sans-400 text-[24px] text-white">
                            FESTIVAL ATTENDANCE
                        </div>
                        <div className="text-neon-yellow special-gothic-one-regular text-[48px] leading-none">
                            65K+
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
