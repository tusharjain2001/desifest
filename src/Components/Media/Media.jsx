import EventCard from '@/Components/Home/meadiacard.jsx'
import blog1 from '@/Assets/home/Media/image1.png'
import blog2 from '@/Assets/home/Media/image2.png'
import blog3 from '@/Assets/home/Media/image3.png'
import left from '../../Assets/concerts/leftwhitearrow.svg'
import right from '../../Assets/concerts/rightwhitearrow.svg'
import { useRef } from 'react'

const mediaData = [
    {
        image: blog1,
        title: 'DESIFEST 2025 “We are Canadian” return...',
        date: 'May 15, 2025',
        description:
            'DESIFEST 2025 Doubles Down on Canadian South Asian Talent with Bold “We Are Canadian” Return to Sankofa Square...',
        readMoreLink: 'desifest-press-release',
    },
    {
        image: blog2,
        title: 'Open Mic Unplugged Brings Back...',
        date: 'May 15, 2025',
        description:
            'Open Mic Unplugged Brings South Asian Music Back to the Heart of Gerrard Street May 31,...',
        readMoreLink: 'open-mic-unplugged',
    },
    {
        image: blog3,
        title: 'A Typographic Legend: Jan Middendorp',
        date: 'Jan 07, 2024',
        description:
            'Jan Middendorp (4/9/56–12/8/23) contributed an incredible wealth of knowledge to the field of typography...',
        readMoreLink: 'a-typographic-legend',
    },
]

const MediaBlogs = () => {
    const scrollRef = useRef(null)

    const scroll = (dir) => {
        if (!scrollRef.current) return
        scrollRef.current.scrollBy({
            left: dir === 'left' ? -320 : 320,
            behavior: 'smooth',
        })
    }

    return (
        <div className="my-6 flex flex-col px-2">
            {/* Header */}
            <div className="mb-8 text-white uppercase">
                {/* Desktop header */}
                <div className="oswald-500 hidden items-center gap-4 text-5xl sm:flex">
                    <span className="whitespace-nowrap">MEDIA BLOGS</span>
                    <div className="h-[3px] flex-1 rounded-full bg-white" />
                </div>

                {/* Mobile header */}
                <div className="flex flex-row sm:hidden">
                    <div className="oswald-500 mr-4 text-4xl text-nowrap">MEDIA BLOGS</div>

                    <div className="mt-3 flex w-full justify-center">
                        <div className="flex w-full items-center gap-3">
                            <div className="h-[2px] flex-1 rounded-full bg-white" />
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => scroll('left')}
                                    className="flex h-4 w-4 items-center justify-center"
                                >
                                    <img src={left} className="h-full w-full object-contain" />
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    className="flex h-4 w-4 items-center justify-center"
                                >
                                    <img src={right} className="h-full w-full object-contain" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Wrapper */}
            <div
                ref={scrollRef}
                className="flex cursor-grab gap-6 overflow-x-auto pb-4 active:cursor-grabbing sm:grid sm:grid-cols-3 sm:gap-8 sm:overflow-visible"
            >
                {mediaData.map((item, index) => (
                    <div key={index} className=" flex-shrink-0 sm:w-full w-90 ">
                        <EventCard {...item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MediaBlogs
