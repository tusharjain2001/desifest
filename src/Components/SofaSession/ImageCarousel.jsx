import { useState, useRef, useEffect } from 'react'
import image from '../../Assets/sofa_session/carousel.svg'
import leftarrow from '../../Assets/sofa_session/leftarrow.svg'
import rightarrow from '../../Assets/sofa_session/rightarrow.svg'
import outercircle from '../../Assets/sofa_session/outercircle.svg'
import innercircle from '../../Assets/sofa_session/innercircle.svg'
const images = [image, image, image, image, image]

const SLIDE_WIDTH = 180 // px (side images)
const CENTER_WIDTH = 260 // px (center image)

export default function RealCarousel() {
    const [active, setActive] = useState(2)
    const containerRef = useRef(null)
    const [_offset, setOffset] = useState(0)

    useEffect(() => {
        const containerWidth = containerRef.current.offsetWidth
        const centerOffset = containerWidth / 2 - CENTER_WIDTH / 2
        const slideOffset = active * SLIDE_WIDTH
        setOffset(centerOffset - slideOffset)
    }, [active])

    return (
        <div
            ref={containerRef}
            className="mt-10 flex w-full flex-col items-center justify-center overflow-hidden"
        >
            {/* TRACK */}
            <div className="relative mt-10 flex min-h-125 w-full items-center justify-center gap-10 transition-transform duration-500 ease-out">
                {/* Circles - positioned absolutely on active image */}
                <img
                    src={outercircle}
                    className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    alt="outer circle"
                />
                <img
                    src={innercircle}
                    className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    alt="inner circle"
                />

                {images.map((img, i) => {
                    const isActive = i === active

                    return (
                        <img
                            key={i}
                            src={img}
                            style={{ transform: `translateX(${320 * (2 - active)}px)` }}
                            className={`relative object-cover transition-all duration-500 ${
                                isActive
                                    ? 'z-10 h-[400px] w-[400px] rounded-full'
                                    : 'h-[280px] w-[280px] rounded-2xl opacity-70'
                            } `}
                        />
                    )
                })}
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex">
                <button
                    onClick={() => setActive((p) => Math.max(p - 1, 0))}
                    className="px-4 py-2 text-white"
                >
                    <img src={leftarrow} />
                </button>
                <button
                    onClick={() => setActive((p) => Math.min(p + 1, images.length - 1))}
                    className="px-4 py-2 text-white"
                >
                    <img src={rightarrow} className="text-white" />
                </button>
            </div>
        </div>
    )
}
