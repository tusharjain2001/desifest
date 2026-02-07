import { useOutletContext } from 'react-router-dom'

import Herosec from '@/Components/OpenMic/Herosec'
import Popularart from '@/Components/OpenMic/Popularart'
import Featuredartist from '@/Components/OpenMic/Featuredartist'
import Customcontact from '@/Components/Layout/Custom/customcontact'
import desktopImage from '@/Assets/openmic/image copy.png'
import mobileImage from '@/Assets/openmic/image copy 2.png'

import bgimgv from '@/Assets/openmic/framew/Frame.png'
import bgimgh from '@/Assets/openmic/framew/Framel.png'

const OpenMic = () => {
    return (
        <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#0136FE]">
            <Herosec />
            <div className="z-20 mx-auto flex h-full w-full flex-col sm:pl-24">
                <div className='w-full h-full relative'>
                    <img src={bgimgh} alt="" className='absolute w-full h-full'/>
                    <img src={bgimgv} alt="" className='absolute w-full h-full'/>
                    <Popularart />
                    <Featuredartist />
                </div>
                <Customcontact desktopImage={desktopImage} mobileImage={mobileImage} />
            </div>
        </section>
    )
}

export default OpenMic
