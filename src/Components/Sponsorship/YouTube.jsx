import { useRef, useState } from 'react'
import videoSrc from '@/Assets/concerts/concertvideo.mp4'

export default function YouTube() {
    const videoRef = useRef(null)
    const [soundEnabled, setSoundEnabled] = useState(false)

    const toggleSound = () => {
        if (!videoRef.current) return

        videoRef.current.muted = soundEnabled
        if (!soundEnabled) {
            videoRef.current.play()
        }

        setSoundEnabled(!soundEnabled)
    }

    return (
        <div className="flex relative h-220 w-full items-center mt-24 justify-center">
            <video
                ref={videoRef}
                className="absolute inset-0 z-0 h-[800px] w-full object-cover"
                src={videoSrc}
                autoPlay
                muted   // required for autoplay
                loop
                playsInline
            />

            {/* 🔊 SOUND TOGGLE BUTTON */}
            <button
                onClick={toggleSound}
                className="absolute top-6 right-6 z-50 rounded-full bg-black/30 px-6 py-3 text-white backdrop-blur hover:bg-black transition"
            >
                {soundEnabled ? '🔇' : '🔊'}
            </button>

            <div className="absolute inset-0 z-10 h-40 bg-gradient-to-b from-[#100422] to-transparent"></div>
            <div className="absolute inset-0 top-160 z-10 h-40 bg-gradient-to-t from-[#100422] to-transparent"></div>
        </div>
    )
}
