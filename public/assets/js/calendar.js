window.addEventListener(
	"load",
	function () {
		//display
		let calendarNow = null;
		let calendarNowType = null;
		let checkin = document.querySelectorAll("#searchbox__checkin")[0];
		let checkin_input = document.querySelectorAll("#calendar-checkin-input")[0];
		let checkout = document.querySelectorAll("#searchbox__checkout")[0];
		let checkout_input = document.querySelectorAll("#calendar-checkout-input")[0];
		let checkin_calendar = document.querySelectorAll("#searchbox__checkin #calendar-checkin")[0];
		let checkout_calendar = document.querySelectorAll("#searchbox__checkout #calendar-checkout")[0];

		//get cookie
		const getCookieValue = (name) => document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || "";
		//set cookie
		function setCookie(cName, cValue, expDays) {
			let date = new Date();
			date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
			const expires = "expires=" + date.toUTCString();
			document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
		}

		function showCalendar(fCalendar) {
			fCalendar.style.display = "block";
		}
		function hideCalendar(fCalendar) {
			fCalendar.style.display = "none";
		}
		function hideAllCalendars() {
			hideCalendar(checkin_calendar);
			hideCalendar(checkout_calendar);
		}
		document.addEventListener("click", function (evt) {
			targetElement = evt.target; // clicked element

			do {
				if (targetElement == checkin) {
					hideCalendar(checkout_calendar);
					showCalendar(checkin_calendar);
					calendarNow = checkin_calendar;
					calendarNowType = "checkin";
					return;
				}
				// Go up the DOM
				targetElement = targetElement.parentNode;
			} while (targetElement);

			if (checkout_calendar.style.display == "none") {
				checkout_calendar.innerHTML = checkin_calendar.innerHTML;
				hideCalendar(checkin_calendar);
			}
		});
		document.addEventListener("click", function (evt) {
			targetElement = evt.target; // clicked element

			do {
				if (targetElement == checkout) {
					hideCalendar(checkin_calendar);
					showCalendar(checkout_calendar);
					calendarNow = checkout_calendar;
					calendarNowType = "checkout";
					return;
				}
				// Go up the DOM
				targetElement = targetElement.parentNode;
			} while (targetElement);

			if (checkin_calendar.style.display == "none") {
				checkin_calendar.innerHTML = checkout_calendar.innerHTML;
				hideCalendar(checkout_calendar);
			}
		});

		//select date
		document.addEventListener("click", function (evt) {
			targetElement = evt.target; // clicked element

			do {
				if (typeof targetElement.classList !== "undefined" && targetElement.classList.contains("calendar__date") && targetElement.classList.contains("calendar__date--disabled") == false) {
					if (targetElement.getAttribute("data-ref") != null && targetElement.getAttribute("data-date") != null) {
						selectDate(targetElement);
						return;
					}
				}
				// Go up the DOM
				targetElement = targetElement.parentNode;
			} while (targetElement);
		});

		//date click event
		var date_inputs = document.getElementsByClassName("calendar__date");
		var calendar_inputs = document.getElementsByClassName("calendar");
		var calendar_checkin_text = document.querySelectorAll("#checkin-text")[0];
		var calendar_checkout_text = document.querySelectorAll("#checkout-text")[0];

		for (var i = 0; i < calendar_inputs.length; i++) {
			calendar_inputs[i].addEventListener("click", function (e) {
				if (this.getAttribute("data-choose-mode") != null) {
					makeCalendar(this.getAttribute("data-choose-mode"));
				}
			});
		}
		var selected_date;
		function selectDate(func_date) {
			selected_date = func_date.getAttribute("data-date");
			calendarNow.setAttribute("data-selected", selected_date);
			if (calendarNowType == "checkin") {
				let date1 = Date.parse(selected_date);
				let date2 = Date.parse(checkout_input.getAttribute("value"));
				if (date1 >= date2) {
					return;
				}
				checkin_input.setAttribute("value", selected_date);
				setCookie("book-checkin", selected_date, 30);
				calendar_checkin_text.innerHTML = selected_date;
			}
			if (calendarNowType == "checkout") {
				let date1 = Date.parse(checkin_input.getAttribute("value"));
				let date2 = Date.parse(selected_date);
				if (date1 >= date2) {
					return;
				}
				checkout_input.setAttribute("value", selected_date);
				setCookie("book-checkout", selected_date, 30);
				calendar_checkout_text.innerHTML = selected_date;
			}
			if (typeof checkin_input.getAttribute("value") != "undefined") {
				let input1 = Date.parse(checkin_input.getAttribute("value"));
				let input2 = Date.parse(checkout_input.getAttribute("value"));
				let dates = document.querySelectorAll(".calendar__date");
				for (let index = 0; index < dates.length; index++) {
					if (dates[index].classList.contains("calendar__date--disabled") == false) {
						if (dates[index].getAttribute("data-ref") != null && dates[index].getAttribute("data-date") != null) {
							if (Date.parse(dates[index].getAttribute("data-date")) != Date.parse(checkin_input.getAttribute("value")) && Date.parse(dates[index].getAttribute("data-date")) != Date.parse(checkout_input.getAttribute("value"))) {
								dates[index].classList.remove("calendar__date--selected");
							}
							dates[index].classList.remove("calendar__date--in-range");
						}
					}
				}
				for (let index = 0; index < dates.length; index++) {
					if (dates[index].classList.contains("calendar__date--disabled") == false) {
						if (dates[index].getAttribute("data-ref") != null && dates[index].getAttribute("data-date") != null) {
							if (input1 < Date.parse(dates[index].getAttribute("data-date")) && Date.parse(dates[index].getAttribute("data-date")) < input2) {
								dates[index].classList.add("calendar__date--in-range");
							}
						}
					}
				}
			}
			let selectedDates = document.querySelectorAll('.calendar__date[data-date="' + selected_date + '"');
			for (let i = 0; i < selectedDates.length; i++) {
				selectedDates[i].classList.add("calendar__date--selected");
			}
			hideAllCalendars();
		}
		function makeCalendar(mode) {
			for (var i = 0; i < date_inputs.length; i++) {
				var input = date_inputs[i];
				if (input.getAttribute("data-ref") != null && input.getAttribute("data-date") != null) {
					date_time = new Date(input.getAttribute("data-date"));
					selected_time = new Date(selected_date);
					date_time_day = date_time.getDate();
					selected_time_day = selected_time.getDate();
					if (mode == "start") {
						if (date_time_day > selected_time_day) {
							input.classList.add("calendar__date--in-range");
						}
					}
				}
			}
		}

		//read from cookie and set
		try {
			var url_checkin = getCookieValue("book-checkin");
			if (url_checkin !== "undefined") {
				calendarNow = checkin_calendar;
				calendarNowType = "checkin";
				let url_checkin_element = document.querySelectorAll("td[data-date='" + url_checkin + "']")[0];
				selectDate(url_checkin_element);
			}
		} catch (error) {}
		try {
			var url_checkout = getCookieValue("book-checkout");
			if (url_checkout !== "undefined") {
				calendarNow = checkout_calendar;
				calendarNowType = "checkout";
				let url_checkout_element = document.querySelectorAll("td[data-date='" + url_checkout + "']")[0];
				selectDate(url_checkout_element);
			}
		} catch (error) {}
	},
	false
);
