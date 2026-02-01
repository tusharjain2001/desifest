import arrow from '../../Assets/media/yellowarrow.svg'

const EventCard = ({ image, title, date, description, readMoreLink }) => {
    return (
        <div className="relative w-[420px] flex-shrink-0 overflow-hidden bg-[#2A1B3D] p-3 text-white shadow-lg">
            {/* IMAGE */}
            <div className="relative h-35">
                <img src={image} alt={title} className="h-full w-full object-cover" />
                {/* subtle overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* CONTENT */}
            <div className="space-y-3 p-5">
                <h3 className="dm-sans-500 text-[28px] leading-snug">{title}</h3>

                <p className="dm-sans-400 text-[16px] font-medium text-[#8D8D8D]">{date}</p>

                <p className="dm-sans-300 tracking-wide text-[16px] text-white">{description}</p>
                <div className="flex items-center gap-2">
                    <a
                        href={readMoreLink}
                        className="oswaldd text-neon-yellow flex gap-2 text-[24px] underline transition-all hover:gap-3"
                    >
                        Read More
                    </a>
                    <div>
                        <img src={arrow} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard
