import TestimonialCarousel from '@/Components/About/Testimonial'
import MissionStatement from '@/Components/Media/MissionStatement'
import OfficialLogos from '@/Components/Media/OfficialLogos'
import PeopleOfContact from '@/Components/Media/PeopleOfContact'
import PopularCaseStudies from '@/Components/Media/PopularCaseStudies'
import backgroung1 from '@/Assets/media/BACKGROUND.png'
import PressKitLp from '@/Components/Media/PressKitLp'
import { useOutletContext } from 'react-router-dom'

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
            <div className="relative md:h-120 w-full overflow-hidden px-6 py-16 mt-10">
                {/* Background subtle glow */}
                <div className="relative z-10 mx-auto max-w-6xl text-center">
                    {/* Small Top Text */}
                    <p className="dm-sans-500 mb-4 text-[20px] tracking-[0.3em] text-white uppercase md:text-[20px]">
                        Everything you need to tell our story right
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-[64px] font-extrabold tracking-tight md:text-9xl">
                        <span className="special-gothic-one-regular bg-gradient-to-r from-yellow-300 to-lime-400 bg-clip-text text-transparent">
                            PRESS
                        </span>{' '}
                       
                        <span className="special-gothic-one-regular bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
                            KIT
                        </span>
                    </h1>
                </div>
            </div>
            <PressKitLp scrollY={scrollY} scrollRef={scrollRef} />

            <MissionStatement />
            <PopularCaseStudies />
            <PeopleOfContact />
            <OfficialLogos />
            <TestimonialCarousel />
        </div>
    )
}
export default PressKitPage
