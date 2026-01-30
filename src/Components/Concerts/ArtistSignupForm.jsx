import { useState } from 'react'
import toast from 'react-hot-toast'

export default function ArtistSignupForm() {
    const events = ['Hip Hop Showcase', 'DJ Showcase', 'Desifest 2026', 'She Rocks EP4']
    const genres = [
        'BOLLYWOOD',
        'HIP-HOP',
        'ROCK',
        'BHANGRA',
        'RnB',
        'PUNJABI',
        'TAMIL FUSION',
        'CARNATIC FUSION',
        'CLASSICAL (HINDUSTANI/CARNATIC)',
        'SUFI / FOLK',
        'OTHER',
    ]

    // Form state
    const [selected, setSelected] = useState(events[0])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneCode, setPhoneCode] = useState('+91')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')

    const [facebook, setFacebook] = useState('')
    const [youtube, setYoutube] = useState('')
    const [instagram, setInstagram] = useState('')
    const [tiktok, setTiktok] = useState('')
    const [spotify, setSpotify] = useState('')
    const [website, setWebsite] = useState('')

    const [selectedGenre, setSelectedGenre] = useState('')
    const [otherGenre, setOtherGenre] = useState('')

    const [performanceLanguage, setPerformanceLanguage] = useState('')
    const [isBand, setIsBand] = useState('YES')
    const [performedBefore, setPerformedBefore] = useState('YES')
    const [performanceType, setPerformanceType] = useState('SINGER/RAPPER')
    const [socanRegistered, setSocanRegistered] = useState('YES')

    const [managerFirstName, setManagerFirstName] = useState('')
    const [managerLastName, setManagerLastName] = useState('')
    const [managerEmail, setManagerEmail] = useState('')
    const [managerPhoneCode, setManagerPhoneCode] = useState('+91')
    const [managerPhone, setManagerPhone] = useState('')

    const [pastLink1, setPastLink1] = useState('')
    const [pastLink2, setPastLink2] = useState('')
    const [pastLink3, setPastLink3] = useState('')
    const [pastLink4, setPastLink4] = useState('')

    const [ideas, setIdeas] = useState('')
    const [consent, setConsent] = useState(false)

    const [isSubmitting, setIsSubmitting] = useState(false)

    const emailError = email.length > 0 && !email.includes('@') ? 'Not a valid mailID' : ''

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!firstName || !email || !selected) {
            toast.error('Please fill all required fields')
            return
        }

        if (!consent) {
            toast.error('Please agree to be contacted')
            return
        }

        const toastId = toast.loading('Submitting artist application...')

        setIsSubmitting(true)

        const pastLinks = [pastLink1, pastLink2, pastLink3, pastLink4].filter(
            (link) => link.trim() !== ''
        )

        const formData = {
            event: selected,
            firstName,
            lastName,
            email,
            phoneCode,
            phone,
            address,
            city,
            province,
            postalCode,
            country,
            facebook,
            youtube,
            instagram,
            tiktok,
            spotify,
            website,
            genre: selectedGenre,
            otherGenre,
            performanceLanguage,
            isBand,
            performedBefore,
            performanceType,
            socanRegistered,
            managerFirstName,
            managerLastName,
            managerEmail,
            managerPhoneCode,
            managerPhone,
            pastLinks,
            ideas,
            consent,
        }

        try {
            const response = await fetch(
                'https://desifest-backend.vercel.app/api/send-artist-email',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                }
            )

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Submission failed')
            }

            toast.success('Application submitted successfully 🎉', {
                id: toastId,
            })

            // Reset form
            setFirstName('')
            setLastName('')
            setEmail('')
            setPhone('')
            setAddress('')
            setCity('')
            setProvince('')
            setPostalCode('')
            setCountry('')
            setFacebook('')
            setYoutube('')
            setInstagram('')
            setTiktok('')
            setSpotify('')
            setWebsite('')
            setSelectedGenre('')
            setOtherGenre('')
            setPerformanceLanguage('')
            setManagerFirstName('')
            setManagerLastName('')
            setManagerEmail('')
            setManagerPhone('')
            setPastLink1('')
            setPastLink2('')
            setPastLink3('')
            setPastLink4('')
            setIdeas('')
            setConsent(false)
        } catch (error) {
            toast.error(error.message || 'Network error. Please try again ❌', { id: toastId })
            console.error('Submit error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="text-blue-black mx-auto w-full bg-[#F6F3FA] p-6 md:p-10"
        >
            {/* CHOOSE EVENT */}
            <div className="mb-8 flex flex-col items-center justify-start gap-10 md:flex-row">
                <div className="text-blue-black text-2xl font-medium uppercase">
                    Choose Your Event
                </div>

                <div className="flex flex-wrap gap-3">
                    {events.map((item) => (
                        <label
                            key={item}
                            className={
                                'flex cursor-pointer items-center gap-2 border-2 px-4 py-2 text-xs font-medium uppercase transition ' +
                                (selected === item
                                    ? 'bg-light-lavender text-blue-black border-blue-black'
                                    : 'border-blue-black text-blue-black hover:text-blue-black')
                            }
                        >
                            <input
                                type="radio"
                                name="event"
                                value={item}
                                checked={selected === item}
                                onChange={() => setSelected(item)}
                                className="hidden"
                            />

                            <span
                                className={
                                    'flex h-3 w-3 items-center justify-center rounded-full border ' +
                                    (selected === item ? 'border-blue-black' : 'border-blue-black')
                                }
                            >
                                {selected === item && (
                                    <span className="bg-blue-black h-1.5 w-1.5 rounded-full" />
                                )}
                            </span>

                            {item}
                        </label>
                    ))}
                </div>
            </div>

            {/* BASIC INFO */}
            <div className="mb-10 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
                <Input
                    label="Name*"
                    placeholder=""
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                    label="Last Name"
                    placeholder="Enter your last name here"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <Input
                    label="Work Email*"
                    type="email"
                    placeholder="abcd@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                />

                {/* Phone with country code selector */}
                <div className="flex flex-col gap-1">
                    <label className="text-md text-blue-black">Phone</label>

                    <div className="flex items-center gap-2 border-b border-[#6F6486] py-2">
                        <select
                            className="text-blue-black bg-transparent text-sm outline-none"
                            value={phoneCode}
                            onChange={(e) => setPhoneCode(e.target.value)}
                        >
                            <option>+91</option>
                            <option>+1</option>
                            <option>+44</option>
                        </select>

                        <span className="text-[#6F6486]">|</span>

                        <input
                            type="tel"
                            placeholder="Enter your phone number here"
                            className="text-blue-black flex-1 bg-transparent text-sm outline-none placeholder:text-[#9C92B3]"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:col-span-2">
                    <label className="text-md text-blue-black">Address</label>

                    {/* Address line + City */}
                    <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
                        <Input
                            placeholder="Address Line*"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <Input
                            placeholder="Enter your City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    {/* Province / Postal / Country */}
                    <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-3">
                        <Input
                            placeholder="Enter your Province"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                        />
                        <Input
                            placeholder="Enter your Postal Code"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />

                        <div className="flex flex-col gap-1">
                            <select
                                className="border-b border-[#6F6486] bg-transparent py-2 text-sm text-[#9C92B3] outline-none"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option value="">Choose your country</option>
                                <option>India</option>
                                <option>United States</option>
                                <option>United Kingdom</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* SOCIAL MEDIA */}
            <SectionTitle text="Including your social media helps our team in the selection process" />

            <div className="mb-10 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
                <Input
                    label="Facebook"
                    placeholder="https://"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                />
                <Input
                    label="Youtube"
                    placeholder="https://"
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                />
                <Input
                    label="TikTok"
                    placeholder="https://"
                    value={tiktok}
                    onChange={(e) => setTiktok(e.target.value)}
                />
                <Input
                    label="Instagram"
                    placeholder="https://"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />
                <Input
                    label="Spotify"
                    placeholder="https://"
                    value={spotify}
                    onChange={(e) => setSpotify(e.target.value)}
                />
                <Input
                    label="Personal Website"
                    placeholder="https://"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
            </div>

            {/* GENRE */}
            <div className="mb-5">
                <p className="text-blue-black mb-4 text-sm font-semibold tracking-widest uppercase">
                    Genre
                </p>

                <div className="flex max-w-5xl flex-wrap items-center gap-3">
                    {genres.map((genre) => (
                        <button
                            key={genre}
                            type="button"
                            onClick={() => setSelectedGenre(genre)}
                            className={`border px-4 py-2 text-xs font-medium uppercase transition ${
                                selectedGenre === genre
                                    ? 'bg-light-lavender text-blue-black border-blue-black'
                                    : 'border-blue-black text-blue-black hover:text-blue-black'
                            }`}
                        >
                            {genre}
                        </button>
                    ))}

                    {selectedGenre === 'OTHER' && (
                        <input
                            type="text"
                            placeholder="OTHER :"
                            value={otherGenre}
                            onChange={(e) => setOtherGenre(e.target.value)}
                            className="border-blue-black placeholder:text-blue-black mt-2 w-full border-b bg-transparent py-2 text-sm focus:outline-none sm:mt-0 sm:ml-2 sm:w-60"
                        />
                    )}
                </div>
            </div>

            {/* PERFORMANCE INFO */}
            <div className="py-12">
                {/* ROW 1 */}
                <div className="flex w-full flex-col justify-between gap-x-24 gap-y-10 md:flex-row">
                    {/* Performance Language */}
                    <div className="flex-1">
                        <label className="text-blue-black mb-3 block text-sm font-semibold">
                            Performance Language*
                        </label>
                        <input
                            type="text"
                            placeholder="Include each language and separate using.."
                            className="border-blue-black placeholder:text-blue-black/50 w-full border-b bg-transparent py-2 text-sm focus:outline-none"
                            value={performanceLanguage}
                            onChange={(e) => setPerformanceLanguage(e.target.value)}
                        />
                    </div>

                    {/* Are you a band */}
                    <div className="flex-1">
                        <label className="text-blue-black mb-3 block text-sm font-semibold">
                            Are You A Band?*
                        </label>

                        <div className="flex items-start justify-between gap-6">
                            <div className="flex gap-4">
                                <RadioButton
                                    label="YES"
                                    checked={isBand === 'YES'}
                                    onClick={() => setIsBand('YES')}
                                />
                                <RadioButton
                                    label="NO"
                                    checked={isBand === 'NO'}
                                    onClick={() => setIsBand('NO')}
                                />
                                <p className="text-blue-black/60 max-w-xs text-xs">
                                    If you have multiple instruments, you are a band.
                                    <br />
                                    If you perform with a DJ, you are a solo artist.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ROW 2 */}
                <div className="mt-14 flex w-full flex-col justify-between gap-x-20 gap-y-10 md:flex-row">
                    {/* Previous DESIFEST */}
                    <div className="flex-1">
                        <label className="text-blue-black mb-3 block text-sm font-semibold">
                            Have You Performed At A Previous DESIFEST?*
                        </label>
                        <div className="flex gap-4">
                            <RadioButton
                                label="YES"
                                checked={performedBefore === 'YES'}
                                onClick={() => setPerformedBefore('YES')}
                            />
                            <RadioButton
                                label="NO"
                                checked={performedBefore === 'NO'}
                                onClick={() => setPerformedBefore('NO')}
                            />
                        </div>
                    </div>

                    {/* Type of performance */}
                    <div className="flex-1">
                        <label className="text-blue-black mb-3 block text-sm font-semibold">
                            Type Of Performance?*
                        </label>
                        <div className="flex gap-4">
                            <RadioButton
                                label="SINGER/RAPPER"
                                checked={performanceType === 'SINGER/RAPPER'}
                                onClick={() => setPerformanceType('SINGER/RAPPER')}
                            />
                            <RadioButton
                                label="DANCE"
                                checked={performanceType === 'DANCE'}
                                onClick={() => setPerformanceType('DANCE')}
                            />
                        </div>
                    </div>

                    {/* SOCAN / BMI */}
                    <div className="flex-1">
                        <label className="text-blue-black mb-3 block text-sm font-semibold">
                            Registered for SOCAN or BMI?*
                        </label>
                        <div className="flex gap-4">
                            <RadioButton
                                label="YES"
                                checked={socanRegistered === 'YES'}
                                onClick={() => setSocanRegistered('YES')}
                            />
                            <RadioButton
                                label="NO"
                                checked={socanRegistered === 'NO'}
                                onClick={() => setSocanRegistered('NO')}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* MANAGER */}
            <SectionTitle text="Do you have a Manager?" />

            <div className="mb-10">
                <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
                    <Input
                        label="Name*"
                        placeholder=""
                        value={managerFirstName}
                        onChange={(e) => setManagerFirstName(e.target.value)}
                    />

                    <Input
                        label="Last Name"
                        placeholder="Enter your last name here"
                        value={managerLastName}
                        onChange={(e) => setManagerLastName(e.target.value)}
                    />

                    <Input
                        label="Manager Email*"
                        type="email"
                        placeholder="abcd@gmail.com"
                        value={managerEmail}
                        onChange={(e) => setManagerEmail(e.target.value)}
                    />

                    {/* Manager Phone */}
                    <div className="flex flex-col gap-1">
                        <label className="text-blue-black text-sm">Manager Phone Number*</label>

                        <div className="flex items-center gap-2 border-b border-[#6F6486] py-2">
                            <select
                                className="text-blue-black bg-transparent text-sm outline-none"
                                value={managerPhoneCode}
                                onChange={(e) => setManagerPhoneCode(e.target.value)}
                            >
                                <option>+91</option>
                                <option>+1</option>
                                <option>+44</option>
                            </select>

                            <span className="text-[#6F6486]">|</span>

                            <input
                                type="tel"
                                placeholder="Enter your phone number here"
                                className="text-blue-black flex-1 bg-transparent text-sm outline-none placeholder:text-[#9C92B3]"
                                value={managerPhone}
                                onChange={(e) => setManagerPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    <Input
                        label="Past Performance Links 1*"
                        placeholder="https://"
                        value={pastLink1}
                        onChange={(e) => setPastLink1(e.target.value)}
                    />

                    <Input
                        label="Past Performance Links 2*"
                        placeholder="https://"
                        value={pastLink2}
                        onChange={(e) => setPastLink2(e.target.value)}
                    />

                    <Input
                        label="Past Performance Links 3*"
                        placeholder="https://"
                        value={pastLink3}
                        onChange={(e) => setPastLink3(e.target.value)}
                    />

                    <Input
                        label="Past Performance Links 4*"
                        placeholder="https://"
                        value={pastLink4}
                        onChange={(e) => setPastLink4(e.target.value)}
                    />
                </div>
            </div>

            <label className="flex items-center py-10">
                <input
                    type="checkbox"
                    className="text-blue-black mr-2 h-4 w-4 rounded border-gray-300"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                />
                I agree to be contacted about sponsorship opportunities
            </label>

            {/* AGREEMENT */}
            <div className="mb-10 flex flex-col gap-2">
                <label className="text-blue-black text-lg font-medium">
                    If you have any ideas on your set to help us put on a fantastic show, do share
                    them here.
                </label>

                <textarea
                    rows={2}
                    placeholder=""
                    className="text-blue-black w-full resize-none border-b border-[#6F6486] bg-transparent py-2 text-sm outline-none placeholder:text-[#9C92B3]"
                    value={ideas}
                    onChange={(e) => setIdeas(e.target.value)}
                />
            </div>

            {/* SUBMIT */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-neon-yellow p-3 text-xl font-bold uppercase shadow-md transition disabled:cursor-not-allowed disabled:opacity-50"
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>

            <div className="text-blue-black py-10 text-xl font-medium">
                Join our mailing list to learn about upcoming gigs, grants and workshops to help
                your music aspirations thrive.
            </div>
        </form>
    )
}

/* ---------- Reusable Components ---------- */

const RadioButton = ({ label, checked = false, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex items-center gap-2 border px-4 py-2 text-xs font-semibold uppercase transition ${
                checked
                    ? 'bg-light-lavender border-blue-black text-blue-black'
                    : 'border-blue-black text-blue-black'
            }`}
        >
            <span
                className={`border-blue-black flex h-3 w-3 items-center justify-center rounded-full border`}
            >
                {checked && <span className="bg-blue-black h-1.5 w-1.5 rounded-full" />}
            </span>
            {label}
        </button>
    )
}

function Input({ label, placeholder, error, type = 'text', value, onChange }) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-md text-blue-black">{label}</label>}

            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={
                    'text-blue-black border-b bg-transparent py-2 text-sm outline-none placeholder:text-[#9C92B3] ' +
                    (error ? 'border-red-500' : 'border-[#6F6486]')
                }
            />

            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    )
}

function SectionTitle({ text }) {
    return <p className="text-blue-black mb-4 uppercase md:text-xl md:font-medium">{text}</p>
}
