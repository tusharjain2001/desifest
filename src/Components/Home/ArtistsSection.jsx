import arrow from '@/Assets/home/animation/image.png'
import background2 from '@/Assets/home/background_2.png'
import { useEffect, useRef } from 'react'
// IMAGES
import img1 from '@/Assets/home/animation/communitythird.svg'
import img2 from '@/Assets/home/animation/image copy.png'

const ArtistCard = ({ image, title }) => {
    return (
        <div className="group hover:bg-neon-yellow relative flex w-full cursor-pointer flex-col justify-between bg-white p-6 transition-all duration-500 ease-out sm:h-180">
            {/* IMAGE */}
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-60 w-1/2 object-cover grayscale transition-all duration-500 ease-out group-hover:w-3/4"
                />
            </div>

            {/* BOTTOM CONTENT */}
            <div className="flex flex-col items-start justify-between">
                {/* TITLE */}
                <h3 className="dm-sans-400 max-w-35 text-5xl leading-tight text-black uppercase">
                    {title}
                </h3>

                {/* ARROW */}
                <div className="flex w-full justify-end">
                    <img
                        src={arrow}
                        alt=""
                        className="w-14 rotate-0 transition-transform duration-500 ease-out group-hover:-rotate-45"
                    />
                </div>
            </div>
        </div>
    )
}

const ArtistsSection = ({ scrollY }) => {
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
        <section className="bg-deep-purple relative w-full py-32">
            {/* BACKGROUND IMAGE */}
            <img
                src={background2}
                alt="background"
                className="absolute inset-0 z-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 -bottom-4 z-20 bg-gradient-to-t from-[#100422]/100 to-[#100422]/0"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#453361]/100 to-[#453361]/50"></div>

            {/* GRID CONTAINER (UNCHANGED) */}
            <div className="relative z-30 mx-auto pt-28 grid w-full max-w-full grid-cols-1 gap-10 px-6 sm:grid-cols-3">
                {/* Featured Artist */}
                <div ref={featuredRef}>
                    <ArtistCard image={img2} title="Featured Artists" />
                </div>

                {/* Community Artist */}
                <div ref={communityRef} className="">
                    <ArtistCard image={img2} title="Community Artists" />
                </div>

                {/* Image Card */}
                <div ref={imageRef}>
                    <img
                        src={img1}
                        className="hidden h-full w-full object-contain sm:block"
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}

export default ArtistsSection
