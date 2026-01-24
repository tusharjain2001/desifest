import artist from "@/Assets/home/artist.png";
import backgroung1 from "@/Assets/home/background_1.png";
import contactusimg from "@/Assets/home/Contact_us_bg.png";
import GovernmentSupport from "@/Components/Home/GovernmentSupport";
import PartnerSupport from "@/Components/Home/PartnerSupport";

const HomePage = () => {
	return (
		<div className="relative min-h-screen w-full overflow-hidden">
			{/* Background image */}
			<img
				src={backgroung1}
				alt="background"
				className="absolute inset-0 w-full h-screen object-cover opacity-[0.16]"
			/>

			{/* Gradient overlay */}
			<div
				className="absolute inset-0"
				style={{
					background:
						"linear-gradient(324deg, #000000 -0.34%, rgba(0, 0, 0, 0) 56.45%)",
				}}
			/>
			{/* Decorative artist image */}
			<div className="w-screen h-screen"></div>

			{/* Content */}
			<div className="relative z-10 ml-24">
				<GovernmentSupport />
				<PartnerSupport />

				{/* Contact US  */}
				<section className="relative w-full min-h-screen flex bg-transparent overflow-hidden ">
					{/* LEFT IMAGE – 40% */}
					<div className="relative hidden md:block basis-[40%] ">
						<img
							src={contactusimg}
							alt="Crowd"
							className="absolute inset-0 w-full h-full object-cover"
						/>
						<div
							className="absolute inset-0 pointer-events-none"
							style={{
								background:
									"linear-gradient(90deg, rgb(16 4 34 / 32%) 13.64%, rgb(16, 4, 34) 99.85%)",
							}}
						/>
					</div>

					{/* RIGHT FORM – 60% */}
					<div className="relative w-full md:basis-[60%] flex items-center px-6 md:px-16">
						<div className="w-full max-w-xl text-white">
							{/* Heading */}
							<h2 className="text-5xl md:text-4xl font-[Oswald] font-medium tracking-wide">
								CONTACT US
							</h2>
							<p className="mt-2 text-sm text-gray-300 uppercase">
								Have an inquiry? We’ll be happy to assist you
							</p>

							{/* Divider */}
							<div className="w-24 h-[2px] bg-white my-6" />

							{/* Form */}
							<form className="space-y-6">
								{/* Name */}
								<div>
									<label className="text-sm">Name*</label>
									<input
										type="text"
										className="w-full bg-transparent border-b border-white/40 py-2 outline-none focus:border-white"
									/>
								</div>

								{/* Email */}
								<div>
									<label className="text-sm">
										Work Email*
									</label>
									<input
										type="email"
										defaultValue=""
										className="w-full bg-transparent border-b "
									/>
									
								</div>

								{/* Message */}
								<div>
									<label className="text-sm">Message*</label>
									<textarea
										rows={3}
										placeholder="Type your message here"
										className="w-full bg-transparent border-b border-white/40 py-2 outline-none resize-none"
									/>
								</div>

								{/* Checkbox */}
								<div className="flex items-start gap-3 text-sm text-gray-300">
									<input type="checkbox" className="mt-1" />
									<span>
										I agree to be contacted about
										sponsorship opportunities
									</span>
								</div>

								{/* Submit */}
								<button
									type="submit"
									className="bg-neon-yellow text-black font-bold px-8 py-3 mt-4 hover:opacity-90 transition"
								>
									SUBMIT
								</button>
							</form>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default HomePage;
