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
			name: "Botanická zahrada v Teplicích",
			description: "900m (12 minutes walk)",
			imageSrc: require("../../assets/img/botanickazahrada.jpg").default,
			imageAlt: "",
			href: "https://www.google.com/maps/dir/Vrchlick%C3%A9ho+1240%2F23,+415+01+Teplice,+%C4%8Cesko/Botanick%C3%A1+zahrada+Teplice,+J.+Suka+1388,+415+01+Teplice/@50.6405208,13.8381077,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47098ef38eb14071:0xdfa261de85e8705d!2m2!1d13.8368537!2d50.6425077!1m5!1m1!1s0x47098ef038fe861d:0x6fa9608f9ac34544!2m2!1d13.8421708!2d50.6385271!3e2",
		},
		{
			name: "Thermalium Lázně Teplice",
			description: "1,1km (14 minutes walk)",
			imageSrc: require("../../assets/img/thermalium.jpg").default,
			imageAlt: "",
			href: "https://www.google.com/maps/dir/Vrchlick%C3%A9ho+1240%2F23,+415+01+Teplice,+%C4%8Cesko/Beethoven+Spa,+L%C3%A1ze%C5%88sk%C3%BD+sad,+Teplice/@50.6408281,13.8302107,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47098ef38eb14071:0xdfa261de85e8705d!2m2!1d13.8368537!2d50.6425077!1m5!1m1!1s0x47098e8d5f5525b7:0xc0936d10dfab8258!2m2!1d13.8279841!2d50.6387798!3e2",
		},
		{
			name: "Salesiova výšina",
			description: "15,6km (22 minutes by car)",
			imageSrc: require("../../assets/img/salesiova.jpg").default,
			imageAlt: "",
			href: "https://www.google.com/maps/dir/Vrchlick%C3%A9ho+1240%2F23,+415+01+Teplice,+%C4%8Cesko/Salesiova+v%C3%BD%C5%A1ina,+Osek/@50.6296818,13.7175429,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47098ef38eb14071:0xdfa261de85e8705d!2m2!1d13.8368537!2d50.6425077!1m5!1m1!1s0x47098b52e84bfc37:0x6e9a23727d4d97b!2m2!1d13.673656!2d50.616759!3e0",
		},
	];
	return (
		<main id="main-content">
			<Intro />
			<SearchPanel />
			<section className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
				<div className="max-w-4xl mx-auto lg:max-w-5xl text-center">
					<h1 className="text-4xl uppercase text-yellow-600">Welcome to MVAhouse</h1>
					<h1 className="text-2xl text-gray-500">Aparthotel</h1>
					<p className="mt-6 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at leo efficitur quam imperdiet lobortis dignissim sit amet mi. Quisque semper ligula vel metus condimentum, vitae cursus odio finibus. Sed ullamcorper quam eros, nec ornare justo dignissim a. In iaculis pellentesque magna, id tristique purus tincidunt at.</p>
					<div className="mt-6 md:flex">
						<div className="relative md:w-3/6 md:pr-3">
							<span className="absolute bottom-3 left-3 text-gray-200">Entire house</span>
							<img className="w-full h-full object-cover rounded-lg" src={require("../../assets/img/mvahouse/front.jpg").default} alt="" />
						</div>
						<div className="mt-6 md:w-3/6 md:mt-0 md:pl-3">
							<div className="relative h-52 pb-3">
								<span className="absolute bottom-6 left-3 text-gray-200">Double bedroom</span>
								<img className="w-full h-full object-cover rounded-lg" src={require("../../assets/img/apartments/apartment-21/2.jpg").default} alt="" />
							</div>
							<div className="flex h-40 pt-3">
								<div className="relative w-1/2 pr-3">
									<span className="absolute bottom-3 left-3 text-gray-200">Bathroom</span>
									<img className="w-full h-full object-cover rounded-lg" src={require("../../assets/img/apartments/apartment-21/5.jpg").default} alt="" />
								</div>
								<div className="relative w-1/2 pl-3">
									<span className="absolute bottom-3 left-6 text-gray-200">Living room</span>
									<img className="w-full h-full object-cover rounded-lg" src={require("../../assets/img/apartments/apartment-15/1.jpg").default} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
				<div className="max-w-4xl mx-auto lg:max-w-5xl">
					<div className="md:flex">
						<div className="md:width-1/2 grid content-around mr-6">
							<div className="">
								<h1 className="mt-1 text-lg font-semibold text-black md:text-2xl">Local attractions</h1>
								<p class="mt-4 text-sm leading-6 lg:mt-6">Locations that are worth visiting in Czech Republic...</p>
							</div>
						</div>
						<div className="mt-6 grid grid-cols-3 gap-x-6">
							{callouts.map((callout) => (
								<div key={callout.name} className="group relative">
									<div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
										<img src={callout.imageSrc} alt={callout.imageAlt} className="w-full h-full object-center object-cover" />
									</div>
									<h3 className="mt-6 text-sm text-gray-500">
										<a href={callout.href} target="_blank">
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
			<section className="py-6 px-4 bg-white sm:p-6 md:py-10 md:px-8">
				<div className="max-w-4xl mx-auto lg:max-w-5xl">
					<div className="">
						<div className="md:width-1/2 grid content-around mr-6">
							<div className="">
								<h1 className="mt-1 text-lg font-semibold text-black md:text-2xl">Book your apartment now!</h1>
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
							<p class="text-sm leading-4 font-medium text-white sm:text-gray-500 dark:sm:text-gray-400">Entire house</p>
						</div>
						<div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
							<img src={require("../../assets/img/mvahouse/front.jpg").default} alt="" class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"></img>
							<img src={require("../../assets/img/mvahouse/header.jpg").default} alt="" class="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"></img>
							<img src={require("../../assets/img/mvahouse/front.jpg").default} alt="" class="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"></img>
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
								Check availability
							</button>
						</div>
						<p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-gray-400">It offers accommodation with free Wi-Fi and unpaid private parking. The accommodation is equipped with a fridge, hob and kettle. During your stay you can relax in the garden. Aparthotel is 67 km from Václav Havel Airport Prague.</p>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Home;
