window.addEventListener(
	"load",
	function () {
		function insertData() {}

		const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

		const data = {
			labels: labels,
			datasets: [
				{
					label: "Traffic",
					backgroundColor: "rgb(56, 181, 218)",
					borderColor: "rgb(56, 181, 218)",
					data: [0, 34, 20, 13, 37, 43, 45],
				},
				{
					label: "Orders",
					backgroundColor: "rgb(255, 99, 132)",
					borderColor: "rgb(255, 99, 132)",
					data: [0, 6, 2, 1, 8, 9, 11],
				},
			],
		};

		const config = {
			type: "line",
			data: data,
			options: {},
		};

		const myChart = new Chart(document.getElementById("myChart"), config);
	},
	false
);
