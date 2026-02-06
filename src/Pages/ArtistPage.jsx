import Customcontact from '@/Components/Layout/Custom/customcontact'
import desktopImage from '@/Assets/artist/image.png'
import mobileImage from '@/Assets/artist/image copy 2.png'
import ArtHero from '@/Components/Artist/ArtHero'
import FeaturedArt from '@/Components/Artist/FeaturedArt'
import Communityart from '@/Components/Artist/Communityart'

const OurArtists = () => {
    return (
        <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#FFFFF]">
           <ArtHero />
            <div className="z-20 mx-auto flex h-full w-full flex-col sm:pl-24">
              <FeaturedArt />
              <Communityart />
                <Customcontact desktopImage={desktopImage} mobileImage={mobileImage} textcolour={"#100422"} />
            </div>
        </section>
    )
}

export default OurArtists
