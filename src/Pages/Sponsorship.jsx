import ContactForm from '@/Components/Home/ContactForm'
import Calendar from '@/Components/Sponsorship/Calendar'
import Videosp from '@/Components/Sponsorship/videosp'
import React from 'react'

const Sponsorship = () => {
    return (
        <div className='mx-auto px-2 flex flex-col w-full sm:pl-24'>
            <Videosp />
            <div className='text-white px-4 dm-sans-400 text-2xl'>
            We are excited to be back for our 18th annual DESIFEST – Toronto’s award winning South Asian Music Festival. This is a unique and proven marketing opportunity for your brand! Find a time below that work for us to get a on call and explore how you can tap into the power of multicultural marketing with DESIFEST 2024.
            </div>
            <Calendar />
            <ContactForm />
        </div>
    )
}

export default Sponsorship
