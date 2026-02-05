import { useOutletContext } from 'react-router-dom'

import Herosec from '@/Components/OpenMic/Herosec'
import Popularart from '@/Components/OpenMic/Popularart'
import Featuredartist from '@/Components/OpenMic/Featuredartist'
import Customcontact from '@/Components/Layout/Custom/customcontact'
import desktopImage from '@/Assets/openmic/image copy.png'
import mobileImage from '@/Assets/openmic/image copy 2.png'

const OpenMic = () => {
    const { bgColor } = useOutletContext()

    return (
        <section
            className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden"
            style={{ backgroundColor: bgColor }}
        >
            <Herosec bgColor={bgColor} />
            <div className="z-20 mx-auto flex h-full w-full flex-col sm:pl-24">
                <Popularart />
                <Featuredartist />
                <Customcontact desktopImage={desktopImage} mobileImage={mobileImage} />
            </div>
        </section>
    )
}

export default OpenMic
