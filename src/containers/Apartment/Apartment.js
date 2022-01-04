import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import "./Apartment.css";
import "../../assets/css/gallery.css";
import "../../assets/videojs/videojs.css";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import { GetApartment } from "../../components/ApartmentManager/ApartmentManager";
import ApartmentGallery from "../../components/ApartmentGallery/ApartmentGallery";
import ApartmentSpecs from "../../components/ApartmentSpecs/ApartmentSpecs";

function Apartment() {
	let urlParams = useParams();

	const runCallback = (cb) => {
		return cb();
	};
	return (
		<>
			{runCallback(() => {
				const row = [];

				let apartments = null;
				console.log("loading");
				apartments = GetApartment(urlParams.apartment);
				try {
					apartments = JSON.parse(apartments);
				} catch (error) {
					console.log("json parse error");
					//window.location.replace('/');
				}
				if (apartments == "") {
					console.log("apartments not found");
					//window.location.replace('/');
				}
				const cookies = new Cookies();
				cookies.set("book-apartment", "Apartment-21", { path: "/" });
				cookies.set("book-checkin", "2021-12-1", { path: "/" });
				cookies.set("book-checkout", "2021-12-14", { path: "/" });

				apartments.forEach((apartment) => {
					row.push(
						<main id="main-content">
							<section className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
								<div className="max-w-4xl mx-auto lg:max-w-5xl">
									<div className="mb-5">
										<div className="title">
											<span className="text-2xl text-bold">{apartment.title}</span>
										</div>
										<p className="m-0 text-sm">
											<i className="fas fa-map-marker-alt"></i> Vrchlického 1240/23, Teplice, 415 01, Czech Republic
										</p>
									</div>
									<div className="apartment-content">
										<ApartmentGallery apartment={apartment.link} video="true" />
										<ApartmentSpecs apartment={apartment.link} />
										<div className="mt-12">
											<div className="description-content">
												<p>No information available.</p>
											</div>
										</div>
										<div className="important-facilities">
											<h3>Most popular facilities</h3>
											<div className="important-facilities-content">
												<div className="wrap-important-facilities">
													<i className="fas fa-smoking-ban"></i> Non-smoking rooms
												</div>
												<div className="wrap-important-facilities">
													<i className="fas fa-parking"></i> Free Parking
												</div>
												<div className="wrap-important-facilities">
													<i className="fas fa-wifi"></i> Free Wi-Fi
												</div>
												<div className="wrap-important-facilities">
													<i className="fas fa-paw"></i> Pet friendly
												</div>
											</div>
										</div>
									</div>
									<div id="availability">
										<div className="section-header">
											<h2>Availability</h2>
										</div>

										<form action="/posts/reserveApartment.php" method="post">
											<input type="hidden" name="apartment" value="{{ $URL_apartment }}" />
											<SearchPanel />
										</form>
									</div>
								</div>
							</section>
						</main>
					);
				});
				return row;
			})}
		</>
	);
}

export default Apartment;
