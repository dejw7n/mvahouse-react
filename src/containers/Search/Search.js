import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./Search.css";
import "./Items.css";
import bgImg from "../../assets/img/header-min.webp";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import { GetAllApartments } from "../../components/ApartmentManager/ApartmentManager";
import Intro from "../../components/Intro/Intro";

const cookies = new Cookies();

function HandleViewApartment(e) {
	const apartmentLink = e.target.getAttribute("data-apartment");
	cookies.set("book-apartment", apartmentLink, { path: "/" });
	window.location.href = "/apartment/" + apartmentLink;
}

function Search() {
	const runCallback = (cb) => {
		return cb();
	};
	return (
		<main id="main-content">
			<Intro />
			<SearchPanel />
			<section className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
				<div id="results" className="max-w-4xl mx-auto lg:max-w-5xl">
					{runCallback(() => {
						const row = [];

						//get apartments
						let apartments = GetAllApartments();
						try {
							apartments = JSON.parse(apartments);
							console.log("parse suscessful");
						} catch (error) {
							console.log("apartments json parse error");
						}
						row.push(
							<div className="">
								<h1 className="text-lg font-semibold text-gray-600">{apartments.length} results found</h1>
							</div>
						);
						apartments.forEach((apartment) => {
							//get img of apartment
							let apartmentImg = null;
							try {
								if (require(`../../assets/img/apartments/${apartment.link}/1.jpg`)) {
									apartmentImg = require(`../../assets/img/apartments/${apartment.link}/1.jpg`).default;
								}
							} catch (error) {
								apartmentImg = require(`../../assets/img/no-image.jpg`).default;
							}
							//
							row.push(
								<div className="flex h-52 mt-4 bg-white border-2 border-gray-200">
									<div className="w-80">
										<img className="w-full h-full object-cover" src={apartmentImg} alt="Loading..."></img>
									</div>
									<div className="hidden sm:block border-l-2 border-r-2 border-gray-200">
										<div className="grid w-28 h-1/2">
											<div className="m-auto">
												<h1 className="text-4xl text-center font-semibold text-blue-400">0</h1>
												<p className="text-center font-semibold text-gray-500">Bedrooms</p>
											</div>
										</div>
										<div className="grid w-28 h-1/2 border-t-2 border-gray-200">
											<div className="m-auto">
												<h1 className="text-4xl text-center font-semibold text-blue-400">0</h1>
												<p className="text-center font-semibold text-gray-500">Bathrooms</p>
											</div>
										</div>
									</div>
									<div className="p-4">
										<h1 className="text-base font-semibold text-gray-700 md:text-2xl">Two-Bedroom Apartment</h1>
										<p className="text-xs text-gray-400 md:text-sm">Vrchlického 1240/23, Teplice 41501</p>
										<p className="hidden mt-2 text-sm sm:block md:text-base">This modern apartment comfortably sleeps 5 people and is located on the 2nd floor.</p>
									</div>
									<div className="grid min-w-[125px] sm:min-w-[200px] tear-paper-left">
										<div className="grid m-auto">
											<h1 className="text-3xl text-center font-semibold text-gray-700">{apartment.price},- Kč</h1>
											<p className="text-sm text-center text-gray-500 font-semibold">PER MONTH</p>
											<button type="button" onClick={HandleViewApartment} data-apartment={apartment.link} className="mt-2 mx-auto bg-yellow-500 py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" data-apartment={apartment.link}>
												View details
											</button>
										</div>
									</div>
								</div>
							);
						});
						return row;
					})}
				</div>
			</section>
		</main>
	);
}

export default Search;
