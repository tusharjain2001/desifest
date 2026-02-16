import { useRef, useState } from 'react'
import backgroundVideo from '@/Assets/home/animation/video.mp4'
import ParallaxColumns from './paralaxcoolumn.jsx'
import ArtistsSection from './ArtistsSection.jsx'

const Animation = ({ scrollY }) => {
    const videoRef = useRef(null)
    const [soundEnabled, setSoundEnabled] = useState(false)

    const toggleSound = () => {
        if (!videoRef.current) return

        if (soundEnabled) {
            // 🔇 Disable sound
            videoRef.current.muted = true
            videoRef.current.volume = 0
        } else {
            // 🔊 Enable sound
            videoRef.current.muted = false
            videoRef.current.volume = 1
            videoRef.current.play()
        }

        setSoundEnabled(!soundEnabled)
    }

    return (
        <section className="relative w-full overflow-hidden sm:mt-20">
            <div className="relative z-0 h-100 w-full sm:h-[1200px]">
                <video
                    ref={videoRef}
                    className="absolute inset-0 z-0 h-[800px] w-full object-cover"
                    src={backgroundVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                />

                {/* SOUND TOGGLE BUTTON */}
                <button
                    onClick={toggleSound}
                    className="absolute top-6 right-6 z-50 rounded-full bg-black/30 px-6 py-3 text-white backdrop-blur hover:bg-black transition"
                >
                    {soundEnabled ? '🔇' : '🔊'}
                </button>

                <div className="absolute inset-0 z-10 h-40 bg-gradient-to-b from-[#100422] to-transparent"></div>
                <div className="absolute inset-0 z-10 top-170 h-30 bg-gradient-to-t from-[#100422] to-transparent"></div>

                <div className="absolute bottom-0 z-20 h-full w-full">
                    <ParallaxColumns scrollY={scrollY} />
                </div>
            </div>

            <div className="relative z-50">
                <ArtistsSection scrollY={scrollY} />
            </div>
        </section>
    )
}

export default Animation
