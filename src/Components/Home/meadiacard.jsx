import { ArrowRight } from "lucide-react";

const EventCard = ({
  image,
  title,
  date,
  description,
  readMoreLink,
}) => {
  return (
    <div className="sm:w-[384px] w-[288px]  sm:h-114 overflow-hidden z-30 relative p-3 bg-[#2A1B3D] text-white shadow-lg">
      
      {/* IMAGE */}
      <div className="relative h-35">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        <h3 className="text-2xl dm-sans-500 leading-snug">
          {title}
        </h3>

        <p className="text-sm font-['DM_Sans']  text-[#8D8D8D]">
          {date}
        </p>

        <p className="text-sm text-white dm-sans-300 line-clamp-3">
          {description}
        </p>

        <a
          href={readMoreLink}
          className="inline-flex absolute bottom-4 oswaldd items-center gap-2 text-neon-yellow font-medium hover:gap-3 transition-all"
        >
          Read More <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default EventCard;
