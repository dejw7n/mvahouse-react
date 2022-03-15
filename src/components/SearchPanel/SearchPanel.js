import React from "react";
import "./SearchPanel.css";
import BookingCalendar from "../BookingCalendar/BookingCalendar";

function SearchPanel() {
	//TODO: Přidat možnost odebrat padding
	return (
		<div className="py-4 px-4 bg-white md:px-8">
			<div className="max-w-4xl mx-auto lg:max-w-5xl">
				<div className="block sm:flex">
					<div className="block h-full sm:flex">
						<div id="searchbox__checkin" className="flex w-full h-full my-4 px-2 py-2 shadow-xl bg-white sm:w-44 sm:shadow-none sm:px-4 sm:py-0">
							<div className="h-full mr-2">
								<div className="icon-calendar"></div>
							</div>
							<div className="h-full">
								<p className="text-lg font-bold leading-6">Check in</p>
								<p id="checkin-text" className="text-xs leading-none">
									Add date
								</p>
							</div>

							<input type="hidden" name="checkin" id="calendar-checkin-input" value=""></input>
							<div id="calendar-checkin" className="absolute mt-6 z-50 rounded-md border-2 border-gray-400 bg-white" style={{ display: "none" }}>
								<BookingCalendar />
							</div>
						</div>
						<div id="searchbox__checkout" className="flex w-full h-full my-4 px-2 py-2 shadow-xl bg-white sm:w-44 sm:shadow-none sm:px-4 sm:py-0">
							<div className="h-full mr-2">
								<div className="icon-calendar"></div>
							</div>
							<div className="h-full">
								<p className="text-lg font-bold leading-6">Check out</p>
								<p id="checkout-text" className="text-xs leading-none">
									Add date
								</p>
							</div>

							<input type="hidden" name="checkout" id="calendar-checkout-input" value=""></input>
							<div id="calendar-checkout" className="absolute mt-6 z-50 rounded-md border-2 border-gray-400 bg-white" style={{ display: "none" }}>
								<BookingCalendar />
							</div>
						</div>
						<div className="flex w-full h-full my-4 px-2 py-2 shadow-xl bg-white sm:w-44 sm:shadow-none sm:px-4 sm:py-0">
							<div className="h-full mr-2">
								<div className="icon-calendar"></div>
							</div>
							<div className="h-full">
								<p className="text-lg font-bold leading-6">Additionals</p>
								<p className="text-xs leading-none">Add date</p>
							</div>
						</div>
					</div>
					<div className="flex w-full h-12 my-auto ml-auto sm:w-12">
						<div className="w-full h-full">
							<a href="/search" className="grid w-full h-full rounded-full bg-blue-600">
								<div class="m-auto icon-search"></div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchPanel;
