/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import img from "../../assets/img/apartments/apartment-21/1.jpg";
import ApartmentGallery from "../../components/ApartmentGallery/ApartmentGallery";

const product = {
	name: "Double room",
	price: "$50",
	href: "#",
	breadcrumbs: [
		{ id: 1, name: "Men", href: "#" },
		{ id: 2, name: "Clothing", href: "#" },
	],
	images: [
		{
			src: { img },
			alt: "Two each of gray, white, and black shirts laying flat.",
		},
		{
			src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
			alt: "Model wearing plain black basic tee.",
		},
		{
			src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
			alt: "Model wearing plain gray basic tee.",
		},
		{
			src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
			alt: "Model wearing plain white basic tee.",
		},
	],
	colors: [
		{ name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
		{ name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
		{ name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
	],
	sizes: [
		{ name: "XXS", inStock: false },
		{ name: "XS", inStock: true },
		{ name: "S", inStock: true },
		{ name: "M", inStock: true },
		{ name: "L", inStock: true },
		{ name: "XL", inStock: true },
		{ name: "2XL", inStock: true },
		{ name: "3XL", inStock: true },
	],
	description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Donec vitae arcu. Integer imperdiet lectus quis justo.",
	highlights: ["", "", "", ""],
	details: "",
};
const reviews = { href: "#", average: 4, totalCount: 17 };

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	const [selectedColor, setSelectedColor] = useState(product.colors[0]);
	const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

	return (
		<div className="bg-white">
			<div className="pt-6">
				<ApartmentGallery apartment="apartment-15" />

				{/* Product info */}
				<div className="mx-auto pt-5 pb-16 lg:max-w-7xl lg:pt-8 lg:pb-24 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
					<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
					</div>

					{/* Options */}
					<div className="mt-4 lg:mt-0 lg:row-span-3">
						{/* Reviews */}
						<div className="mt-6">
							<h3 className="sr-only">Reviews</h3>
							<div className="flex items-center">
								<div className="flex items-center">
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon key={rating} className={classNames(reviews.average > rating ? "text-gray-900" : "text-gray-200", "h-5 w-5 flex-shrink-0")} aria-hidden="true" />
									))}
								</div>
								<a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
									{reviews.totalCount} reviews
								</a>
							</div>
						</div>

						<form className="mt-10">
							<button type="submit" className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Show more
							</button>
						</form>
					</div>

					<div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						{/* Description */}
						<div>
							<div className="space-y-6">
								<p className="text-base text-gray-900">{product.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
