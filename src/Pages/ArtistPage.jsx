import Customcontact from '@/Components/Layout/Custom/customcontact'
import desktopImage from '@/Assets/artist/image.png'
import mobileImage from '@/Assets/artist/image copy 2.png'

const OurArtists = () => {
    return (
        <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#FFFFF]">
            <div className="z-20 mx-auto flex h-full w-full flex-col sm:pl-24">
                <Customcontact desktopImage={desktopImage} mobileImage={mobileImage} textcolour={"#100422"} />
            </div>
        </section>
    )
}

export default OurArtists
