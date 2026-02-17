import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { CalendarDays, Clock3, MapPin } from 'lucide-react'

const OpenMicUnpluggedBlog = () => {
    const socialLinks = [
        { name: 'Twitter', href: '#', icon: FaTwitter },
        { name: 'Facebook', href: '#', icon: FaFacebookF },
        { name: 'LinkedIn', href: '#', icon: FaLinkedinIn },
    ]

    return (
        <main className="relative min-h-screen w-full bg-[#100422] mt-4 px-6 py-16 text-white md:px-12 md:py-20 lg:px-20">
            <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#453361] blur-3xl" />
            </div>

            <article className="relative mx-auto w-full max-w-4xl">
               
                <h1 className="oswald-500 text-3xl leading-tight uppercase md:text-6xl">
                    Open Mic Unplugged Brings South Asian Music Back to the Heart of Gerrard Street
                </h1>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#d6cfea] md:text-base">
                    <span>May 17, 2025</span>
                    <span className="text-neon-yellow">|</span>
                    <span>by Sathish Bala</span>
                    <span className="text-neon-yellow">|</span>
                    <span>MUSIC</span>
                </div>

                <div className="mt-8 h-[2px] w-full bg-white/20" />

                <div className="dm-sans-400 mt-10 space-y-6 text-base leading-8 text-[#f5f1fb] md:text-lg">
                    <div className="space-y-4 rounded-2xl border border-white/15 bg-white/[0.03] p-5 md:p-7">
                        <p className="font-semibold uppercase">PRESS RELEASE</p>
                        <p className="italic uppercase text-[#d6cfea]">FOR IMMEDIATE RELEASE</p>
                        <p className="text-xl font-bold md:text-3xl">
                            Open Mic Unplugged Brings South Asian Music Back to the Heart of Gerrard
                            Street
                        </p>

                        <div className="space-y-3 text-[#efe7ff]">
                            <div className="flex items-start gap-3 italic">
                                <MapPin className="mt-1 h-5 w-5 text-neon-yellow" />
                                <span>Lahore Tikka House, Gerrard Street East, Toronto</span>
                            </div>
                            <div className="flex items-start gap-3 italic">
                                <CalendarDays className="mt-1 h-5 w-5 text-neon-yellow" />
                                <span>Saturday, May 31, 2025</span>
                            </div>
                            <div className="flex items-start gap-3 italic">
                                <Clock3 className="mt-1 h-5 w-5 text-neon-yellow" />
                                <span>Doors open at 7:00 PM | Show runs until 10:00 PM</span>
                            </div>
                        </div>
                    </div>

                    <p>
                        Toronto, ON - As part of South Asian Heritage Month, DESIFEST proudly
                        launches <span className="font-semibold text-white">Open Mic Unplugged</span>,
                        a new concert series dedicated to acoustic storytelling, cultural fusion, and
                        community connection. This special inaugural edition takes place at one of
                        Toronto's most iconic venues -{' '}
                        <span className="font-semibold text-white">Lahore Tikka House</span>.
                    </p>

                    <p>
                        More than a restaurant, Lahore Tikka House is a symbol of community
                        resilience. Started with just $5 by the late Alnoor Sayani, it has become a
                        cultural landmark in Little India - serving not only incredible food, but
                        generations of South Asians looking for a taste of home. Hosting Open Mic
                        Unplugged here, is our way of honouring that legacy and continuing the mission
                        of building community through culture.
                    </p>

                    <blockquote className="rounded-xl border-l-4 border-neon-yellow bg-white/[0.03] px-5 py-4 text-white">
                        <span className="font-semibold">
                            "We're proud to partner with Lahore Tikka House and the Gerrard BIA to
                            bring live music back to the streets of Gerrard,"
                        </span>{' '}
                        says <span className="font-semibold">Sathish Bala</span>, founder of DESIFEST
                        and co-host of the event.{' '}
                        <span className="font-semibold">
                            "This isn't just about a show - it's about honouring our roots, elevating
                            emerging voices, and making sure culture lives in our neighborhoods, not
                            just on big stages."
                        </span>
                    </blockquote>

                    <p>
                        Curated by <span className="font-semibold text-white">Dee Devan</span> and
                        hosted by <span className="font-semibold text-white">SatsB</span>, Open Mic
                        Unplugged will feature a raw and dynamic mix of music - from Bollywood
                        ballads and Tamil acoustic sets to Indie Fusion, R&B, and spoken word. Many
                        of the performers have grown through DESIFEST's monthly open mic nights and
                        are now stepping into the spotlight for this intimate showcase.
                    </p>

                    <p className="font-semibold uppercase">ABOUT THE VENUE & MENU</p>
                    <p>Lahore Tikka House will serve a special menu throughout the evening, including:</p>
                    <ul className="list-disc space-y-1 pl-6 marker:text-neon-yellow">
                        <li>Chicken & Paneer Tikka</li>
                        <li>Fresh naan & Tandoori platters</li>
                        <li>Samosas, Pakoras & Street-style snacks</li>
                        <li>Mango lassi, Chai & Classic South Asian desserts</li>
                    </ul>

                    <p className="font-semibold uppercase">TICKETS</p>
                    <p>- Early Bird: $20</p>
                    <p>- General Admission: $25</p>
                    <p>- At the Door: $35</p>
                    <p>Limited seating - reserve early to guarantee your spot.</p>

                    <p className="font-semibold uppercase">ABOUT GERRARD INDIA BAZAAR</p>
                    <p>
                        Nicknamed "Little India," Gerrard India Bazaar is one of Toronto's richest
                        cultural corridors - home to a vibrant mix of food, art, and tradition. It
                        remains a vital space for celebrating South Asian identity and expression in
                        the city. Celebrate the community. Support local talent. Taste the culture.
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
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/5 transition hover:border-neon-yellow hover:text-neon-yellow"
                        >
                            <Icon className="text-base" />
                        </a>
                    ))}
                </div>
            </article>
        </main>
    )
}

export default OpenMicUnpluggedBlog
