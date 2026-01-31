import BoostCard from './boostcard'
import blog456 from '@/Assets/media/BWBG.png'
const boostData = [
    {
        image: blog456,
        title: 'Digital',
        description:
            'We use paid media across Facebook, YouTube, Instagram, TikTok, and display advertising to reach and attract our fans.',
    },
    {
        image: blog456,
        title: 'Artists',
        description:
            'Our combined social media reach has increased drastically, growing at a year-over-year pace of nearly 47% from 2022.',
    },
    {
        image: blog456,
        title: 'Traditional',
        description:
            'The PR team works to get coverage in mainstream media in conjunction with TV partners and local newspapers and radio.',
    },
    {
        image: blog456,
        title: 'Influencers',
        description:
            'There is a growing influencer roster at DESIFEST, and their collective reach exceeds 1 billion followers.',
    },
]

const Boost = () => {
    return (
        <>
            {/* Header */}
            <div className="oswald-500 mb-10 flex w-full items-center gap-3 text-3xl text-white uppercase sm:gap-4 sm:text-5xl">
                <span className="whitespace-nowrap">Boost Outreach</span>
                <div className="h-[2px] flex-1 rounded-full bg-white sm:h-[3px]" />
            </div>

            {/* Cards */}
            <div className="scrollbar-hide flex gap-8 overflow-x-auto">
                {boostData.map((item, index) => (
                    <div key={index}>
                        <BoostCard {...item} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Boost
