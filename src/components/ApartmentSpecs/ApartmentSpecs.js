const features = [
	{ name: "Bathroom", features: '{"Toilet paper":"has", "Towels":"has", "Shower":"has", "Private Bathroom":"has", "Toilet":"has"}' },
	{ name: "Bedroom", features: '{"No information":"unavailable"}' },
	{ name: "Kitchen", features: '{"No information":"unavailable"}' },
	{ name: "Feature", features: '{"No information":"unavailable"}' },
	{ name: "Feature", features: '{"No information":"unavailable"}' },
	{ name: "Feature", features: '{"No information":"unavailable"}' },
];

export default function Example() {
	const runCallback = (cb) => {
		return cb();
	};
	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto py-24 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:py-32 lg:max-w-7xl lg:grid-cols-2">
				<div>
					<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Information</h2>
					<p className="mt-4 text-gray-500">Popisek apartmánu</p>

					<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
						{features.map((feature) => (
							<div key={feature.name} className="border-t border-gray-200 pt-4">
								<dt className="font-medium text-gray-900">{feature.name}</dt>
								{runCallback(() => {
									const row = [];
									let JSONfeatures;
									try {
										JSONfeatures = JSON.parse("" + feature.features);

										Object.entries(JSONfeatures).forEach(([key, value]) => {
											row.push(<dd className="mt-2 text-sm text-gray-500">{key}</dd>);
										});
									} catch (error) {
										console.log(error);
									}
									return row;
								})}
							</div>
						))}
					</dl>
				</div>
				<div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
					<img src={require(`../../assets/img/apartments/apartment-21/2.jpg`).default} alt="Shower" className="bg-gray-100 rounded-lg" />
					<img src={require(`../../assets/img/apartments/apartment-21/5.jpg`).default} alt="Kitchen" className="bg-gray-100 rounded-lg" />
					<img src={require(`../../assets/img/no-image.jpg`).default} alt="" className="bg-gray-100 rounded-lg" />
					<img src={require(`../../assets/img/no-image.jpg`).default} alt="" className="bg-gray-100 rounded-lg" />
				</div>
			</div>
		</div>
	);
}
