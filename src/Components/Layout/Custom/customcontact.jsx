import { useState } from 'react'
import toast from 'react-hot-toast'

const ContactForm = ({ desktopImage, mobileImage }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        consent: false,
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill all required fields')
            return
        }

        if (!formData.consent) {
            toast.error('Please agree to be contacted')
            return
        }

        const toastId = toast.loading('Sending message...')

        try {
            setLoading(true)

            const res = await fetch('https://desifest-backend.vercel.app/api/send-contact-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong')
            }

            toast.success('Message sent successfully ✨', { id: toastId })

            setFormData({
                name: '',
                email: '',
                message: '',
                consent: false,
            })
        } catch (err) {
            toast.error(err.message || 'Failed to send message ❌', {
                id: toastId,
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <section
            id="contact"
            className="relative flex min-h-screen w-full flex-col overflow-hidden bg-transparent md:flex-row"
        >
            {/* IMAGE SECTION */}
            {/* DESKTOP IMAGE */}
            <div className="relative px-0 mx-0 hidden w-full md:block md:basis-[40%]">
                <img
                    src={desktopImage}
                    alt="Crowd"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            {/* MOBILE IMAGE */}
            <div className="relative w-full md:hidden">
                <img
                    src={mobileImage}
                    alt="Crowd"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            {/* FORM SECTION */}
            <div className="relative flex w-full items-center px-6 py-12 md:basis-[60%] md:px-1 md:py-0">
                <div className="w-full max-w-xl text-white">
                    <h2 className="font-[Oswald] text-6xl font-bold uppercase md:text-5xl">
                        Contact Us
                    </h2>

                    <p className="text-md mt-2 text-gray-300 uppercase">
                        Have an inquiry? We’ll be happy to assist you
                    </p>

                    <div className="my-6 hidden h-[2px] w-24 bg-white md:block" />

                    <form className="mt-5 space-y-6 md:mt-0" onSubmit={handleSubmit}>
                        <div>
                            <label className="text-md">Name*</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-b border-white/40 bg-transparent py-2 outline-none focus:border-white"
                            />
                        </div>

                        <div>
                            <label className="text-md">Work Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-b border-white/40 bg-transparent py-2 outline-none focus:border-white"
                            />
                        </div>

                        <div>
                            <label className="text-md">Message*</label>
                            <textarea
                                rows={3}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message here"
                                className="w-full resize-none border-b border-white/40 bg-transparent py-2 outline-none"
                            />
                        </div>

                        <div className="text-md flex items-start gap-3 text-gray-300">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                className="mt-1"
                            />
                            <span>I agree to be contacted about sponsorship opportunities</span>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-neon-yellow oswaldd mt-4 px-8 py-3 text-[28px] font-medium text-black transition hover:bg-lime-300 hover:opacity-90 disabled:opacity-50"
                        >
                            {loading ? 'SENDING...' : 'SUBMIT'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
