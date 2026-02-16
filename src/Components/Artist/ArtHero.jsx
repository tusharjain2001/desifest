import backgroung from '@/Assets/artist/Hero.png'

const Herosec = ({ bgColor }) => {
    return (
        <section className="relative flex min-h-screen w-full items-start justify-start overflow-hidden">
            <div className="relative h-full w-full overflow-hidden">
                {/* Background Image */}
                <img
                    src={backgroung}
                    alt="Open Mic Background"
                    className="absolute inset-0 h-full w-full scale-105 object-cover"
                />

                {/* White Edge Fade Overlay */}
                <div
                    className="pointer-events-none absolute inset-0 "
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
                    <div className="mt-30 flex flex-col items-center text-center sm:mt-0">
                        {/* OUR */}
                        <h2 className="special-gothic-one-regular text-5xl text-white md:text-6xl">
                            OUR
                        </h2>

                        {/* ARTISTS */}
                        <h1 className="special-gothic-one-regular text-7xl text-[#D9FF00] uppercase md:text-9xl">
                            ARTISTS
                        </h1>

                        {/* Buttons */}
                        <div className="mt-6 flex gap-4">
                            <button className="oswald-500 bg-[#D9FF00] px-6 py-2 text-2xl font-bold text-black uppercase shadow-md">
                                Featured
                            </button>

                            <button className="oswald-500 bg-white px-6 py-2 text-2xl font-bold text-black uppercase shadow-md">
                                Community
                            </button>
                        </div>

                        {/* Description */}
                        <p className="dm-sans-400 mt-6 mt-30 text-lg tracking-wide text-[#100422] uppercase sm:mt-8">
                            LET'S SHOW UP, CONNECT AND <br />
                            GROW PERFORMANCES
                        </p>
                    </div>

                   
                </div>
            </div>
        </section>
    )
}

export default Herosec
