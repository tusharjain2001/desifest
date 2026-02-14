import { useRef, useState } from 'react'
import backgroundVideo from '@/Assets/home/animation/video.mp4'
import ParallaxColumns from './paralaxcoolumn.jsx'
import ArtistsSection from './ArtistsSection.jsx'

const Animation = ({ scrollY }) => {
    const videoRef = useRef(null)
    const [soundEnabled, setSoundEnabled] = useState(false)

    const enableSound = () => {
        if (!videoRef.current) return

        videoRef.current.muted = false
        videoRef.current.volume = 1
        videoRef.current.play()

        setSoundEnabled(true)
    }

    return (
        <section className="relative w-full overflow-hidden sm:mt-20">
            {/* VIDEO + PARALLAX */}
            <div className="relative z-0 h-100 w-full sm:h-[1200px]">
                <video
                    ref={videoRef}
                    className="absolute inset-0 z-0 h-[800px] w-full object-cover"
                    src={backgroundVideo}
                    autoPlay
                    muted     // 👈 REQUIRED for autoplay
                    loop
                    playsInline
                    preload="auto"
                />

                {/* SOUND ENABLE BUTTON */}
                {!soundEnabled && (
                    <button
                        onClick={enableSound}
                        className="absolute top-0 right-6 z-50 rounded-full bg-black/30 px-8 py-4 text-sm text-white backdrop-blur hover:bg-black transition"
                    >
                        🔊
                    </button>
                )}

                <div className="absolute inset-0 z-10 h-40 bg-gradient-to-b from-[#100422] to-transparent"></div>
                <div className="absolute inset-0 z-10 top-170 h-30 bg-gradient-to-t from-[#100422] to-transparent"></div>

                {/* Parallax BELOW artists */}
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
