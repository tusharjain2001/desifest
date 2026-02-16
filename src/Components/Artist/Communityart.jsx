import { useRef, useState, useEffect } from 'react'
import Silder1 from '../../Assets/artist/Silder/Silder1.png'
import Silder2_1 from '../../Assets/artist/Silder/Silder2.1.png'
import Silder2_2 from '../../Assets/artist/Silder/Silder2.2.png'
import Silder2_3 from '../../Assets/artist/Silder/Silder2.3.png'
import Silder2_4 from '../../Assets/artist/Silder/Silder2.4.png'
import Silder3 from '../../Assets/artist/Silder/Silder3.png'
import Silder4_1 from '../../Assets/artist/Silder/Silder4.1.png'
import Silder4_2 from '../../Assets/artist/Silder/Silder4.2.png'
import Silder4_3 from '../../Assets/artist/Silder/Silder4.3.png'
import Silder4_4 from '../../Assets/artist/Silder/Silder4.4.png'
import Silder5 from '../../Assets/artist/Silder/Silder5.png'
import Silder6_1 from '../../Assets/artist/Silder/Silder6.1.png'
import Silder6_2 from '../../Assets/artist/Silder/Silder6.2.png'
import Silder6_3 from '../../Assets/artist/Silder/Silder6.3.png'
import Silder6_4 from '../../Assets/artist/Silder/Silder6.4.png'
import Silder7 from '../../Assets/artist/Silder/Silder7.png'
import Silder8_1 from '../../Assets/artist/Silder/Silder8.1.png'
import Silder8_2 from '../../Assets/artist/Silder/Silder8.2.png'
import Silder8_3 from '../../Assets/artist/Silder/Silder8.3.png'
import Silder8_4 from '../../Assets/artist/Silder/Silder8.4.png'
import Silder9 from '../../Assets/artist/Silder/Silder9.png'
import Silder10_1 from '../../Assets/artist/Silder/Silder10.1.png'
import Silder10_2 from '../../Assets/artist/Silder/Silder10.2.png'
import Silder10_3 from '../../Assets/artist/Silder/Silder10.3.png'
import Silder10_4 from '../../Assets/artist/Silder/Silder10.4.png'
import Silder11 from '../../Assets/artist/Silder/Silder11.png'
import Silder12_1 from '../../Assets/artist/Silder/Silder12.1.png'
import Silder12_2 from '../../Assets/artist/Silder/Silder12.2.png'
import Silder12_3 from '../../Assets/artist/Silder/Silder12.3.png'
import Silder12_4 from '../../Assets/artist/Silder/Silder12.4.png'
import Silder13 from '../../Assets/artist/Silder/Silder13.png'

const Communityart = () => {
    const scrollRef = useRef(null)
    const bigRefs = useRef([])
    const [activeIndex, setActiveIndex] = useState(0)

    const bigImages = [
        { img: Silder1, name: 'queens of bollywood' },
        { img: Silder3, name: 'spitty' },
        { img: Silder5, name: 'Yanchan' },
        { img: Silder7, name: 'desiriff' },
        { img: Silder9, name: 'anchante' },
        { img: Silder11, name: 'Bollywood duet' },
        { img: Silder13, name: 'muse box' },
    ]

    const handleScroll = () => {
        const container = scrollRef.current
        const containerCenter = container.offsetWidth / 2 + container.scrollLeft

        let closestIndex = 0
        let closestDistance = Infinity

        bigRefs.current.forEach((el, index) => {
            if (!el) return
            const elCenter = el.offsetLeft + el.offsetWidth / 2
            const distance = Math.abs(containerCenter - elCenter)

            if (distance < closestDistance) {
                closestDistance = distance
                closestIndex = index
            }
        })

        setActiveIndex(closestIndex)
    }

    useEffect(() => {
        const container = scrollRef.current
        container.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => container.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="w-full overflow-hidden py-10">

            <div
                ref={scrollRef}
                className="no-scrollbar flex items-center overflow-x-auto gap-16 px-10"
            >

                {bigImages.map((item, index) => (
                    <BigCircle
                        key={index}
                        ref={(el) => (bigRefs.current[index] = el)}
                        img={item.img}
                        name={item.name}
                        isActive={activeIndex === index}
                    />
                ))}

            </div>

        </div>
    )
}

export default Communityart


const BigCircle = React.forwardRef(({ img, name, isActive }, ref) => {
    return (
        <div
            ref={ref}
            className="relative flex-shrink-0 transition-all duration-500"
        >
            <img
                src={img}
                alt={name}
                draggable="false"
                className={`h-[280px] w-[280px] object-cover transition-all duration-500 ${
                    isActive ? 'rounded-[45px]' : 'rounded-full'
                }`}
            />

            <div
                className={`absolute bottom-0 w-full transition-all duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="rounded-[45px] bg-[#10042299] py-8 text-center text-xl text-white uppercase">
                    {name}
                </div>
            </div>

            <div
                className={`absolute -right-28 -bottom-28 flex h-120 w-120 items-center justify-center transition-all duration-700 ${
                    isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                }`}
            >
                <div className="absolute inset-24 rounded-[45px] border border-black/90" />
                <div className="absolute inset-16 rounded-[45px] border border-black/60" />
                <div className="absolute inset-8 rounded-[45px] border border-black/30" />
                <div className="absolute inset-0 rounded-[45px] border border-black/10" />
            </div>
        </div>
    )
})
