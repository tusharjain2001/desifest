import SecondSection from '@/Components/SofaSession/SecondSection'
import bg from '../../Assets/sofa_session/sofasessionbg.png'

const SofaSession = () => {


    return (
        <div className="flex flex-col md:pl-40  ">
            <section
                className=" flex h-[100vh] w-full items-center bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}
            >
                {/* content */}
                <div className="">
                    <div className="jersey text-[230px] leading-none text-[#D9FF00]">
                        SOFA
                        <br />
                        SESSIONS
                    </div>

                    <div className="mt-4 text-sm tracking-widest text-white">
                        MUSIC, UP CLOSE AND PERSONAL
                    </div>
                </div>
            </section>
            <SecondSection />
        </div>
    )
}

export default SofaSession
