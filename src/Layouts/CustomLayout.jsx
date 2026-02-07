import { Outlet } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import EventNavbar from '@/Components/Layout/Custom/customnavbar'
import EventFooter from '@/Components/Layout/Custom/customfooter'
import CustomVerticalNav from '@/Components/Layout/Custom/customverticalnavbar'
import ScrollToTop from './ScrollToTop'

export default function CustomLayout({footerColor }) {
    const scrollRef = useRef(null)
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        const onScroll = () => setScrollY(el.scrollTop)
        el.addEventListener('scroll', onScroll, { passive: true })
        onScroll()

        return () => el.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div ref={scrollRef} className="scrollbar-hide h-screen w-full overflow-y-auto">
            {/* Same as MainLayout */}
            <ScrollToTop scrollRef={scrollRef} />

            {/* Custom Vertical Navbar */}
            <CustomVerticalNav className="z-20" />

            <div className="flex min-h-full flex-col">
                {/* Custom Navbar */}
                <EventNavbar />

                <main className="w-full flex-1">
                    <Outlet context={{ scrollRef, scrollY }} />
                </main>

                {/* Custom Footer */}
                <EventFooter className="relative z-50" footerColor={footerColor} />
            </div>
        </div>
    )
}
