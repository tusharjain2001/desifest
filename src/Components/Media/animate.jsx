'use client'

import { useEffect, useRef } from 'react'
import Blackandwhite from '@/Assets/media/image copy.png'
import Rgbbg from '@/Assets/media/image.png'

const baseImages = [Blackandwhite, Rgbbg]

// Improved column configuration
const columnSettings = [
  { speed: 0.01, direction: -1, initialOffset: 0 },
  { speed: 0.05, direction: 1, initialOffset: -600 },
  { speed: 0.1, direction: -1, initialOffset: 0 },
  { speed: 0.02, direction: 1, initialOffset: -600 },
]

const Animate = ({ scrollY = 0, scrollRef }) => {
  const refs = useRef([])

  const generateImages = (count, offset = 0) =>
    Array.from({ length: count }, (_, i) => baseImages[(i + offset) % baseImages.length])

  useEffect(() => {
    const y = scrollY ?? 0

    refs.current.forEach((el, i) => {
      if (!el) return

      const { speed, direction, initialOffset } = columnSettings[i]

      const translate = initialOffset + y * speed * direction
      el.style.transform = `translateY(${translate}px)`
    })
  }, [scrollY])

  return (
    <div
      ref={scrollRef}
      className="relative flex h-full gap-[2vw] overflow-hidden bg-transparent sm:pl-25 px-[2vw]"
    >
      {columnSettings.map((_, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="flex w-1/4 min-w-[250px] flex-col gap-[2vw] will-change-transform"
        >
          {generateImages(6, i).map((src, index) => (
            <div key={index} className="relative h-80 w-full overflow-hidden">
              <img
                src={src}
                alt="gallery"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Animate