import EventCard from '@/Components/Home/meadiacard.jsx'
import blog1 from '@/Assets/home/Media/image1.png'
import blog2 from '@/Assets/home/Media/image2.png'
import blog3 from '@/Assets/home/Media/image3.png'
import { useRef } from 'react'
const mediaData = [
    {
        image: blog1,
        title: 'DESIFEST 2025 “We are Canadian” return...',
        date: 'May 15, 2025',
        description:
            'DESIFEST 2025 Doubles Down on Canadian South Asian Talent with Bold “We Are Canadian” Return to Sankofa Square...',
        readMoreLink: '#',
    },
    {
        image: blog2,
        title: 'Open Mic Unplugged Brings Back...',
        date: 'May 15, 2025',
        description:
            'Open Mic Unplugged Brings South Asian Music Back to the Heart of Gerrard Street May 31,...',
        readMoreLink: '#',
    },
    {
        image: blog3,
        title: 'A Typographic Legend: Jan Middendorp',
        date: 'Jan 07, 2024',
        description:
            'Jan Middendorp (4/9/56–12/8/23) contributed an incredible wealth of knowledge to the field of typography...',
        readMoreLink: '#',
    },
]
const PopularCaseStudies = () => {
    const scrollRef = useRef(null)

    const scroll = (dir) => {
        if (!scrollRef.current) return
        scrollRef.current.scrollBy({
            left: dir === 'left' ? -350 : 350,
            behavior: 'smooth',
        })
    }

    return (
        <div className="flex flex-col px-2 sm:pl-25">
            {/* Header */}
            <div className="oswald-500 mb-8 flex items-center justify-between text-3xl text-white uppercase sm:text-5xl">
                <div className="flex w-full items-center gap-3 sm:gap-4 mb-5">
                    <span className="whitespace-nowrap">POPULAR CASE STUDIES</span>
                    <div className="h-[2px] flex-1 rounded-full bg-white sm:h-[3px]" />
                </div>

                {/* Mobile Arrows */}
                <div className="ml-4 flex gap-3 sm:hidden">
                    <button onClick={() => scroll('left')} className="text-2xl">
                        ‹
                    </button>
                    <button onClick={() => scroll('right')} className="text-2xl">
                        ›
                    </button>
                </div>
            </div>

            {/* Cards Wrapper */}
            <div
                ref={scrollRef}
                className="flex cursor-grab justify-center gap-8 overflow-x-auto pb-4 active:cursor-grabbing sm:flex-wrap sm:overflow-visible"
            >
                {mediaData.map((item, index) => (
                    <div
                        key={index}
                        className="flex min-w-[280px] flex-shrink-0 sm:max-w-[30%] sm:basis-1/3"
                    >
                        <EventCard {...item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularCaseStudies
