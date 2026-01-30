import EventCard from './meadiacard'
import meadiaback from '@/Assets/home/Media/image copy.png'
import background from '@/Assets/home/Media/image.png'
// BLOG IMAGES
import blog1 from '@/Assets/home/Media/image1.png'
import blog2 from '@/Assets/home/Media/image2.png'
import blog3 from '@/Assets/home/Media/image3.png'
import { useEffect, useRef } from 'react'
import { useState } from 'react'

const BlogsAndMedia = ({ scrollY }) => {
    const blogRefs = useRef([])

    useEffect(() => {
        const y = scrollY ?? 0

        blogRefs.current.forEach((el, index) => {
            if (!el) return

            // different speed for each card
            const speeds = [0.06, 0.02, 0.06]
            const speed = speeds[index] || 0.1

            el.style.transform = `translateY(-${y * speed}px)`
        })
    }, [scrollY])
    const blogs = [
        {
            id: 1,
            title: 'DESIFEST 2025 "We are Canadian" return...',
            date: 'May 15, 2025',
            description:
                'DESIFEST 2025 Doubles Down on Canadian South Asian Talent with Bold "We Are Canadian" Return to Sankofa Square...',
            image: blog1,
            link: '/blog/desifest-2025',
        },
        {
            id: 2,
            title: 'Open Mic Unplugged Brings Back...',
            date: 'May 15, 2025',
            description:
                'Open Mic Unplugged Brings South Asian Music Back to the Heart of Gerrard Street May 31...',
            image: blog2,
            link: '/blog/open-mic-unplugged',
        },
        {
            id: 3,
            title: 'A Typographic Legend: Jan Middendorp',
            date: 'Jan 07, 2024',
            description:
                'Jan Middendorp (4/9/56–12/8/23) contributed an incredible wealth of knowledge to the field of typography...',
            image: blog3,
            link: '/blog/jan-middendorp',
        },
    ]

    return (
        <section className="relative overflow-hidden px-4 py-4 text-white sm:px-8 lg:px-16">
            {/* OVERLAY for readability (background already exists) */}
            <div className="relative z-20 mx-auto max-w-7xl">
                <img
                    src={meadiaback}
                    alt="background"
                    className="absolute -top-20 w-full object-cover"
                />

                {/* TITLE */}
                <h2 className="oswald text-neon-yellow oswaldd z-20 mb-16 text-center text-5xl tracking-wide sm:text-5xl lg:text-6xl">
                    BLOGS & MEDIA
                </h2>

                {/* CARDS */}
                <div className="relative z-30 hidden w-full pt-36 justify-center gap-10 sm:mt-48 sm:flex">
                    <img
                        src={background}
                        alt="background"
                        className="absolute -top-44 z-0 w-full object-cover"
                        style={{
                            WebkitMaskImage: `
      linear-gradient(
        to top,
        rgba(0,0,0,0) 46%,
        rgba(0,0,0,1) 125%
      )
    `,
                            maskImage: `
      linear-gradient(
        to top,
        rgba(0,0,0,0) 46%,
        rgba(0,0,0,1) 125%
      )
    `,
                        }}
                    />

                    {blogs.map((blog, index) => (
                        <div
                            key={blog.id}
                            ref={(el) => (blogRefs.current[index] = el)}
                            className="transition-transform duration-200 ease-out will-change-transform"
                        >
                            <EventCard
                                image={blog.image}
                                title={blog.title}
                                date={blog.date}
                                description={blog.description}
                                readMoreLink={blog.link}
                            />
                        </div>
                    ))}
                </div>
                {/* MOBILE SLIDER */}
                <div className="relative z-30 mt-24 sm:hidden">
                    {/* Background */}
                    <img
                        src={background}
                        alt="background"
                        className="absolute -top-14 z-0 w-full object-cover"
                        style={{
                            WebkitMaskImage: `
        linear-gradient(
          to top,
          rgba(0,0,0,0) 46%,
          rgba(0,0,0,1) 125%
        )
      `,
                            maskImage: `
        linear-gradient(
          to top,
          rgba(0,0,0,0) 46%,
          rgba(0,0,0,1) 125%
        )
      `,
                        }}
                    />

                    {/* Scroll Container */}
                    <MobileBlogSlider blogs={blogs} />
                </div>
            </div>
        </section>
    )
}

export default BlogsAndMedia

const MobileBlogSlider = ({ blogs }) => {
    const sliderRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    // Center middle card on load
    useEffect(() => {
        if (!sliderRef.current) return

        const middleIndex = Math.floor(blogs.length / 2)
        const middleCard = sliderRef.current.children[middleIndex]

        if (middleCard) {
            sliderRef.current.scrollTo({
                left:
                    middleCard.offsetLeft -
                    sliderRef.current.offsetWidth / 2 +
                    middleCard.offsetWidth / 2,
                behavior: 'smooth',
            })
            setActiveIndex(middleIndex)
        }
    }, [blogs])

    // Detect center card
    useEffect(() => {
        if (!sliderRef.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(Number(entry.target.dataset.index))
                    }
                })
            },
            {
                root: sliderRef.current,
                threshold: 0.6,
            }
        )

        Array.from(sliderRef.current.children).forEach((child) => observer.observe(child))

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={sliderRef}
            className="scrollbar-hide relative z-10 flex touch-pan-x snap-x snap-mandatory gap-10 overflow-x-auto px-[50vw]"
        >
            {blogs.map((blog, index) => (
                <div
                    key={blog.id}
                    data-index={index}
                    className={`flex-shrink-0 snap-center pb-16 transition-transform duration-500 ease-out ${activeIndex === index ? 'translate-y-10' : 'translate-y-0'} `}
                >
                    <EventCard
                        image={blog.image}
                        title={blog.title}
                        date={blog.date}
                        description={blog.description}
                        readMoreLink={blog.link}
                    />
                </div>
            ))}
        </div>
    )
}
