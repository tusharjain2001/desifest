import arrow from '@/Assets/home/animation/image.png'
import { useEffect, useRef } from 'react'
// IMAGES

import img2 from '@/Assets/home/animation/image copy.png'

const ArtistCard = ({ image, title, description }) => {
    return (
        <div className="group relative flex h-full cursor-pointer flex-col justify-between bg-gradient-to-b from-[#AC48FF] to-[#541FDF] p-6 transition-all duration-500 ease-out hover:bg-[radial-gradient(circle_at_top,_#FFFFFF_0%,_#DDFE08_40%,_#AC48FF_100%)]">
            {/* IMAGE */}
            <div className="mb-4 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-52 w-1/2 object-cover grayscale transition-all duration-500 ease-out group-hover:w-full group-hover:grayscale-0"
                />
            </div>

            {/* TEXT CONTENT */}
            <div className="flex flex-col gap-3">
                <h3 className="dm-sans-400 text-[32px] leading-tight text-white uppercase sm:text-[48px]">
                    {title}
                </h3>

                <p className="dm-sans-400 text-[18px] leading-relaxed text-white/90">
                    {description}
                </p>
            </div>

            {/* ARROW */}
            <div className="mt-10 justify-end self-end right-6 bottom-6">
                <img
                    src={arrow}
                    alt=""
                    className="w-8 invert transition-transform duration-500 ease-out group-hover:-rotate-45"
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
        <section className="relative w-full bg-[#AC48FF] py-2 sm:py-32 md:pl-28">
            {/* GRID CONTAINER (UNCHANGED) */}
            <div className="relative z-30 mx-auto grid w-full max-w-full grid-cols-1 gap-16 px-8 pt-28 sm:grid-cols-3">
                {/* FIRST CARD – TOP */}
                <div ref={featuredRef} className="self-start">
                    <ArtistCard
                        image={img2}
                        title="Featured Artists"
                        description="To celebrate and promote South Asian Arts & Culture on a Global Stage, dismantling stereotypes, eradicating bias and combating discrimination to empower individuals in their pursuit of passion."
                    />
                </div>

                {/* SECOND CARD – LOWER */}
                <div ref={communityRef} className="self-start sm:mt-20">
                    <ArtistCard
                        image={img2}
                        title="Community Artists"
                        description="To become the leading global platform for South Asian Arts & Culture. We aim to connect artists, creators and audiences from the diverse South Asian dispora, fostering a profound sense of belonging and mutual appreciation."
                    />
                </div>

                {/* THIRD CARD – TOP */}
                <div className="self-start">
                    <ArtistCard
                        image={img2}
                        title="Community Artists"
                        description="We’re passionate about music and art and create new opportunities for artists and influencers to showcase their talent. With the support of our partners, we’re dedicated to promoting and supporting the next generation "
                    />
                </div>
            </div>
        </section>
    )
}

export default SecondSection
