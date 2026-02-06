import SecondSection from '@/Components/SofaSession/SecondSection'
import bg from '../../Assets/sofa_session/sofasessionbg.png'
import white from '../../Assets/sofa_session/whitecircles.png'
import ThirdSection from '@/Components/SofaSession/ThirdSection'
import ImageCarousel from '@/Components/SofaSession/ImageCarousel'

const SofaSession = () => {
    return (
        <div className="relative flex flex-col bg-[#AC48FF]">
            <section
                className="flex h-screen w-full items-center bg-cover bg-center pl-4 md:pl-80"
                style={{ backgroundImage: `url(${bg})` }}
            >
                {/* content */}
                <div className="flex flex-col items-start justify-center leading-none">
                    <div className="jersey -mb-4 text-[112px] leading-none text-[#D9FF00] md:-mb-10 md:text-[230px]">
                        SOFA
                    </div>
                    <div className="jersey text-[112px] leading-none text-[#D9FF00] md:text-[230px]">
                        SESSIONS
                    </div>

                    <div className="dm-sans-400 text-[20px] leading-none tracking-widest text-white md:text-[32px]">
                        MUSIC, UP CLOSE AND PERSONAL
                    </div>
                </div>
                <img src={white} className="absolute left-0" />
            </section>
            <SecondSection />
            <ThirdSection />
            <ImageCarousel />
        </div>
    )
}

export default SofaSession
