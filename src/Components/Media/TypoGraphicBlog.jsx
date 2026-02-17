/* eslint-disable no-unused-vars */
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const TypoGraphicBlog = () => {
    const socialLinks = [
        {
            name: 'Twitter',
            href: 'https://x.com/intent/post?text=A%20Typographic%20Legend%3A%20Jan%20Middendorp&url=https%3A%2F%2Fdesifest.ca%2Fa-typographic-legend-jan-middendorp%2F',
            icon: FaTwitter,
        },
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/sharer/sharer.php?u=https://desifest.ca/a-typographic-legend-jan-middendorp/',
            icon: FaFacebookF,
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fdesifest.ca%2Fa-typographic-legend-jan-middendorp%2F',
            icon: FaLinkedinIn,
        },
    ]

    return (
        <main className="relative mt-5 min-h-screen w-full bg-[#100422] px-6 py-16 text-white md:px-12 md:py-20 lg:px-20">
            <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#453361] blur-3xl" />
            </div>

            <article className="relative mx-auto w-full max-w-4xl">
                <h1 className="oswald-500 text-4xl leading-tight uppercase md:text-6xl">
                    A Typographic Legend: Jan Middendorp
                </h1>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#d6cfea] md:text-base">
                    <span>January 7, 2024</span>
                    <span className="text-neon-yellow">|</span>
                    <span>by andrealeksen</span>
                    <span className="text-neon-yellow">|</span>
                    <span>Uncategorized</span>
                </div>

                <div className="mt-8 h-[2px] w-full bg-white/20" />

                <div className="dm-sans-400 mt-10 space-y-8 text-base leading-8 text-[#f5f1fb] md:text-lg">
                    <p>
                        Jan Middendorp (4/9/56-12/8/23) contributed an incredible wealth of
                        knowledge to the field of typography and was an integral part of our
                        typographic family. I met Jan at my first TypeCon conference in Milwaukee in
                        2012. He was one of my first type design mentors, who offered business
                        advice, type critiques, and introduced me to invaluable new contacts in the
                        field. Jan was at almost every one of the larger type conferences, and I can
                        vividly see him sitting in the lobby with his backpack slouched next to him,
                        giving critiques to students or discussing the latest type controversies
                        with colleagues. He published a great number of typography books that were
                        not only jam packed with knowledge, but also beautifully designed, and
                        written with a fresh, approachable style. I used his textbook "Shaping Text"
                        in my Intro to Typography courses over the years, not only because it was
                        thorough, but also because he knew how to draw students in with inviting
                        content, with subheads like "Seducing with Type".
                    </p>

                    <p>
                        The conference talks are often enlightening, but the great networking and
                        real fun happens after the talks, with dinner, drinks, and dancing. I found
                        out that Jan was not only the center of many professional talks at the
                        conferences, but also the life of the party, in his own quiet way. One night
                        in Milwaukee, several of us went to a bar called the SafeHouse, where we had
                        to do the chicken dance to get inside. Jan didn't miss a beat! I so wish I
                        had a photo of that moment. Over the years there were countless type
                        conferences...with paella on the beach in Barcelona, a dance floor packed
                        with type designers at a German bar in Amsterdam, and beautiful rooftop
                        happy hours in many cities across the globe. The photo, above, is from the
                        2018 Kerning Conference in Faenza, Italy, when Jan and I went for a coffee
                        and walk around the farmer's market, and he told me about his illness. Due
                        to the pandemic, it ended up being our final goodbye.
                    </p>

                    <p>
                        Our international type community is small, and a bright light has been lost
                        this last year. I am immeasurably grateful for the ways that Jan Middendorp
                        changed not only our type community, but also for the countless ways in
                        which he impacted both my career and personal life. May your memory live on,
                        dear Jan!
                    </p>
                </div>

                <div className="mt-12 flex items-center gap-4">
                    {socialLinks.map(({ name, href, icon: Icon }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            className="hover:border-neon-yellow hover:text-neon-yellow flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/5 transition"
                        >
                            <Icon className="text-base" />
                        </a>
                    ))}
                </div>
            </article>
        </main>
    )
}

export default TypoGraphicBlog
