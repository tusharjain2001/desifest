import ontarioTrillium from '@/Assets/home/govtsupp/image.png'
import ontarioCreates from '@/Assets/home/govtsupp/image copy.png'
import factor from '@/Assets/home/govtsupp/image copy 2.png'
import torontoArts from '@/Assets/home/govtsupp/image copy 3.png'
import cityToronto from '@/Assets/home/govtsupp/image copy 4.png'
import canada from '@/Assets/home/govtsupp/image copy 5.png'

const sponsors = [ontarioTrillium, ontarioCreates, factor, torontoArts, cityToronto, canada]

const GovernmentSupport = () => {
    return (
        <section className="w-full bg-transparent pb-14 md:px-4 md:py-20">
            {/* Title */}
            <div className="mb-10 flex items-center justify-center gap-1 md:mb-16">
                <div className="h-0.75 flex-1 rounded-full bg-white" />

                <h2 className="text-center font-[Oswald] text-[28px] leading-9 font-medium whitespace-nowrap text-white uppercase sm:text-[40px] sm:leading-12.5 md:text-[64px] md:leading-20">
                    Government Support
                </h2>

                <div className="h-0.75 flex-1 rounded-full bg-white" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-10 lg:grid-cols-3">
                {sponsors.map((logo, index) => (
                    <div
                        key={index}
                        className="flex min-h-27.5 items-center justify-center rounded-2xl bg-[#FFFFFF1F] px-6 transition-[border-radius] delay-0 duration-500 ease-in-out hover:rounded-[999px] sm:min-h-35 sm:rounded-3xl sm:px-10"
                    >
                        <img
                            src={logo}
                            alt="Government Support Logo"
                            className="max-h-12 object-contain sm:max-h-16 md:max-h-20"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default GovernmentSupport
