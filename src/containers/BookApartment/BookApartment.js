import React from "react";
import "./BookApartment.css";

function BookApartment() {
	return (
		<main id="main-content" className="bg-white">
			<section className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
				<div className="max-w-4xl mx-auto lg:max-w-5xl">
					<div className="block py-6 px-4 sm:w-2/3 sm:p-6 md:py-2 md:px-8 sm:hidden bookingSummary">
						<div className="py-2 border-b-2 border-white">
							<h1 className="text-xl text-white">Booking Summary</h1>
						</div>
						<div className="pt-2">
							<div className="flex mt-4">
								<div className="w-1/2">
									<h1 className="text-gray-200 font-bold">Arrive</h1>
									<h1 className="text-white font-bold">13. února 2022</h1>
									<h1 className="text-gray-200">15:00 - 24:00</h1>
								</div>
								<div className="w-1/2">
									<h1 className="text-gray-200 font-bold">Departure</h1>
									<h1 className="text-white font-bold">24. února 2022</h1>
									<h1 className="text-gray-200">15:00 - 21:00</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="flex">
						<section className="w-full py-6 px-4 sm:w-2/3 sm:p-6 md:py-2 md:px-8">
							<div className="max-w-4xl mx-auto lg:max-w-5xl">
								<div className="grid grid-cols-3 w-full h-12">
									<div className="flex h-full border-b-4 border-blue-500">
										<span className="m-auto text-lg text-center font-semibold">Customer Info</span>
									</div>
									<div className="flex h-full border-b-2 border-gray-300">
										<span className="m-auto text-lg text-center font-semibold">Payment Method</span>
									</div>
									<div className="flex h-full border-b-2 border-gray-300">
										<span className="m-auto text-lg text-center font-semibold">Confirmation</span>
									</div>
								</div>
								<div className="hidden">
									{/*customer info*/}
									<div className="flex mt-8 mb-4">
										<div className="grid w-6 h-6 mr-2 rounded-full bg-black">
											<span className="m-auto leading-none text-base text-bold text-white">1</span>
										</div>
										<h1 className="my-auto text-xl font-medium leading-none">Contact Info</h1>
									</div>
									<div className="border-2 border-gray-200">
										<div className="mx-6 my-4">
											<div class="grid grid-cols-6 gap-6">
												<div className="col-span-6 sm:col-span-3">
													<label class="block text-gray-700 text-sm font-normal mb-2" for="username">
														First name
													</label>
													<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="firstName" v-model="form.email" type="text" required autofocus placeholder="First name" />
												</div>
												<div className="col-span-6 sm:col-span-3">
													<label class="block text-gray-700 text-sm font-normal mb-2" for="username">
														First name
													</label>
													<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="firstName" v-model="form.email" type="text" required autofocus placeholder="First name" />
												</div>
												<div className="col-span-6 sm:col-span-3">
													<label class="block text-gray-700 text-sm font-normal mb-2" for="username">
														Phone
													</label>
													<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="phone" v-model="form.email" type="text" required autofocus placeholder="Phone number" />
												</div>
												<div className="col-span-6 sm:col-span-3">
													<label class="block text-gray-700 text-sm font-normal mb-2" for="username">
														Email address
													</label>
													<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" v-model="form.email" type="email" required autofocus placeholder="Email address" />
												</div>
											</div>
										</div>
									</div>

									{/*participant info*/}
									<div className="flex mt-8 mb-4">
										<div className="grid w-6 h-6 mr-2 rounded-full bg-black">
											<span className="m-auto leading-none text-base text-bold text-white">2</span>
										</div>
										<h1 className="my-auto text-xl font-medium leading-none">Participant Info</h1>
									</div>
									<div className="border-2 border-gray-200">
										<div className="mx-6 my-4">
											<div class="grid grid-cols-6 gap-6">
												<div className="col-span-6 sm:col-span-6">
													<div className="grid grid-rows-2 gap-2">
														<div className="flex border-2 border-gray-200 bg-gray-100">
															<div className="p-2">
																<h1 className="text-lg font-semibold leading-none">$0.00</h1>
																<h1 className="text-sm leading-none">Per person</h1>
															</div>
															<div class="ml-auto w-24">
																<div class="flex flex-row h-full w-full rounded-lg relative bg-transparent">
																	<button data-action="decrement" class=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-l cursor-pointer outline-none">
																		<span class="m-auto text-2xl font-thin leading-none">-</span>
																	</button>
																	<input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none" name="input-number-increment" value="0"></input>
																	<button data-action="increment" class="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-r cursor-pointer">
																		<span class="m-auto text-2xl font-thin leading-none">+</span>
																	</button>
																</div>
															</div>
														</div>
														<div className="flex border-2 border-gray-200 bg-gray-100">
															<div className="p-2">
																<h1 className="text-lg font-semibold leading-none">$0.00</h1>
																<h1 className="text-sm leading-none">Per adult</h1>
															</div>
															<div class="ml-auto w-24">
																<div class="flex flex-row h-full w-full rounded-lg relative bg-transparent">
																	<button data-action="decrement" class=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-l cursor-pointer outline-none">
																		<span class="m-auto text-2xl font-thin leading-none">-</span>
																	</button>
																	<input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none" name="input-number-increment" value="0"></input>
																	<button data-action="increment" class="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-r cursor-pointer">
																		<span class="m-auto text-2xl font-thin leading-none">+</span>
																	</button>
																</div>
															</div>
														</div>
														<div className="flex border-2 border-gray-200 bg-gray-100">
															<div className="p-2">
																<h1 className="text-lg font-semibold leading-none">$0.00</h1>
																<h1 className="text-sm leading-none">Per animal</h1>
															</div>
															<div class="ml-auto w-24">
																<div class="flex flex-row h-full w-full rounded-lg relative bg-transparent">
																	<button data-action="decrement" class=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-l cursor-pointer outline-none">
																		<span class="m-auto text-2xl font-thin leading-none">-</span>
																	</button>
																	<input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none" name="input-number-increment" value="0"></input>
																	<button data-action="increment" class="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-r cursor-pointer">
																		<span class="m-auto text-2xl font-thin leading-none">+</span>
																	</button>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-span-6 sm:col-span-6">
													<label class="block text-gray-700 text-lg font-semibold mb-2" for="username">
														Notes
													</label>
													<textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" v-model="form.email" type="email" required autofocus placeholder="You can write a message to our." />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									{/*customer info*/}
									<div className="flex mt-8 mb-4">
										<div className="grid w-6 h-6 mr-2 rounded-full bg-black">
											<span className="m-auto leading-none text-base text-bold text-white">3</span>
										</div>
										<h1 className="my-auto text-xl font-medium leading-none">Payment Method</h1>
									</div>
									<div className="grid grid-rows-2 gap-2">
										<div className="relative border-2 border-gray-200">
											<div className="px-8 flex">
												<input type="radio" name="radio" id="payment-method1" className="z-10 w-4 h-4 mt-5" />
												<div className="z-0 absolute left-0 w-full h-full bg-gray-100"></div>
												<label for="payment-method1" className="z-10 w-full">
													<div className="w-full">
														<div className="px-6 py-4">
															<div className="mb-2">
																<h1 className="text-xl font-semibold leading-none">Credit Card</h1>
															</div>
															<div className="">
																<p className="leading-none">Safe money transfer using your bank account. Visa, Maestro, etc...</p>
															</div>
														</div>
													</div>
												</label>
											</div>
										</div>
										<div className="relative border-2 border-gray-200">
											<div className="px-8 flex">
												<input type="radio" name="radio" id="payment-method2" className="z-10 w-4 h-4 mt-5" />
												<div className="z-0 absolute left-0 w-full h-full bg-gray-100"></div>
												<label for="payment-method2" className="z-10 w-full">
													<div className="w-full">
														<div className="px-6 py-4">
															<div className="mb-2">
																<h1 className="text-xl font-semibold leading-none">PayPal</h1>
															</div>
															<div className="">
																<p className="leading-none">Safe payment online, Credit card needed. PayPal account is not necessary</p>
															</div>
														</div>
													</div>
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className="hidden w-1/3 sm:grid bookingSummary">
							<div className="my-auto px-8">
								{/*<div className="py-4 border-b-2 border-white">
							<h1 className="text-xl text-white">Booking Summary</h1>
						</div>*/}
								<div className="mt-4 h-52">
									<img className="w-full h-full object-cover rounded-lg" src={require("../../assets/img/apartments/apartment-21/2.jpg").default} alt="" />
								</div>
								<div className="mt-4">
									<h1 className="text-lg font-semibold text-white">2-Bedroom Apartment with Balcony</h1>
								</div>
								<div className="flex mt-4">
									<div className="w-1/2">
										<h1 className="text-gray-200 font-bold">Arrive</h1>
										<h1 className="text-white font-bold">13. února 2022</h1>
										<h1 className="text-gray-200">15:00 - 24:00</h1>
									</div>
									<div className="w-1/2">
										<h1 className="text-gray-200 font-bold">Departure</h1>
										<h1 className="text-white font-bold">24. února 2022</h1>
										<h1 className="text-gray-200">15:00 - 21:00</h1>
									</div>
								</div>
								<div className="mt-4">
									<h1 className="text-gray-200 font-bold">Lenght of stay:</h1>
									<h1 className="text-white font-bold">8 days</h1>
								</div>
								<div className="mt-4">
									<div className="border-t-2 border-dashed"></div>
								</div>
								<div className="mt-4">
									<div className="flex w-full">
										<div className="">
											<h1 className="text-white">Subtotal:</h1>
										</div>
										<div className="ml-auto">
											<h1 className="font-semibold text-white">$ 220.00</h1>
										</div>
									</div>
									<div className="flex w-full">
										<div className="">
											<h1 className="text-white">Discount:</h1>
										</div>
										<div className="ml-auto">
											<h1 className="font-semibold text-white">$ 0.00</h1>
										</div>
									</div>
									<div className="flex w-full">
										<div className="">
											<h1 className="text-white">Taxes&Fees:</h1>
										</div>
										<div className="ml-auto">
											<h1 className="font-semibold text-white">$ 0.00</h1>
										</div>
									</div>
								</div>
								<div className="mt-4">
									<div className="border-t-2 border-solid"></div>
								</div>
								<div className="mt-4">
									<div className="ml-auto">
										<span className="mr-2 text-lg text-white">Total:</span>
										<span className="text-2xl font-semibold text-white">$ 220.00</span>
									</div>
								</div>
								<div className="my-4">
									<button type="submit" class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
										Next
									</button>
								</div>
							</div>
						</section>
					</div>
				</div>
			</section>
		</main>
	);
}

export default BookApartment;
