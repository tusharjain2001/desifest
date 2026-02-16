import { useMemo, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

import a from '../../Assets/sofa_session/carone.svg' // use your real images
import b from '../../Assets/sofa_session/cartwo.svg'
import c from '../../Assets/sofa_session/carone.svg'
import d from '../../Assets/sofa_session/carone.svg'
import e from '../../Assets/sofa_session/cartwo.svg'

import leftarrow from '../../Assets/sofa_session/leftarrow.svg'
import rightarrow from '../../Assets/sofa_session/rightarrow.svg'
import outercircle from '../../Assets/sofa_session/outercircle.svg'
import innercircle from '../../Assets/sofa_session/innercircle.svg'

const images = [a, b, c, d, e]

// 5 fixed slots (tweak x values until perfect for your design)
const INITIAL_SLOTS = [
    { x: -720, scale: 0.7, opacity: 0.45, zIndex: 1 }, // far left
    { x: -360, scale: 0.85, opacity: 0.7, zIndex: 2 }, // left
    { x: 0, scale: 1.25, opacity: 1, zIndex: 3 }, // center
    { x: 360, scale: 0.85, opacity: 0.7, zIndex: 2 }, // right
    { x: 720, scale: 0.7, opacity: 0.45, zIndex: 1 }, // far right
]

function mod(n, m) {
    return ((n % m) + m) % m
}

export default function RealCarousel() {
    const n = images.length
    const [active, setActive] = useState(2) // center initially (c)
    const slots = INITIAL_SLOTS
    // indices for visible 5: active-2 ... active+2
    const visible = useMemo(() => {
        return [-2, -1, 0, 1, 2].map((offset) => {
            const idx = mod(active + offset, n)
            return { idx, src: images[idx], slot: offset + 2 } // slot 0..4
        })
    }, [active, n])

    const next = () => setActive((p) => mod(p + 1, n))
    const prev = () => setActive((p) => mod(p - 1, n))

    return (
        <div className="mt-10 flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="relative mt-10 flex min-h-125 w-full items-center justify-center overflow-hidden">
                {/* circles fixed on center */}
                <img
                    src={outercircle}
                    className="pointer-events-none absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
                    alt="outer circle"
                />
                <img
                    src={innercircle}
                    className="pointer-events-none absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
                    alt="inner circle"
                />

                <AnimatePresence initial={false}>
                    {visible.map(({ idx, src, slot }) => {
                        const s = slots[slot]

                        return (
                            <motion.img
                                key={idx} // important: key by real index
                                src={src}
                                alt=""
                                className={`absolute object-cover ${slot === 2 ? 'rounded-full' : ''}`}

                                style={{ zIndex: s.zIndex }}
                                animate={{
                                    x: s.x,
                                    scale: s.scale,
                                    opacity: s.opacity,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1], // nice smooth ease
                                }}
                            />
                        )
                    })}
                </AnimatePresence>

                {/* sizes controlled separately (center bigger) */}
                {/* If you need exact sizes like your code, do it like this: */}
                {/*
          - keep all images same base size here
          - and use scale in slots to make center bigger
          - that feels smoother than snapping width/height
        */}
            </div>

            <div className="mt-10 flex">
                <button onClick={prev} className="px-4 py-2">
                    <img src={leftarrow} alt="left" />
                </button>
                <button onClick={next} className="px-4 py-2">
                    <img src={rightarrow} alt="right" />
                </button>
            </div>
        </div>
    )
}
