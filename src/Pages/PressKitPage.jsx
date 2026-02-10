import TestimonialCarousel from '@/Components/About/Testimonial'
import MissionStatement from '@/Components/Media/MissionStatement'
import OfficialLogos from '@/Components/Media/OfficialLogos'
import PeopleOfContact from '@/Components/Media/PeopleOfContact'
import PopularCaseStudies from '@/Components/Media/PopularCaseStudies'
import backgroung1 from '@/Assets/media/BACKGROUND.png'
import PressKitLp from '@/Components/Media/PressKitLp'
import { useOutletContext } from 'react-router-dom'
import Video from '@/Components/Concerts/video'
import ContactForm from '@/Components/Home/ContactForm'

const PressKitPage = () => {
    const { scrollRef, scrollY } = useOutletContext()
    return (
        <div className="relative">
            <div className="absolute inset-0 h-120 overflow-hidden">
                <img
                    src={backgroung1}
                    alt="background"
                    className="absolute inset-0 w-full object-top"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#100422] to-transparent"></div>
            </div>
            <div className="relative mt-10 w-full overflow-hidden px-6 py-16 md:h-120">
                <div className="relative z-10 mx-auto max-w-6xl text-center">
                    {/* Top Small Heading */}
                    <p className="oswald-500 mb-4 text-[24px] text-neon-yellow uppercase sm:text-7xl">
                        2026 DESIFEST
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-[64px] special-gothic-one-regular font-extrabold tracking-tight text-[#C6B7DD] md:text-9xl">
                        MEDIA KIT
                    </h1>

                    {/* Subtext */}
                    <p className="dm-sans-400 mt-12 text-[18px] tracking-[0.15em] text-white uppercase md:text-[20px]">
                        Download the full 2026 media kit
                    </p>

                    {/* Button */}
                    <div className="mt-8">
                        <button className="bg-neon-yellow p-4  text-2xl font-bold tracking-wider oswald-500 text-black uppercase ">
                            Download Kit
                        </button>
                    </div>
                </div>
            </div>
            <Video />

            <MissionStatement />
            
            <OfficialLogos />
            <TestimonialCarousel />
            <ContactForm />
        </div>
    )
}
export default PressKitPage
