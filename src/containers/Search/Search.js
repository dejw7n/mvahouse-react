import React, { useState, useEffect } from "react";
import "./Search.css";
import "./Items.css";
import bgImg from "../../assets/img/header-min.webp";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import { GetAllApartments } from "../../components/ApartmentManager/ApartmentManager";
import Intro from "../../components/Intro/Intro";

function Search() {
	const runCallback = (cb) => {
		return cb();
	};
	return (
		<main id="main-content">
			<Intro />
			<SearchPanel />
			<section className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
				<div className="max-w-4xl mx-auto lg:max-w-5xl">
					<div className="mb-5">
						<h1 className="text-lg font-semibold text-gray-600">15 results found</h1>
					</div>
					<div className="flex h-52 bg-white border-2 border-gray-200">
						<div className="w-80">
							<img className="w-full h-full" src={require(`../../assets/img/apartments/apartment-21/1.jpg`).default} alt="Loading..."></img>
						</div>
						<div className="block border-r-2 border-gray-200">
							<div className="grid w-28 h-1/2">
								<div className="m-auto">
									<h1 className="text-4xl text-center font-semibold text-blue-400">4</h1>
									<p className="text-center font-semibold text-gray-500">Bedrooms</p>
								</div>
							</div>
							<div className="grid w-28 h-1/2 border-t-2 border-gray-200">
								<div className="m-auto">
									<h1 className="text-4xl text-center font-semibold text-blue-400">1.5</h1>
									<p className="text-center font-semibold text-gray-500">Bathrooms</p>
								</div>
							</div>
						</div>
						<div className="p-4">
							<h1 className="text-2xl font-semibold text-gray-700">Two-Bedroom Apartment</h1>
							<p className="text-sm text-gray-400">Vrchlického 1240/23, Teplice 41501</p>
							<p className="mt-2 text-base">This modern apartment comfortably sleeps 5 people and is located on the 2nd floor.</p>
						</div>
						<div className="grid min-w-max cut-circle border-dotted-custom">
							<div className="grid m-auto">
								<h1 className="text-3xl font-semibold text-gray-700">3000,- Kč</h1>
								<p className="text-sm text-center text-gray-500 font-semibold">PER MONTH</p>
								<button type="button" className="mt-2 mx-auto bg-yellow-500 py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
									View details
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div id="items" className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
				<div className="max-w-4xl mx-auto lg:max-w-5xl">
					{runCallback(() => {
						const row = [];

						let items = GetAllApartments();
						try {
							items = JSON.parse(items);
						} catch (error) {}
						items.forEach((item) => {
							let itemConfig = item.configuration;
							try {
								itemConfig = JSON.parse(itemConfig);
							} catch (error) {}
							let itemClass = "item";
							if (itemConfig.choice == "favorite") {
								itemClass = itemClass + " item--best-choice";
							}
							row.push(
								<div className={itemClass}>
									{runCallback(() => {
										const row = [];

										try {
											if (require(`../../assets/img/apartments/${item.link}/1.jpg`)) {
												row.push(
													<div className="item-img">
														<img className="lazy" src={require(`../../assets/img/apartments/${item.link}/1.jpg`).default} alt="Loading..." width="200" height="200"></img>
													</div>
												);
											}
										} catch (error) {
											row.push(
												<div className="item-img">
													<img className="lazy" src={require(`../../assets/img/no-image.jpg`).default} alt="No image found!" width="200" height="200"></img>
												</div>
											);
										}
										return row;
									})}

									<div className="item-content">
										<div className="item-top">
											<div className="item-top__title">
												<span className="item-title">{item.title}</span>
											</div>
											{runCallback(() => {
												const row = [];

												if (itemConfig.choice == "favorite") {
													row.push(
														<div className="item-top__choice">
															<div className="item-top__choice-container">
																<span>Favorite</span>
															</div>
														</div>
													);
												}
												return row;
											})}
										</div>
										<div className="item-bottom">
											<div className="bottom-left">
												{runCallback(() => {
													const row = [];

													let unitConfig = "";
													if (itemConfig.WC > 0) {
														unitConfig = unitConfig + itemConfig.WC + " WC";
													}

													let bedConfig = "";
													if (itemConfig.bedrooms > 0) {
														bedConfig = bedConfig + itemConfig.bedrooms + " bedroom/s (";

														if (itemConfig.singleBeds > 0) {
															bedConfig = bedConfig + itemConfig.singleBeds + " single bed/s, ";
														}
														if (itemConfig.doubleBeds > 0) {
															bedConfig = bedConfig + itemConfig.doubleBeds + " double bed/s";
														}
														bedConfig = bedConfig + ")";
													}
													if (unitConfig == "") {
														unitConfig = "No information available";
													} else {
														unitConfig = "Entire apartment • " + unitConfig;
													}

													row.push(
														<div className="room-info">
															<div className="unit-configuration">
																<span className="unit-configuration-span">{unitConfig}</span>
															</div>
															<div className="bed-configuration">
																<span className="bed-configuration-span">{bedConfig}</span>
															</div>
														</div>
													);
													return row;
												})}
											</div>
											<div className="bottom-right">
												<div className="bottom-right-wrapper">
													<span className="default">Length of nights</span>
												</div>
												<div className="bottom-right-wrapper">
													<span className="price">{item.price * 3} Kč</span>
												</div>
												<div className="bottom-right-wrapper">
													<span className="taxes-and-fees">
														<i className="fas fa-check"></i>Price contains
													</span>
												</div>
												<a href={`apartment/${item.link}`} className="bottom-right-button">
													See availability
												</a>
											</div>
										</div>
									</div>
								</div>
							);
						});
						return row;
					})}
				</div>
			</div>
		</main>
	);
}

export default Search;
