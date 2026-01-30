import { ArrowRight } from 'lucide-react'

const EventCard = ({ image, title, date, description, readMoreLink }) => {
    return (
        <div className="relative w-[320px] flex-shrink-0 overflow-hidden bg-[#2A1B3D] p-3 text-white shadow-lg">
            {/* IMAGE */}
            <div className="relative h-35">
                <img src={image} alt={title} className="h-full w-full object-cover" />
                {/* subtle overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* CONTENT */}
            <div className="space-y-3 p-5">
                <h3 className="dm-sans-500 text-2xl leading-snug">{title}</h3>

                <p className="font-['DM_Sans'] text-sm text-[#8D8D8D]">{date}</p>

                <p className="dm-sans-300 line-clamp-3 text-sm text-white">{description}</p>

                <a
                    href={readMoreLink}
                    className="oswaldd text-neon-yellow absolute bottom-4 inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
                >
                    Read More <ArrowRight size={16} />
                </a>
            </div>
        </div>
    )
}

export default EventCard
