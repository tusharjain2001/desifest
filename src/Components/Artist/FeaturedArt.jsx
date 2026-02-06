import React from 'react'
import images from '@/Assets/openmic/image copy 4.png'
import arrow from '@/Assets/openmic/image copy 5.png'
import left from '../../Assets/concerts/leftwhitearrow.svg'
import right from '../../Assets/concerts/rightwhitearrow.svg'
import { useRef } from 'react'
const artists = [
    {
        id: 1,
        name: 'JONITA GANDHI',
        handle: '@artist.instaprofile',
        image: images,
    },
    {
        id: 2,
        name: 'JONITA GANDHI',
        handle: '@artist.instaprofile',
        image: images,
    },
    {
        id: 3,
        name: 'JONITA GANDHI',
        handle: '@artist.instaprofile',
        image: images,
    },
]

const FeaturedArt = () => {
    const scrollRef = useRef(null)

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -350,
            behavior: 'smooth',
        })
    }

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 350,
            behavior: 'smooth',
        })
    }
    return (
        <div className="w-full overflow-hidden py-10">
            {/* Heading */}
            <div className="mb-10 flex items-center justify-center">
                <div className="flex w-full items-center gap-1 md:items-center md:gap-4">
                    <h2 className="oswald-500 text-[36px] tracking-wide whitespace-nowrap text-black md:text-[60px]">
                        FEATURED ARTIST
                    </h2>

                    <div className="flex text-2xl dm-sans-400 flex-1 flex-col mt-8 items-center justify-start">
                        {/* Line */}
                        <div className="h-0.5 w-full bg-black" />
                        The voices shaping the DESIFEST sound today.
                    </div>
                    {/* Arrows */}
                    <div className="flex shrink-0 items-center md:ml-10 md:gap-4">
                        <button onClick={scrollLeft} className="transition hover:opacity-70">
                            <img src={left} alt="left" className="h-8 w-8 invert md:h-10 md:w-10" />
                        </button>
                        <button onClick={scrollRight} className="transition hover:opacity-70">
                            <img
                                src={right}
                                alt="right"
                                className="h-8 w-8 invert md:h-10 md:w-10"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Container */}
            <div className="scrollbar-hide flex flex-col items-start overflow-x-auto px-6 sm:flex-row sm:gap-6 sm:px-12 sm:pb-32">
                {artists.map((artist) => (
                    <div
                        key={artist.id}
                        className="group relative flex-shrink-0 basis-[260px] origin-top-left transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:basis-[395px] hover:scale-y-125 sm:basis-[320px] sm:hover:basis-[420px]"
                    >
                        <div className="flex origin-top-left flex-row gap-2 
                        
                        
                        p-4 backdrop-blur-md 
                        
                        
                        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] sm:flex-col sm:gap-0 
                       
                       
                      
                        sm:bg-none 
                     ">
                            <div className="relative h-45 w-1/2 border-4 border-black sm:h-70 sm:w-full">
                                <img
                                    src={artist.image}
                                    alt={artist.name}
                                    className="h-full w-full object-cover transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] sm:grayscale sm:group-hover:grayscale-0"
                                />
                            </div>

                            <div className="my-4 w-1/2 text-left sm:w-full">
                                <h3 className="dm-sans-700 text-4xl pr-8 font-normal tracking-wider [text-stroke:1px_black] 
  [-webkit-text-stroke:1px_black] text-[#EEFE08] sm:text-5xl">
                                    {artist.name}
                                </h3>
                                <p className="dm-sans-400 text-lg font-normal text-[#26193A]">
                                    {artist.handle}
                                </p>
                            </div>
                            <div className="absolute invert right-6 bottom-6">
                                <img src={arrow} alt="" className="h-8" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedArt
