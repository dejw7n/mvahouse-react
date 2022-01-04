import React from "react";
import "./Home.css";
import houseFrontImg from "../../assets/img/mvahouse/front.jpg";
import sanovpark from "../../assets/img/sanovpark.jpg";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import ReserveApartmentNow from "./reserveApartmentNow";
import Intro from "../../components/Intro/Intro";

function Home() {
	const callouts = [
		{
			name: "Botanická zahrada",
			description: "400m",
			imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
			imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
			href: "#",
		},
		{
			name: "St. Clari",
			description: "950m",
			imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
			imageAlt: "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
			href: "#",
		},
		{
			name: "Doubravská Hora",
			description: "1,7km",
			imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
			imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
			href: "#",
		},
	];
	return (
		<main id="main-content">
			<Intro />
			<SearchPanel />
			<section className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
				<div className="max-w-4xl mx-auto lg:max-w-5xl">
					<div className="">
						<div className="md:width-1/2 grid content-around mr-6">
							<div className="">
								<h1 className="mt-1 text-lg font-semibold text-black md:text-2xl">Zarezervujte si apartmán nyní!</h1>
							</div>
						</div>
						<ReserveApartmentNow />
					</div>
				</div>
			</section>
			<section className="section">
				<div class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
					<div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
						<div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
							<h1 class="mt-1 text-lg font-semibold text-white sm:text-gray-900 md:text-2xl dark:sm:text-white">Aparthotel</h1>
							<p class="text-sm leading-4 font-medium text-white sm:text-gray-500 dark:sm:text-gray-400">Celý dům</p>
						</div>
						<div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
							<img src={houseFrontImg} alt="" class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"></img>
							<img src={houseFrontImg} alt="" class="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"></img>
							<img src={houseFrontImg} alt="" class="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"></img>
						</div>
						<dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
							<dd class="text-indigo-600 flex items-center dark:text-indigo-400">
								<svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
									<path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
								<span>
									4.89 <span class="text-gray-400 font-normal">(76)</span>
								</span>
							</dd>
							<dt class="sr-only">Location</dt>
							<dd class="flex items-center">
								<svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-gray-300">
									<circle cx="1" cy="1" r="1" />
								</svg>
								<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-gray-400 dark:text-gray-500" aria-hidden="true">
									<path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
									<path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
								</svg>
								Vrchlického 1240/23, Teplice 41501
							</dd>
						</dl>
						<div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
							<button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
								Zkontrolovat dostupnost
							</button>
						</div>
						<p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-gray-400">MVAhouse se nachází 2,1 km od stadionu Na Stínadlech. Nabízí ubytování s Wi-Fi zdarma a neplacené soukromé parkoviště. Ubytování je vybaveno lednicí, varnou deskou a rychlovarnou konvicí. Během pobytu můžete relaxovat na zahradě. Aparthotel stojí 67 km od letiště Václava Havla Praha.</p>
					</div>
				</div>
			</section>
			<section className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
				<div className="max-w-4xl mx-auto lg:max-w-5xl">
					<div className="md:flex">
						<div className="md:width-1/2 grid content-around mr-6">
							<div className="">
								<h1 className="mt-1 text-lg font-semibold text-black md:text-2xl">Místní zajimavosti</h1>
								<p class="mt-4 text-sm leading-6 lg:mt-6">Lokality které stojí za to navštívit v Teplicích...</p>
							</div>
						</div>
						<div className="mt-6 grid grid-cols-3 gap-x-6">
							{callouts.map((callout) => (
								<div key={callout.name} className="group relative">
									<div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
										<img src={callout.imageSrc} alt={callout.imageAlt} className="w-full h-full object-center object-cover" />
									</div>
									<h3 className="mt-6 text-sm text-gray-500">
										<a href={callout.href}>
											<span className="absolute inset-0" />
											{callout.name}
										</a>
									</h3>
									<p className="text-base font-semibold text-gray-900">{callout.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Home;
