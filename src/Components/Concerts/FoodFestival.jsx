import React, { useRef } from 'react'
import left from '../../Assets/concerts/leftwhitearrow.svg'
import right from '../../Assets/concerts/rightwhitearrow.svg'
import foodimage from '../../Assets/concerts/foodimage.svg'

const vendors = [
    {
        name: 'Vendor Name',
        handle: '@vedorId',
        image: '/vendor.jpg',
    },
    {
        name: 'Vendor Name',
        handle: '@vedorId',
        image: '/vendor.jpg',
    },
    {
        name: 'Vendor Name',
        handle: '@vedorId',
        image: '/vendor.jpg',
    },
    {
        name: 'Vendor Name',
        handle: '@vedorId',
        image: '/vendor.jpg',
    },
    {
        name: 'Vendor Name',
        handle: '@vedorId',
        image: '/vendor.jpg',
    },
]

const FoodFestivalSection = () => {
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
        <section className="bg-blue-black relative w-full overflow-hidden py-10">
            {/* CONTAINER */}
            <div className="mx-auto max-w-[90%]">
                {/* Header */}
                <div className="mb-14 flex items-center justify-between">
                    <div className="flex w-full items-center gap-1 md:gap-8 md:items-end">
                        <h2 className="oswaldd text-[36px] font-medium tracking-wide oswaldd whitespace-nowrap text-white md:text-[100px]">
                            FOOD FESTIVAL
                        </h2>

                        <div className="flex min-w-0 flex-1 flex-col">
                            {/* Line */}
                            <div className="h-0.5 w-full bg-white" />

                            {/* Text */}
                            <div className="mt-3 hidden text-xl pb-5 dm-sans-400 whitespace-nowrap text-white md:block">
                                Flavour, culture, and community.
                            </div>
                        </div>
                    </div>

                    {/* Arrows */}
                    <div className="md:ml-10 flex shrink-0 items-center md:gap-4">
                        <button onClick={scrollLeft} className="transition hover:opacity-70">
                            <img src={left} alt="left" className="h-8 w-8 md:h-10 md:w-10" />
                        </button>
                        <button onClick={scrollRight} className="transition hover:opacity-70">
                            <img src={right} alt="right" className="h-8 w-8 md:h-10 md:w-10" />
                        </button>
                    </div>
                </div>

                {/* Cards Row */}
                <div
                    ref={scrollRef}
                    className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth px-1 pb-6 md:gap-10 md:px-0"
                >
                    {vendors.map((vendor, index) => (
                        <div
                            key={index}
                            className="relative mx-auto w-[90%] min-w-[90%] shrink-0 border-4 border-white bg-black sm:w-[80%] sm:min-w-[80%] md:mx-0 md:w-auto md:min-w-[320px]"
                        >
                            {/* Accent lines */}
                            <span className="absolute top-0 left-0 h-0.5 w-full bg-white" />
                            <span className="absolute top-0 right-0 h-full w-0.5 bg-white" />

                            {/* Image */}
                            <img
                                src={foodimage}
                                alt={vendor.name}
                                className="h-75 w-full object-cover grayscale sm:h-85 md:h-90"
                            />

                            {/* Overlay */}
                            <div className="absolute top-0 right-0 bg-[#1a0b3d] px-4 py-3">
                                <p className="text-lg font-semibold text-white">{vendor.name}</p>
                                <p className="text-sm text-white/70">{vendor.handle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FoodFestivalSection
