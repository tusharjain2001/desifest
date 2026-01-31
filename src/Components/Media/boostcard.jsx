import arrow from '@/Assets/home/Community/ARROW.png'
const BoostCard = ({ image, title, description }) => {
    return (
        <div className="group relative w-120 flex h-140 mb-20 flex-col bg-[#2a1b3f] p-6 transition-all duration-300 hover:bg-[#31204a]">
            {/* Image */}
            <div className="mb-6 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
                />
            </div>

            {/* Title */}
            <h3 className="mb-4 text-4xl dm-sans-400  text-neon-yellow uppercase">{title}</h3>

            {/* Description */}
            <p className="text-xl dm-sans-400 leading-relaxed w-4/5 text-gray-300">{description}</p>

            {/* Arrow */}
            <div className="absolute right-6 bottom-0 transition-all duration-300 group-hover:translate-x-3">
                <img
                    src={arrow}
                    alt=""
                    className="mb-6 h-12 rotate-45 transition-all duration-300 ease-out group-hover:rotate-0"
                />
            </div>
        </div>
    )
}

export default BoostCard
