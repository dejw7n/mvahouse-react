import React from "react";
import "./BookingCalendar.css";

function BookingCalendar() {
	const runCallback = (cb) => {
		return cb();
	};
	return (
		<div className="calendar" style={{ display: "block" }}>
			<div className="calendar__main grid">
				<div className="block mx-auto overflow-y-scroll sm:flex sm:h-auto sm:overflow-y-auto">
					{runCallback(() => {
						let dateToday = null;
						let iteratedMonthDate = null;
						let month = null;
						let monthString = null;
						let monthNumeric = null;
						let year = null;
						const row = [];
						for (var i = 0; i < 2; i++) {
							row.push(
								<div className="w-80 px-8 py-6 m-auto sm:m-0">
									{(() => {
										dateToday = new Date();
										dateToday.setHours(0, 0, 0, 0);

										iteratedMonthDate = dateToday;
										iteratedMonthDate.setMonth(iteratedMonthDate.getMonth() + i);
										month = iteratedMonthDate.getMonth();
										monthString = iteratedMonthDate.toLocaleString("default", { month: "long" });
										monthNumeric = iteratedMonthDate.getMonth() + 1;
										year = iteratedMonthDate.getFullYear();
									})()}
									<div className="flex">
										<div className="mt-auto">
											<span className="text-center text-2xl font-semibold">{monthString.toUpperCase()}</span>
										</div>
										<div className="ml-auto mt-auto">
											<span className="text-center text-lg font-bold">{year}</span>
										</div>
									</div>
									<table className="w-full table-fixed border-spacing-0">
										<thead className="calendar__row">
											<tr>
												<th className="calendar__day-name">Mo</th>
												<th className="calendar__day-name">Tu</th>
												<th className="calendar__day-name">We</th>
												<th className="calendar__day-name">Th</th>
												<th className="calendar__day-name">Fr</th>
												<th className="calendar__day-name">Sa</th>
												<th className="calendar__day-name">Su</th>
											</tr>
										</thead>
										<tbody>
											{/*<tr className="calendar__row">*/}
											{runCallback(() => {
												let day = 1;
												let rowDayOfTheWeek = 1;
												let running = true;

												let monthStart = new Date(year, month, 1);
												let monthEnd = new Date(year, month + 1, 1);
												let monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);

												let daysInMonth = monthLength;
												const row = [];
												while (running) {
													if (day >= daysInMonth) {
														running = false;
													}
													if (rowDayOfTheWeek > 7) {
														rowDayOfTheWeek = 1;
													}
													row.push(
														<tr className="calendar__row">
															{runCallback(() => {
																const row = [];
																for (let x = 0; x < 7; x++) {
																	if (day > daysInMonth == false) {
																		let iteratedDate = dateToday;
																		iteratedDate = new Date(iteratedDate.getFullYear(), iteratedDate.getMonth(), 0);
																		iteratedDate.setHours(0, 0, 0, 0);
																		iteratedDate.setDate(iteratedDate.getDate() + day - 1);
																		let iteratedDayOfWeek = iteratedDate.getDay() + 1;
																		let classVar = null;
																		let dateIfDisabled = new Date();
																		dateIfDisabled.setHours(0, 0, 0, 0);
																		if (iteratedDayOfWeek == rowDayOfTheWeek) {
																			if (iteratedDate.getTime() >= dateIfDisabled.getTime()) {
																				let dateFixed = new Date();
																				dateFixed.setHours(0, 0, 0, 0);
																				if (iteratedDate.getTime() == dateFixed.getTime()) {
																					classVar = "calendar__date calendar__date--today";
																				} else {
																					classVar = "calendar__date";
																				}
																			} else {
																				classVar = "calendar__date calendar__date--disabled";
																			}
																			row.push(
																				<td className={classVar} data-ref="calendar-date" data-date={year + "-" + monthNumeric + "-" + day} data-days={daysInMonth}>
																					<span aria-label={day + " " + month + " " + year}>
																						<span aria-hidden="true">{day}</span>
																					</span>
																				</td>
																			);
																			day++;
																		} else {
																			row.push(<td className="calendar__date--empty"></td>);
																		}
																		rowDayOfTheWeek++;
																	}
																}
																return row;
															})}
														</tr>
													);
												}
												return row;
											})}
										</tbody>
									</table>
								</div>
							);
						}
						return row;
					})}
				</div>
				<div className="mt-12 text-center">Check-in Date - Check-out Date</div>
			</div>
		</div>
	);
}

export default BookingCalendar;
