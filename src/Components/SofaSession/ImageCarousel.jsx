import { useState, useRef, useEffect } from 'react'
import image from '../../Assets/sofa_session/carousel.svg'
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
            <div className="flex min-h-125 items-center transition-transform gap-10 duration-500 ease-out">
                {images.map((img, i) => {
                    const isActive = i === active

                    return (
                        <img
                            src={img}
                            style={{ transform: `translateX(${320 * (2 - active)}px)` }}
                            className={`object-cover transition-all duration-500 ${
                                isActive
                                    ? 'h-[400px] w-[400px] rounded-full'
                                    : 'h-[280px] w-[280px] rounded-2xl opacity-70'
                            } `}
                        />
                    )
                })}
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex gap-4">
                <button
                    onClick={() => setActive((p) => Math.max(p - 1, 0))}
                    className="border border-white px-4 py-2 text-white"
                >
                    ←
                </button>
                <button
                    onClick={() => setActive((p) => Math.min(p + 1, images.length - 1))}
                    className="border border-yellow-400 px-4 py-2 text-yellow-400"
                >
                    →
                </button>
            </div>
        </div>
    )
}
