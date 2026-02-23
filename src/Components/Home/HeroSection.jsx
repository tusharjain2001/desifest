import arrow from '@/Assets/home/image.png'
import artist from '@/Assets/home/Artist.png'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate()
    return (
        <>
        {/* desktop */}
            <section className="relative hidden h-220 w-full overflow-hidden pl-5 md:flex">
                {/* RIGHT ARTIST IMAGE */}
                <img
                    src={artist}
                    alt="Artist"
                    className="absolute bottom-0 left-90 h-170 max-h-180 mask-[linear-gradient(to_top,transparent_0%,black_25%,black_100%)] object-contain [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_25%,black_100%)]"
                />

                {/* LEFT TEXT */}
                <div className="h-screen w-full px-6 pt-24 text-white lg:w-2/3">
                    <h1 className="font-[oswald] leading-tight font-medium uppercase">
                        <span className="text-neon-yellow my-4 block text-3xl sm:text-[70px]">
                        Where South asian
                        </span>
                        <span className="text-neon-yellow  block text-5xl sm:text-8xl">
                        culture meets
                        </span>
                        <span className="mt-4 inline-block w-160 bg-white px-2 py-2 text-[44px] text-black md:text-[72px]">
                             the World.
                        </span>
                    </h1>

                    <p className="dm-sans-400 mt-2 text-sm text-gray-300 md:text-xl">
                        Canada’s largest South Asian music and arts festival— <br />
                        uniting generations, genres, and voices on one iconic stage.
                    </p>
                    {/* Anniversary watermark */}
                    <div className="mt-4 font-[oswald] text-[64px] leading-40 text-white/10 uppercase md:text-[246px]">
                        20th
                    </div>
                    <div className="font-[oswald] text-[64px] leading-56 text-white/10 uppercase md:text-[96px]">
                        Anniversary
                    </div>
                </div>
                {/* BOTTOM DECORATIVE ELEMENTS */}
                <div className="h-screen w-full px-6 pt-32 text-white lg:w-1/3">
                    <div className="absolute top-50 right-16 text-right text-white">
                        {/* Background year */}
                        <div className="font-[Oswald] text-[140px] leading-16 font-medium text-white/10 select-none">
                            2026
                        </div>

                        {/* Foreground content */}
                        <div className="relative z-10 mt-4">
                            {/* JUNE 19 – 20 */}
                            <h3 className="special-gothic-one-regular text-[56px] leading-none font-normal tracking-normal text-white uppercase">
                                June 19 – 20
                            </h3>

                            {/* LOCATION */}
                            <p className="dm-sans-400 mt-1 text-[32px] leading-none font-semibold tracking-[-0.04em] text-white/90 uppercase">
                                Sankofa Square, Canada
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 flex h-120 w-120 items-center justify-center">
                        {/* Concentric rings (inner → outer, opacity decreases) */}
                        <div className="absolute inset-24.75 rounded-full border border-white/40" />
                        <div className="absolute inset-16.5 rounded-full border border-white/30" />
                        <div className="absolute inset-8.25 rounded-full border border-white/20" />
                        <div className="absolute inset-0 rounded-full border border-white/10" />

                        {/* Center content */}
                        {/* Center content */}
                        <div className="group relative z-10 flex items-center justify-center">
                            {/* Arrow */}
                            <button
                                onClick={() => navigate('/concerts')}
                                className="relative mt-4 h-29 w-29 transition-all duration-700 ease-out group-hover:-translate-x-16"
                            >
                                <img
                                    src={arrow}
                                    alt="Arrow"
                                    className="brightness-0 invert saturate-[5] sepia filter transition-all duration-500 group-hover:brightness-100 group-hover:invert-0 group-hover:saturate-100 group-hover:sepia-0"
                                />
                            </button>

                            {/* Text */}
                            <div className="absolute left-1/2 ml-4 overflow-hidden">
                                <div className="oswaldd -translate-x-10 transform text-3xl leading-tight tracking-wide text-white uppercase opacity-0 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                                    <div>Explore</div>
                                    <div>Join</div>
                                    <div>Enjoy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* MOBILE HERO */}
            <section className="relative flex h-220 w-full flex-col overflow-x-clip pt-20 pl-2 text-center text-white md:hidden">
                {/* DATE BLOCK */}
                <div className="mb-6">
                    <div className="font-[Oswald] text-[82px] leading-none text-white/10">2026</div>
                    <h3 className="font-['Special_Gothic_Expanded_One'] text-[36px] leading-none uppercase">
                        June 19 – 20
                    </h3>
                    <p className="mt-1 font-['DM_Sans'] text-[20px] tracking-[-0.04em] text-white/90 uppercase">
                        Sankofa Square, Canada
                    </p>
                </div>

                {/* HEADLINE */}
                <h1 className="mb-5 flex w-full flex-col items-start justify-start font-[oswald] leading-tight uppercase">
                    <span className="text-neon-yellow block text-[30px]">Where South asian</span>
                    <span className="text-neon-yellow block text-[46px]">culture meets</span>
                    <span className="mt-3 block bg-white px-4 text-[36px] text-black">
                        Meets the World.
                    </span>
                </h1>

                {/* DESCRIPTION */}
                <p className="dm-sans-400 mb-0 w-full text-start text-[12px] leading-snug text-gray-300">
                    Canada’s largest South Asian music and <br /> arts festival—unifying
                    generations, genres, <br /> and voices on one iconic stage.
                </p>
                <div className="w-full text-start font-[oswald] text-[110px] leading-28 text-white/20 uppercase">
                    20th
                </div>
                <div className="w-full text-start font-[oswald] text-[44px] text-white/20 uppercase">
                    Anniversary
                </div>
                {/* ARTIST IMAGE */}
                <img
                    src={artist}
                    alt="Artist"
                    className="absolute top-32 left-44 h-180 scale-110 mask-[linear-gradient(to_top,transparent_32%,black_41%,black_100%)] object-contain [-webkit-mask-image:linear-gradient(to_top,transparent_32%,black_41%,black_100%)]"
                />

                {/* ARROW + RINGS */}
                <div className="absolute -right-24 bottom-0 z-20 flex h-100 w-100 origin-center scale-[0.75] items-center justify-center">
                    <div className="absolute inset-24.75 rounded-full border border-white/40" />
                    <div className="absolute inset-16.5 rounded-full border border-white/30" />
                    <div className="absolute inset-8.25 rounded-full border border-white/20" />
                    <div className="absolute inset-0 rounded-full border border-white/10" />

                    <div className="relative z-10 flex items-center gap-6">
                        <button
                            className="relative h-20.5 w-20.5 hover:scale-105"
                            onClick={() => navigate('/concerts')}
                        >
                            <img src={arrow} alt="Arrow" />
                        </button>

                        <div className="oswaldd text-[0.95rem] leading-tight tracking-wide text-white uppercase">
                            <div>Explore</div>
                            <div>Join</div>
                            <div>Enjoy</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
