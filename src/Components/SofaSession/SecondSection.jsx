import arrow from '@/Assets/home/animation/image.png'
import { useEffect, useRef } from 'react'
import image1 from '@/Assets/home/background_2.png'
import image2 from '@/Assets/openmic/image copy 4.png'
// IMAGES

import img2 from '@/Assets/sofa_session/sofasessionsecondsection.svg'

const ArtistCard = ({ image, title, description }) => {
    return (
        <div className="group relative flex h-full cursor-pointer flex-col justify-between bg-gradient-to-b from-[#AC48FF] to-[#541FDF] p-6 transition-all duration-500 ease-out hover:bg-[radial-gradient(circle_at_top,_#FFFFFF_0%,_#DDFE08_40%,_#AC48FF_100%)]">
            {/* IMAGE */}

            <div className="mb-4 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-60 w-3/5 object-cover transition-all duration-500 ease-out group-hover:w-4/5"
                />
            </div>

            {/* TEXT CONTENT */}
            <div className="flex flex-col gap-3">
                <h3 className="dm-sans-400 text-[32px] leading-tight text-white uppercase group-hover:text-black sm:text-[48px]">
                    {title}
                </h3>

                <p className="dm-sans-400 text-[18px] leading-relaxed text-white/90 group-hover:text-black">
                    {description}
                </p>
            </div>

            {/* ARROW */}
            <div className="right-6 bottom-6 mt-10 justify-end self-end">
                <img
                    src={arrow}
                    alt=""
                    className="w-8 brightness-0 invert transition-all duration-500 ease-out group-hover:-rotate-45 group-hover:invert-0"
                />
            </div>
        </div>
    )
}

const SecondSection = ({ scrollY }) => {
    const featuredRef = useRef(null)
    const communityRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        const y = scrollY ?? 0

        if (featuredRef.current) {
            featuredRef.current.style.transform = `translateY(-${y * 0.15}px)`
        }

        if (communityRef.current) {
            communityRef.current.style.transform = `translateY(-${y * 0.1}px)`
        }

        if (imageRef.current) {
            imageRef.current.style.transform = `translateY(-${y * 0.05}px)`
        }
    }, [scrollY])

    return (
        <section className="relative w-full overflow-x-hidden overflow-y-clip bg-[#AC48FF]">
            <div className="md:px-6 md:pl-40">
                {/* DESKTOP BG */}

                {/* GRID CONTAINER (UNCHANGED) */}
                <div className="relative z-30 mx-auto grid w-full max-w-full grid-cols-1 gap-16 px-6 pt-20 lg:grid-cols-3">
                    {/* FIRST CARD – TOP */}
                    <div ref={featuredRef} className="self-start">
                        <ArtistCard
                            image={img2}
                            title="The beginning"
                            description="Born during the pandemic, DESIFEST Sofa Sessions brought our community together when live performances stopped."
                        />
                    </div>
                    {/* SECOND CARD – LOWER */}
                    <div ref={communityRef} className="self-start sm:mt-20">
                        <ArtistCard
                            image={img2}
                            title="Artist Platform"
                            description="What began as a simple sofa evolved into a hub for genuine conversations, talent showcases, and the inspiring stories of South Asian artists. We celebrate their journeys and creative paths beyond the spotlight."
                        />
                    </div>
                    {/* THIRD CARD – TOP */}
                    <div className="relative self-start">
                        <ArtistCard
                            image={img2}
                            title="Community & Culture"
                            description="This initiative focuses on building community, celebrating culture, and keeping the conversation going. Even when the music pauses, the stories continue to resonate."
                        />

                        {/* BG attached to 3rd card */}
                    </div>{' '}
                </div>
            </div>
            {/* bottom image */}
            <div className="ml-24 flex w-full items-center justify-center sm:pb-40">
                <div className="relative flex min-h-screen w-full items-center justify-center">
                    {/* Gradient Blob */}
                    <div className="absolute h-60 w-60 -translate-x-28 translate-y-10 sm:h-80 sm:w-80 sm:-translate-x-16 sm:translate-y-20">
                        {/* Circle Background */}
                        <div className="absolute inset-0 -rotate-30 rounded-full bg-[linear-gradient(180deg,_#DDFE08_0%,_#541FDF_100%)]"></div>

                        {/* Circular Text */}
                        <div className="jersey absolute inset-0 flex -translate-y-8 rotate-0 items-center justify-center sm:-translate-x-4 sm:translate-y-0">
                            {'LET’S LIVE!!'.split('').map((char, index) => {
                                const total = 13
                                const spread = 180
                                const rotation = spread / 2 - (spread / total) * index

                                return (
                                    <span
                                        key={index}
                                        className="absolute top-1/2 left-1/2 origin-top text-5xl font-bold tracking-wide text-white sm:text-8xl sm:tracking-widest"
                                        style={{
                                            transform: `rotate(${rotation}deg) rotate(${rotation / 44}deg)  translateY(160px) `,
                                        }}
                                    >
                                        {char}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    {/* Left Circle */}
                    <div className="absolute z-20 h-80 w-80 -translate-x-46 -translate-y-40 overflow-hidden rounded-full border-8 border-white sm:h-140 sm:w-140 sm:-translate-x-60 sm:-translate-y-64">
                        <img src={image1} alt="Live Band" className="h-full w-full object-cover" />
                    </div>
                    {/* Right Circle */}
                    <div className="absolute z-10 h-80 w-80 translate-x-16 -translate-y-4 overflow-hidden rounded-full sm:h-140 sm:w-140 sm:translate-x-60 sm:-translate-y-36">
                        <img
                            src={image2}
                            alt="Live Singer"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondSection
