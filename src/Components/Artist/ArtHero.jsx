import backgroung from '@/Assets/artist/Hero.png'

const Herosec = ({ bgColor }) => {
    return (
        <section className="relative flex h-screen w-full items-start justify-start overflow-hidden">
            <div className="relative h-full w-full overflow-hidden">
                {/* Background Image */}
                <img
                    src={backgroung}
                    alt="Open Mic Background"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* White Edge Fade Overlay */}
                <div
                    className="pointer-events-none absolute inset-0 backdrop-blur-xs"
                    style={{
                        background: `
       radial-gradient(circle, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 70%, rgb(255, 255, 255) 100%)
      `,
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(to top, #FFFFFF 10%, transparent 45%)`,
                    }}
                />

                {/* Content */}
                <div className="relative z-20 flex w-full flex-col items-center justify-start px-6 py-50 sm:justify-center sm:px-24 sm:py-60">
                    <div className="flex flex-col sm:mt-0 mt-30 items-center text-center">
                        {/* OUR */}
                        <h2 className=" special-gothic-one-regular text-5xl  text-white md:text-6xl">
                            OUR
                        </h2>

                        {/* ARTISTS */}
                        <h1 className=" text-7xl special-gothic-one-regular text-[#D9FF00] uppercase md:text-9xl">
                            ARTISTS
                        </h1>

                        {/* Buttons */}
                        <div className="mt-6 flex gap-4">
                            <button className="bg-[#D9FF00] px-6 py-2 oswald-500 text-2xl font-bold text-black uppercase shadow-md">
                                Featured
                            </button>

                            <button className="bg-white px-6 py-2 oswald-500 text-2xl font-bold text-black uppercase shadow-md">
                                Community
                            </button>
                        </div>

                        {/* Description */}
                        <p className="mt-6 dm-sans-400 text-lg  sm:mt-8 mt-30 tracking-wide text-[#100422] uppercase">
                            LET'S SHOW UP, CONNECT AND <br />
                            GROW PERFORMANCES
                        </p>
                    </div>

                    <div className="absolute top-50 sm:top-14 z-[-10] flex h-80 w-80 items-center justify-center  sm:h-120 sm:w-120">
                        {/* Concentric rings (inner → outer, opacity decreases) */}
                        <div className="absolute inset-24.75 rounded-full border border-white/90" />
                        <div className="absolute inset-16.5 rounded-full border border-white/70" />
                        <div className="absolute inset-9.25 rounded-full border border-white/60" />
                        <div className="absolute inset-0 rounded-full border border-white/40" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosec
