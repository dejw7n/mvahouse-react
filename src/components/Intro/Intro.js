import bgImg from "../../assets/img/header-min.webp";

export default function Intro() {
	return (
		<section className="h-[50vh] relative">
			<div className="bg-overlay"></div>
			<img src={bgImg} alt="" className="absolute w-full h-full object-cover" />
			<div className="w-full absolute top-1/2 transform -translate-y-1/2">
				<div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
					<div className="container max-w-4xl lg:max-w-5xl mx-auto">
						<h1 className="text-4xl text-white uppercase tracking-widest leading-loose">MVAhouse Capital company</h1>
					</div>
				</div>
			</div>
		</section>
	);
}
