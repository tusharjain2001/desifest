import partner1 from '@/Assets/home/partnersupp/image.png'
import partner2 from '@/Assets/home/partnersupp/image copy.png'
import partner5 from '@/Assets/home/partnersupp/image copy 2.png'
import partner3 from '@/Assets/home/partnersupp/image copy 4.png'
import partner6 from '@/Assets/home/partnersupp/image copy 5.png'

const partners = [partner1, partner2, partner3, partner5, partner6]

const PartnerSupport = () => {
    return (
        <section className="w-full bg-transparent py-20 md:px-4">
            {/* Title */}
            <div className="mb-10 flex items-center justify-center gap-1 md:mb-16">
                <div className="h-[3px] flex-1 rounded-full bg-white" />

                <h2 className="text-center font-[Oswald] text-[24px] leading-[36px] font-medium whitespace-nowrap text-white uppercase sm:text-5xl sm:leading-[50px] md:leading-[80px]">
                    Partners & Sponsors
                </h2>

                <div className="h-[3px] flex-1 rounded-full bg-white" />
            </div>

            {/* Cards */}
            {/* Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-6 md:gap-10">
                {partners.map((logo, index) => (
                    <div
                        key={index}
                        className={`flex min-h-[110px] items-center justify-center rounded-2xl bg-[#FFFFFF1F] px-6 transition-[border-radius] duration-500 ease-in-out hover:rounded-[80px] sm:min-h-[140px] sm:rounded-3xl sm:px-10 sm:py-16 ${index === 0 ? 'col-span-2' : 'col-span-1'} md:${index < 2 ? 'col-span-3' : 'col-span-2'} `}
                    >
                        <img src={logo} alt="Partner Logo" className="max-h-20 object-contain" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PartnerSupport
