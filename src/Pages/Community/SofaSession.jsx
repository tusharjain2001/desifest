import SecondSection from '@/Components/SofaSession/SecondSection'
import { useOutletContext } from 'react-router-dom'

const SofaSession = () => {
    const { bgColor } = useOutletContext() || {}

    return (
        <div className="flex flex-col">
            <section
                className="relative flex h-screen w-full items-center justify-center overflow-hidden"
                style={{ backgroundColor: bgColor || '#6108AA' }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-600 to-pink-500 opacity-90" />

                {/* Circle Effects */}
                <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
                <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

                {/* Content */}
                <div className="relative z-10 px-6 text-center">
                    <h1 className="text-neon-yellow font-[Oswald] text-[60px] leading-none tracking-wide uppercase md:text-[120px]">
                        SOFA <br /> SESSIONS
                    </h1>

                    <p className="mt-6 text-lg tracking-wide text-white md:text-2xl">
                        MUSIC, UP CLOSE AND PERSONAL
                    </p>
                </div>
            </section>
            <SecondSection />
        </div>
    )
}

export default SofaSession
