import { useEffect, useRef } from 'react'
import quote from '../../Assets/about/quote.svg'

export default function TestimonialCarousel() {
    const scrollRef = useRef(null)

    // ✅ TESTIMONIAL DATA (same file)
    const testimonials = [
        {
            quote: 'Awesome show last night. we had a great time listening to all those hits. Pratik Rao you were awesome, as usual ..... may your tribe increase.',
            name: 'Ed Daniel',
            role: 'March 27, 2022',
            highlights: ['Pratik Rao'],
        },
        {
            quote: 'Kudos and much respect to Team DesiFEST for brining the celebrations online. Brining artists & DJs all around the world together to showcase their talents and to entertain the masses as well. Amazing initiative. #djdeepzysingapore',
            name: 'Pradeep Sidhu',
            role: 'July 9, 2021',
            highlights: ['#djdeepzysingapore'],
        },
        {
            quote: 'Desifest is the best place for amazing talents and all positive energy for various musicians. Sofa sessions have been great and now a habit, love you team. Highly recommended!',
            name: 'Sharmila Ganesh',
            role: 'June 11, 2020',
            highlights: ['Sofa sessions'],
        },
        {
            quote: 'DesiFEST has rekindled my passion for music. This summer, we enjoyed daily Sofa Sessions featuring amazing local and international artists, many of whom have become friends.  I also value the resources for artists, like webinars and networking. Thanks, Sathish and Michelle, for spreading joy through creativity during these tough times.',
            name: 'Zohra Kassam',
            role: 'June 5, 2020',
            highlights: ['Sathish and Michelle'],
        },
        {
            quote: 'DesiFEST is a great platform for upcoming artists. The team is amazing and very creative. Prior to Covid19 situation, my band Desirootz Music and I absolutely loved participating at the monthly Open stage concerts in downtown Toronto. Thanks to them, I have met some amazing artists and collaborators. I support their vision.',
            name: 'Himaani Bee',
            role: 'June 3, 2020',
            highlights: ['vision'],
        },
        {
            quote: 'I highly recommend Desifest as a vibrant multicultural platform for artists worldwide to share their unique talents. The founders, Sathish and Michelle, are incredibly supportive and dedicated, giving a welcoming environment for all forms of music. As a self-taught singer and musician, I felt embraced with this fantastic opportunity.',
            name: 'Seema Maraj',
            role: 'June 2, 2020',
            highlights: ['fantastic opportunity.'],
        },
        {
            quote: 'DesiFEST provides an amazing platform for aspiring artists to display their skills. Thanks a lot Satish and Michelle for this wonderful platform.',
            name: 'Ravi Yedery',
            role: 'June 2, 2020',
            highlights: ['Satish and Michelle'],
        },
        {
            quote: 'DesiFest is a huge platform for South Asian artists for show casing their talent! The team is amazing and so productive. They are absolutely passionate about what they do and always give their 100000% I love performing at any platform DesiFest provides.',
            name: 'Rushna Imran',
            role: 'June 2, 2020',
            highlights: ['South Asian artists'],
        },
        {
            quote: 'An excellent platform for artists from all over the globe to showcase their talent. Great efforts put in by Michelle and Sathish to bring the audience a great show and provide participants with a very encouraging and supportive environment !',
            name: 'Ritu Verma',
            role: 'June 2, 2020',
            highlights: ['very encouraging'],
        },
        {
            quote: 'Desifest is an amazing platform for promoting talent. The dedicated team goes above and beyond to support local artists, helping them grow both professionally and personally. They ensure that every talent has the tools needed for success. Wishing the Desifest team all the best!',
            name: 'Pratik Peters',
            role: 'June 2, 2020',
            highlights: ['professionally and personally'],
        },
        {
            quote: "I discovered desiFest by chance and I'm so thankful to Sathish and Michelle for treating me like family and for their passion in bringing together diverse artists from around the globe. If you're looking to make your mark in the Hindi music scene in Toronto, desiFest is the best place to showcase your talent. Thanks again to the desiFest team!",
            name: 'Akxay Sharma',
            role: 'June 2, 2020',
            highlights: ['around the globe'],
        },
        {
            quote: 'Desifest has very quickly become a leader in helping new artist bring their talent to the masses. During these tough times (COVID-19) Desifest has created a platform for live performs to continue following their dreams. 5 stars!',
            name: 'Bobby Gulati',
            role: 'June 2, 2020',
            highlights: ['5 stars!'],
        },
    ]

    // ✅ SMOOTH AUTO SCROLL (NO LAG / NO REVERSE)
    useEffect(() => {
        const container = scrollRef.current
        if (!container) return

        const speed = 1 // smoother & visible
        let intervalId

        intervalId = setInterval(() => {
            container.scrollLeft += speed

            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0
            }
        }, 16) // ~60fps

        return () => clearInterval(intervalId)
    }, [])

    const highlightText = (text, highlights) => {
        if (!highlights.length) return text

        const regex = new RegExp(`(${highlights.join('|')})`, 'gi')

        return text.split(regex).map((part, index) =>
            highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
                <span key={index} className="text-neon-yellow helva font-bold">
                    {part}
                </span>
            ) : (
                part
            )
        )
    }

    return (
        <div className="w-full gap-5 overflow-hidden bg-[#120822] py-16">
            <h2 className="mb-10 text-center font-[OSWALD] text-4xl font-medium text-white">
                WHAT PEOPLE SAY ABOUT US...
            </h2>

            <div ref={scrollRef} className="no-scrollbar flex gap-6 overflow-x-scroll px-10">
                {[...testimonials, ...testimonials].map((item, index) => (
                    <div
                        key={index}
                        className="flex max-w-105 min-w-105 flex-col justify-between rounded-xl bg-[#1c1033] p-6 text-white shadow-lg"
                    >
                        <div className="">
                            <img src={quote} className="mb-3" />
                            <p className="helva text-[20px] leading-relaxed text-gray-300">
                                {highlightText(item.quote, item.highlights || [])}
                            </p>
                        </div>

                        <div className="border-neon-yellow mt-6 flex items-center gap-4 border-t pt-4">
                            {/* <div className="w-10 h-10 bg-purple-300 rounded-md" /> */}
                            <div className="dm-sans-400">
                                <p className="text-[24px]">{item.name}</p>
                                <p className="text-[16px]">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* Add this once in your global CSS file
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*/
