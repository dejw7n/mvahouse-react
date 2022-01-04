import React from "react";
import "./SearchPanel.css";
import DateCalendar from "../DateCalendar/DateCalendar";

function SearchPanel() {
	return (
		<div className="py-4 px-4 md:px-8">
			<form action="/search" method="get" className="max-w-4xl mx-auto lg:max-w-5xl">
				<div className="md:flex mb-1 bg-white">
					<div className="flex py-4 md:py-0 md:w-2/5 min-w-[150px]">
						<div className="w-full m-auto">
							<div className="font-medium">Check-in</div>
							<div>
								<div id="searchbox__checkin" className="flex" tabIndex="1">
									<div>{/*<i className="far fa-calendar-plus" style="font-size:24px"></i>*/}</div>
									<div className="ml-3">Check-in Date</div>
									<input type="hidden" name="checkin" id="calendar-checkin-input" value=""></input>
									<div className="calendar-checkin" style={{ display: "none" }}>
										<DateCalendar />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="search-form__border"></div>
					<div className="flex py-4 md:py-0 md:w-2/5 min-w-[150px]">
						<div className="w-full m-auto">
							<div className="font-medium">Check-out</div>
							<div>
								<div id="searchbox__checkout" className="flex" tabIndex="1">
									<div>{/*<i className="far fa-calendar-plus" style="font-size:24px"></i>*/}</div>
									<div className="ml-3">Check-out Date</div>
									<input type="hidden" name="checkout" id="calendar-checkout-input" value=""></input>
									<div className="calendar-checkout" style={{ display: "none" }}>
										<DateCalendar />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*<div className="search-form__border"></div>
					<div className="search-form__advance"></div>
<div className="search-form__border"></div>*/}
					<button type="button" class="w-full md:w-1/5 bg-yellow-600 text-white text-xl leading-6 font-medium py-2 px-3 rounded-lg">
						Search
					</button>
				</div>
			</form>

			{/*<div className="coronavirus-card">
                <p><i className="fas fa-info-circle"></i> Get the advice you need. Check the latest COVID-19 restrictions before you travel.</p>
            </div>*/}
		</div>
	);
}

export default SearchPanel;
