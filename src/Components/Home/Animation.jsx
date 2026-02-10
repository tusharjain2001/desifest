import backgroundVideo from '@/Assets/home/animation/video.mp4'
import ParallaxColumns from './paralaxcoolumn.jsx'
import ArtistsSection from './ArtistsSection.jsx'

const Animation = ({ scrollY }) => {
    return (
        <section className="relative w-full overflow-hidden sm:mt-20">
            {/* VIDEO + PARALLAX */}
            <div className="relative z-0 h-100 w-full sm:h-[1200px]">
                <video
                    className="absolute inset-0 z-0 h-[800px] w-full object-cover"
                    src={backgroundVideo}
                    autoPlay
                    loop
                    playsInline
                />

                <div className="absolute inset-0 z-10 h-40 bg-gradient-to-b from-[#100422] to-transparent"></div>
                <div className="absolute inset-0 z-10 top-170 h-30  bg-gradient-to-t from-[#100422] to-transparent"></div>

                {/* Parallax should stay BELOW artists */}
                <div className="absolute bottom-0 z-20 h-full w-full">
                    <ParallaxColumns scrollY={scrollY} />
                </div>
            </div>

            {/* ARTISTS SECTION ABOVE EVERYTHING */}
            <div className="relative z-50">
                <ArtistsSection scrollY={scrollY} />
            </div>
        </section>
    )
}
export default Animation
