import videoSrc from '@/Assets/concerts/concertvideo.mp4' // or use a URL

export default function Video() {
    return (
        <div className="flex relative h-220 w-full items-center justify-center">
            <video
                className="absolute inset-0 z-0 h-[800px] w-full object-cover"
                src={videoSrc}
                autoPlay
                loop
                playsInline
            />

            <div className="absolute inset-0 z-10 h-40 bg-gradient-to-b from-[#100422] to-transparent"></div>
            <div className="absolute inset-0 top-160 z-10 h-40 bg-gradient-to-t from-[#100422] to-transparent"></div>
        </div>
    )
}
