import CommunityCard from './CommunityCard'

import img1 from '@/Assets/home/Community/image.png'
import img2 from '@/Assets/home/Community/image.png'
import img3 from '@/Assets/home/Community/image.png'

const Community = () => {
    return (
        <section className="w-full bg-transparent py-24 pl-6">
            <div className="w-full">
                <div className="oswald mb-4 flex w-full items-center gap-3 text-3xl text-white uppercase sm:gap-4 sm:text-4xl md:text-[100px]">
                    <span className="whitespace-nowrap">Community</span>

                    <div className="h-[2px] flex-1 rounded-full bg-white sm:h-[3px]" />
                </div>

                <div className="flex snap-x snap-mandatory flex-col items-center justify-start gap-16 overflow-x-auto p-4 pr-8 sm:snap-none sm:flex-row sm:justify-center sm:overflow-visible">
                    <CommunityCard image={img1} title="Year-Round Program" />

                    <CommunityCard
                        image={img2}
                        title="Open - Mic"
                        description="Canada’s largest South Asian music and arts festival—uniting generations, genres, and voices on one iconic stage."
                    />

                    <CommunityCard image={img3} title="Sofa Sessions" />
                </div>
            </div>
        </section>
    )
}

export default Community
