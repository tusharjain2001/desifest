import arrow from '@/Assets/home/animation/image.png'
import background2 from '@/Assets/home/background_2.png'
import { useEffect, useRef } from 'react'
// IMAGES
import img1 from '@/Assets/home/animation/image1.png'
import img2 from '@/Assets/home/animation/image2.png'
import img3 from '@/Assets/home/animation/image3.png'

import { useNavigate } from 'react-router-dom'


const ArtistCard = ({ image, title }) => {
    const navigate = useNavigate()

    const goToArtists = () => {
        navigate('/our-artists')
    }

    return (
        <div className="group hover:bg-neon-yellow relative flex w-full cursor-pointer flex-row sm:flex-col sm:justify-between bg-white p-6 transition-all duration-500 ease-out sm:h-120">
            
            {/* IMAGE */}
            <div className="overflow-hidden w-1/2 sm:w-full">
                <img
                    src={image}
                    alt={title}
                    className="h-50 w-full sm:w-1/2 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out group-hover:w-3/4"
                />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col px-2 items-start justify-between w-full">
                
                <h3 className="dm-sans-400 max-w-35 text-3xl sm:text-5xl leading-tight text-black uppercase">
                    {title}
                </h3>

                {/* 🔥 ARROW BUTTON */}
                <div className="flex w-full justify-end">
                    <button
                        onClick={goToArtists}
                        className="transition-transform duration-500 ease-out group-hover:-rotate-45"
                    >
                        <img
                            src={arrow}
                            alt="Go to Our Artists"
                            className="w-10"
                        />
                    </button>
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
        <section className="bg-deep-purple relative w-full py-2 sm:py-32">
            {/* BACKGROUND IMAGE */}
            <img
                src={background2}
                alt="background"
                className="absolute inset-0 z-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 -bottom-4 z-20 bg-gradient-to-t from-[#100422]/100 to-[#100422]/0"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#453361]/100 to-[#453361]/50"></div>

            {/* GRID CONTAINER (UNCHANGED) */}
            <div className="relative z-30 mx-auto grid w-full max-w-full grid-cols-1 gap-2  px-8 pt-28 sm:grid-cols-3">
                {/* Featured Artist */}
                <div ref={featuredRef} className="w-90 flex items-center ">
                    <ArtistCard image={img1} title="alumni
artists" />
                </div>

                {/* Community Artist */}
                <div ref={communityRef} className="w-90 items-center ">
                    <ArtistCard image={img2} title="Community Artists" />
                </div>

                {/* Image Card */}
                <div ref={imageRef} className=" sm:block hidden w-80  border-8 border-white h-120 items-center ">
                    <img
                        src={img3}
                        className="hidden h-full w-full object-cover sm:block"
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}

export default ArtistsSection
