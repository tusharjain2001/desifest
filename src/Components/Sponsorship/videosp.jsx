
import { useRef, useState } from 'react'
import videoSrc from '@/Assets/COMMON/Sponsorshipvideo.mp4'

export default function Videosp() {
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
        <div className="flex relative h-160 mt-22 w-full items-center justify-center">
            <video
                ref={videoRef}
                className="absolute inset-0 z-0 h-[600px] w-full object-cover"
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

            <div className="absolute inset-0 z-10 h-40 bg-gradient-to-b from-[#05010a] to-transparent"></div>
            <div className="absolute inset-0 top-90 z-10 h-60 bg-gradient-to-t from-[#07020f] to-transparent"></div>
        </div>
    )
}
