let btnViewApartment = document.querySelectorAll("button[data-apartment]");

for (let index = 0; index < btnViewApartment.length; index++) {
	btnViewApartment[index].addEventListener("click", function () {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		window.location.href = "/apartment/" + btnViewApartment[index].getAttribute("data-apartment") + "?checkin=" + urlParams.get("checkin") + "&checkout=" + urlParams.get("checkout");
	});
}
