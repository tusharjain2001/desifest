import SecondSection from '@/Components/SofaSession/SecondSection'
import bg from '../../Assets/sofa_session/sofasessionbg.png'
import white from '../../Assets/sofa_session/whitecircles.png'
import { useOutletContext } from 'react-router-dom'

const SofaSession = () => {
    const { bgColor } = useOutletContext()

    return (
        <div className="relative flex flex-col" style={{ backgroundColor: bgColor }}>
            <section
                className="flex h-screen w-full items-center bg-cover bg-center pl-4 md:pl-80"
                style={{ backgroundImage: `url(${bg})` }}
            >
                {/* content */}
                <div className="flex flex-col items-start justify-center leading-none">
                    <div className="jersey -mb-4 md:-mb-10 text-[112px] md:text-[230px] leading-none text-[#D9FF00]">
                        SOFA
                    </div>
                    <div className="jersey text-[112px] md:text-[230px] leading-none text-[#D9FF00]">SESSIONS</div>

                    <div className="dm-sans-400 text-[20px] md:text-[32px] leading-none tracking-widest text-white">
                        MUSIC, UP CLOSE AND PERSONAL
                    </div>
                </div>
                <img src={white} className="absolute left-0" />
            </section>
            <SecondSection />
        </div>
    )
}

export default SofaSession
