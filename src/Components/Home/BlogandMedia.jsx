import EventCard from "./meadiacard";
import meadiaback from "@/Assets/home/Media/image copy.png";
import background from "@/Assets/home/Media/image.png";
// BLOG IMAGES
import blog1 from "@/Assets/home/Media/image1.png";
import blog2 from "@/Assets/home/Media/image2.png";
import blog3 from "@/Assets/home/Media/image3.png";

const BlogsAndMedia = () => {
	const blogs = [
		{
			id: 1,
			title: 'DESIFEST 2025 "We are Canadian" return...',
			date: "May 15, 2025",
			description:
				'DESIFEST 2025 Doubles Down on Canadian South Asian Talent with Bold "We Are Canadian" Return to Sankofa Square...',
			image: blog1,
			link: "/blog/desifest-2025",
		},
		{
			id: 2,
			title: "Open Mic Unplugged Brings Back...",
			date: "May 15, 2025",
			description:
				"Open Mic Unplugged Brings South Asian Music Back to the Heart of Gerrard Street May 31...",
			image: blog2,
			link: "/blog/open-mic-unplugged",
		},
		{
			id: 3,
			title: "A Typographic Legend: Jan Middendorp",
			date: "Jan 07, 2024",
			description:
				"Jan Middendorp (4/9/56–12/8/23) contributed an incredible wealth of knowledge to the field of typography...",
			image: blog3,
			link: "/blog/jan-middendorp",
		},
	];

	return (
		<section className="relative py-4 px-4 sm:px-8 lg:px-16 text-white overflow-hidden">
			{/* OVERLAY for readability (background already exists) */}
			<div className="relative z-20 max-w-7xl  mx-auto">
				<img
					src={meadiaback}
					alt="background"
					className=" absolute w-full -top-20 object-cover "
				/>

				{/* TITLE */}
				<h2 className="text-center text-4xl z-20 sm:text-5xl lg:text-6xl  oswald-heading text-neon-yellow tracking-wide mb-16">
					BLOGS & MEDIA
				</h2>

				{/* CARDS */}
				<div className="flex flex-wrap justify-center z-30 relative mt-48 gap-10">
					<img
						src={background}
						alt="background"
						className="absolute w-full z-0 -top-48 object-cover"
						style={{
							WebkitMaskImage: `
      linear-gradient(
        to top,
        rgba(0,0,0,0) 46%,
        rgba(0,0,0,1) 125%
      )
    `,
							maskImage: `
      linear-gradient(
        to top,
        rgba(0,0,0,0) 46%,
        rgba(0,0,0,1) 125%
      )
    `,
						}}
					/>

					{blogs.map((blog, index) => (
						<div
							key={blog.id}
							className={index === 1 ? "mt-20" : ""}
						>
							<EventCard
								image={blog.image}
								title={blog.title}
								date={blog.date}
								description={blog.description}
								readMoreLink={blog.link}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogsAndMedia;
