import React, { Component } from "react";

class ApartmentGallery extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let apartment = this.props.apartment;

		const runCallback = (cb) => {
			return cb();
		};
		return (
			<div id="gallery" className="block">
				<div className="w-full h-96 bg-white">
					{runCallback(() => {
						const row = [];

						try {
							if (this.props.video != "true") {
								let a = "{a";
								a = JSON.parse(a);
							}
							if (require(`../../assets/video/${apartment}.mp4`)) {
								row.push(
									<div className="w-full h-full">
										<video id="my-video" className="video-js w-full h-full" controls preload="auto" width="0" height="0" poster="MY_VIDEO_POSTER.jpg" data-setup="{}">
											<source src={require(`../../assets/video/${apartment}.mp4`).default} type="video/mp4" />
											<source src="MY_VIDEO.webm" type="video/webm" />
											<p className="vjs-no-js">
												To view this video please enable JavaScript, and consider upgrading to a web browser that
												<a href="https://videojs.com/html5-video-support/" target="_blank">
													supports HTML5 video
												</a>
											</p>
										</video>
									</div>
								);
							}
						} catch (error) {
							try {
								if (require("../../assets/img/apartments/" + apartment + "/1.jpg")) {
									row.push(
										<div id="gallery-item" className="w-full h-full">
											<img id="gallery-img" className="w-full h-full object-cover" src={require(`../../assets/img/apartments/${apartment}/1.jpg`).default} alt=""></img>
										</div>
									);
								}
							} catch (error) {
								row.push(
									<div id="gallery-item" className="w-full h-full">
										<img id="gallery-img" className="w-full h-full object-cover" src={require(`../../assets/img/no-image.jpg`).default} alt=""></img>
									</div>
								);
							}
						}
						return row;
					})}
				</div>
				<div className="flex w-full mt-1">
					{runCallback(() => {
						const row = [];

						let whileImg = true;
						let imgCounter = 0;
						while (whileImg) {
							imgCounter++;
							try {
								if (require("../../assets/img/apartments/" + apartment + "/" + imgCounter + ".jpg")) {
								}
							} catch (error) {
								imgCounter -= 1;
								whileImg = false;
							}
						}
						if (imgCounter > 2) {
							let showImgs = 6;
							for (let forImg = 1; forImg <= imgCounter - 1; forImg++) {
								if (forImg == showImgs && imgCounter - 1 > showImgs) {
									row.push(
										<div id="gallery-item" className="ml-1 first:ml-0 relative">
											<div className="absolute w-full h-full">
												<div className="grid w-full h-full">
													<span className="m-auto text-white text-lg font-semibold">+{imgCounter - 1 - showImgs} photos</span>
												</div>
											</div>
											<img id="gallery-img" className="w-full h-full object-cover" src={require(`../../assets/img/apartments/${apartment}/${forImg}.jpg`).default} alt=""></img>
										</div>
									);
								} else {
									if (forImg > showImgs) {
										row.push(
											<div id="gallery-item" className="ml-1 first:ml-0" style={{ display: "none" }}>
												<img id="gallery-img" className="w-full h-full object-cover" src={require(`../../assets/img/apartments/${apartment}/${forImg}.jpg`).default} alt=""></img>
											</div>
										);
									} else {
										row.push(
											<div id="gallery-item" className="ml-1 first:ml-0">
												<img id="gallery-img" className="w-full h-full object-cover" src={require(`../../assets/img/apartments/${apartment}/${forImg}.jpg`).default} alt=""></img>
											</div>
										);
									}
								}
							}
						}
						return row;
					})}
				</div>
				<div id="gallery-display" className="flex w-full h-full fixed top-0 right-0 bg-black" style={{ display: "none" }}>
					<div id="gallery-display__left">
						<div id="gallery-display__left__closeBtn" className="grid absolute w-16 h-16 p-4 top-0 right-0 text-right">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</div>
						<div id="gallery-display__left__previousBtn" className="grid absolute w-16 h-16 p-4 top-">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
						</div>
					</div>
					<div className="flex h-full">
						<img src="" alt="" id="gallery-display-img" className="w-max m-auto object-scale-down"></img>
					</div>
					<div id="gallery-display__right">
						<div id="gallery-display__right__nextBtn" className="grid right-0">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ApartmentGallery;
