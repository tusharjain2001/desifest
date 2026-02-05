import VerticalNavbar from '@/Components/Layout/VerticalNavbar'
import backgroung1 from '@/Assets/community/image.png'
import Hero from '@/Components/Community/Hero'
import ContactForm from '@/Components/Home/ContactForm'
import YearRoundProgram from '@/Components/Community/YearRoundProgram'
import bgimg from '@/Assets/about/background.png'

const CommunityPage = () => {
    return (
        <div className="relative h-full min-h-screen w-full overflow-clip">
            {/* BACKGROUND */}
            <div className="absolute inset-0 h-220">
                <img
                    src={backgroung1}
                    alt="background"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="z-20 mx-auto flex w-full flex-col items-center px-2">
                <div className="w-full sm:pl-22">
                    <Hero />
                    <YearRoundProgram />
                    <div className="krona-one-regular relative w-full py-20">
                        {/* FRONT RIBBON — STATIC */}
                        <div className="absolute z-10 flex h-12 w-full -rotate-3 items-center overflow-hidden bg-[#C6B7DD]">
                            <div className="flex w-max">
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <span
                                        key={i}
                                        className="krona-one-regular px-6 text-[12px] whitespace-nowrap text-[#1A102A]"
                                    >
                                        Canada’s #1 South Asian music festival Toronto’s iconic
                                        Sankofa Square ·
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* BACK RIBBON — STATIC */}
                        <div className="absolute z-0 flex h-12 w-full rotate-3 items-center overflow-hidden bg-[#453361]">
                            <div className="flex w-max">
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <span
                                        key={i}
                                        className="krona-one-regular px-6 text-[12px] whitespace-nowrap text-white"
                                    >
                                        Toronto’s iconic Sankofa Square · Canada’s #1 South Asian
                                        music festival ·
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <img src={bgimg} alt="" className="my-12" />

                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default CommunityPage
