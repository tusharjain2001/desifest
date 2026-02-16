import arrow from '@/Assets/home/animation/image.png'
import { useEffect, useRef } from 'react'
// IMAGES

import img2 from '@/Assets/sofa_session/sofasessionsecondsection.svg'
import bg from '@/Assets/sofa_session/sofasessionsecondsectionbg.svg'

const ArtistCard = ({ image, title, description }) => {
    return (
        <div className="group relative flex h-full cursor-pointer flex-col justify-between bg-gradient-to-b from-[#AC48FF] to-[#541FDF] p-6 transition-all duration-500 ease-out hover:bg-[radial-gradient(circle_at_top,_#FFFFFF_0%,_#DDFE08_40%,_#AC48FF_100%)]">
            {/* IMAGE */}

            <div className="mb-4 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-52 w-full origin-left object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
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
        <section className="relative w-full overflow-x-hidden overflow-y-clip bg-[#AC48FF] py-16 lg:py-32">
            <div className="md:px-6 md:pl-40">
                {/* DESKTOP BG */}
                <img
                    src={bg}
                    className="pointer-events-none absolute -bottom-10 hidden h-200 lg:block"
                />

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
                <div className="relative h-100">
                    <img
                        src={bg}
                        className="pointer-events-none absolute left-10 scale-150 md:hidden"
                    />
                </div>
            </div>
        </section>
    )
}

export default SecondSection
