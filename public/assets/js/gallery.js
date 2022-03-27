window.addEventListener(
	"load",
	function () {
		var items = document.getElementById("gallery").querySelectorAll("#gallery-item");
		var itemsImg = document.getElementById("gallery").querySelectorAll("#gallery-img");
		var galleryDisplay = document.getElementById("gallery-display");
		var galleryDisplayImg = document.getElementById("gallery-display-img");
		var galleryDisplay__left__closeBtn = document.getElementById("gallery-display__left__closeBtn");
		var galleryDisplay__left__previousBtn = document.getElementById("gallery-display__left__previousBtn");
		var galleryDisplay__right__nextBtn = document.getElementById("gallery-display__right__nextBtn");

		for (let x = 0; x < items.length; x++) {
			items[x].addEventListener("click", function () {
				//hideHeader();
				galleryDisplayImg.src = itemsImg[x].src;
				galleryDisplay.setAttribute("gallery-img", x);
				document.body.style.overflow = "hidden";
				galleryDisplay.style.display = "block";
			});
		}
		function nextImg(x) {
			let nextImg = parseInt(galleryDisplay.getAttribute("gallery-img")) + x;
			if (nextImg < 0) {
				nextImg = items.length - 1;
			}
			if (nextImg > items.length - 1) {
				nextImg = 1;
			}
			galleryDisplayImg.src = itemsImg[nextImg].src;
			galleryDisplay.setAttribute("gallery-img", nextImg);
		}
		galleryDisplay__left__closeBtn.addEventListener("click", function () {
			galleryDisplay.style.display = "none";
			document.body.style.overflow = "unset";
		});
		galleryDisplay__left__previousBtn.addEventListener("click", function () {
			nextImg(-1);
		});
		galleryDisplay__right__nextBtn.addEventListener("click", function () {
			nextImg(1);
		});
	},
	false
);
