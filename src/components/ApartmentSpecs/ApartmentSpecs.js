/* This example requires Tailwind CSS v2.0+ */
const features = [
	{ name: "Koupelna", specification: '["Ručníky", "Sprcha", "Toaleta", "Zrcadlo", "Sušička", "Pračka"]' },
	{ name: "Koupelna", specification: '["Ručníky", "Sprcha", "Toaleta", "Zrcadlo", "Sušička", "Pračka"]' },
	{ name: "Koupelna", specification: '["Ručníky", "Sprcha", "Toaleta", "Zrcadlo", "Sušička", "Pračka"]' },
	{ name: "Koupelna", specification: '["Ručníky", "Sprcha", "Toaleta", "Zrcadlo", "Sušička", "Pračka"]' },
	{ name: "Koupelna", specification: '["Ručníky", "Sprcha", "Toaleta", "Zrcadlo", "Sušička", "Pračka"]' },
];

export default function Example() {
	const runCallback = (cb) => {
		return cb();
	};
	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto py-12 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:py-16 lg:max-w-7xl lg:grid-cols-2">
				<div>
					<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Vybavení</h2>
					<p className="mt-4 text-gray-500">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.</p>

					<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
						{features.map((feature) => (
							<div key={feature.name} className="flex border-t border-gray-200 pt-4">
								<div className="a">
									{runCallback(() => {
										const row = [];
										try {
											let json = JSON.parse(feature.specification);
											row.push(<div className="font-medium text-gray-900">{feature.name}</div>);
											Object.keys(json).forEach(function (key) {
												row.push(
													<div className="flex mt-2 text-sm text-gray-700">
														<svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
														</svg>
														{json[key]}
													</div>
												);
											});
										} catch (error) {}
										return row;
									})}
								</div>
								<div className="h-full">
									<img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="" className="h-full bg-gray-100 rounded-lg" />
								</div>
							</div>
						))}
					</dl>
				</div>
				<div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
					<img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="bg-gray-100 rounded-lg" />
					<img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." className="bg-gray-100 rounded-lg" />
					<img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg" alt="Side of walnut card tray with card groove and recessed card area." className="bg-gray-100 rounded-lg" />
					<img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." className="bg-gray-100 rounded-lg" />
				</div>
			</div>
		</div>
	);
}
