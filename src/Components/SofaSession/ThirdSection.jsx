import React from 'react'

const ThirdSection = () => {
    return (
        <section className="flex h-screen w-full bg-[#AC48FF] items-center bg-cover bg-center pl-4 md:pl-80">
            {/* content */}
            <div className="flex flex-col items-start justify-center leading-none">
                <div className="jersey -mb-4 text-[112px] leading-none text-[#D9FF00] md:-mb-10 md:text-[230px]">
                    SOFA
                </div>
                <div className="jersey text-[112px] leading-none text-[#D9FF00] md:text-[230px]">
                    SESSIONS
                </div>

                <div className="dm-sans-400 text-[20px] leading-none tracking-widest text-white md:text-[32px]">
                    MUSIC, UP CLOSE AND PERSONAL
                </div>
            </div>
        </section>
    )
}

export default ThirdSection
