import React from "react";

function Home() {
	return (
		<main id="main-content">
			<section className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
				<div className="max-w-4xl mx-auto lg:max-w-5xl text-center">
					<h1 className="text-4xl uppercase text-yellow-600">Welcome to MVAhouse</h1>
					<h1 className="text-2xl text-gray-500">Aparthotel</h1>
					<p className="mt-6 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at leo efficitur quam imperdiet lobortis dignissim sit amet mi. Quisque semper ligula vel metus condimentum, vitae cursus odio finibus. Sed ullamcorper quam eros, nec ornare justo dignissim a. In iaculis pellentesque magna, id tristique purus tincidunt at.</p>
					<div className="mt-6 md:flex">
						<div className="relative md:w-3/6 md:pr-3"></div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Home;
