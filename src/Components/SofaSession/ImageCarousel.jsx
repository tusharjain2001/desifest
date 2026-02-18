import { useMemo, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

import a from '../../Assets/sofa_session/ssone.svg'
import b from '../../Assets/sofa_session/sstwo.svg'
import c from '../../Assets/sofa_session/ssthree.svg'
import d from '../../Assets/sofa_session/ssfour.svg'
import e from '../../Assets/sofa_session/ssfive.svg'

import leftarrow from '../../Assets/sofa_session/leftarrow.svg'
import rightarrow from '../../Assets/sofa_session/rightarrow.svg'
import outercircle from '../../Assets/sofa_session/outercircle.svg'
import innercircle from '../../Assets/sofa_session/innercircle.svg'

const images = [a, b, c, d, e]

const SLOTS = [
    { x: -720, scale: 0.7, opacity: 0.45, zIndex: 1 },
    { x: -360, scale: 0.85, opacity: 0.7, zIndex: 2 },
    { x: 0, scale: 1.25, opacity: 1, zIndex: 3 },
    { x: 360, scale: 0.85, opacity: 0.7, zIndex: 2 },
    { x: 720, scale: 0.7, opacity: 0.45, zIndex: 1 },
]

const OFF_LEFT = -1100
const OFF_RIGHT = 1100

function mod(n, m) {
    return ((n % m) + m) % m
}

export default function RealCarousel() {
    const n = images.length
    const [step, setStep] = useState(0)
    const [dir, setDir] = useState(1) // 1 = next →, -1 = prev ←

    const next = () => {
        setDir(1)
        setStep((p) => p + 1)
    }
    const prev = () => {
        setDir(-1)
        setStep((p) => p - 1)
    }

    const visible = useMemo(() => {
        return [-2, -1, 0, 1, 2].map((offset) => {
            const logicalPos = step + offset
            const idx = mod(logicalPos, n)
            return { key: logicalPos, src: images[idx], slot: offset + 2 }
        })
    }, [step, n])

    const enterFrom = dir === 1 ? OFF_RIGHT : OFF_LEFT
    const exitTo = dir === 1 ? OFF_LEFT : OFF_RIGHT

    return (
        <div className="mt-10 flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="relative mt-10 flex min-h-125 w-full items-center justify-center overflow-hidden">
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
                    {visible.map(({ key, src, slot }) => {
                        const s = SLOTS[slot]

                        return (
                            <motion.img
                                key={key}
                                src={src}
                                alt=""
                                className={`absolute object-cover rounded-[64px] ${slot === 2 ? 'rounded-full' : ''}`}
                                style={{ zIndex: s.zIndex }}
                                initial={{ x: enterFrom, scale: s.scale, opacity: 0 }}
                                animate={{ x: s.x, scale: s.scale, opacity: s.opacity }}
                                exit={{ x: exitTo, scale: s.scale, opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            />
                        )
                    })}
                </AnimatePresence>
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
