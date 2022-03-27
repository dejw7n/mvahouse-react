import React from "react";
import CloudflareManager from "../../../components/CloudflareManager/CloudflareManager";
import { AiFillHome } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { MdKingBed } from "react-icons/md";

function Dashboard() {
	console.log(CloudflareManager());
	return (
		<main id="main-content" className="flex">
			<div id="sidebar" className="w-72 bg-gradient-to-b from-indigo-700 to-purple-700">
				<div className="px-4 py-8">
					<div className="h-14 mb-12">
						<a href="/admin/dashboard" class="flex h-full items-center">
							<img src={require("../../../assets/img/logoIcon.png").default} className="mr-3 h-full" alt="Logo"></img>
							<span className="self-center text-xl font-semibold whitespace-nowrap text-white">MVAhouse</span>
						</a>
					</div>
					<div className="grid grid-rows-5 gap-4">
						<div className="rounded-sm bg-indigo-400 bg-opacity-50">
							<div className="flex px-4 py-3">
								<div className="grid w-5 h-5 mr-3 rounded-sm bg-white">
									<AiFillHome className="w-4/5 h-4/5 m-auto text-indigo-700" />
								</div>
								<div className="grid">
									<p className="my-auto leading-none font-medium text-base text-white">Dashboard</p>
								</div>
							</div>
						</div>
						<div className="rounded-sm bg-opacity-50">
							<div className="flex px-4 py-3">
								<div className="grid w-5 h-5 mr-3 rounded-sm bg-white">
									<MdKingBed className="w-4/5 h-4/5 m-auto text-indigo-700" />
								</div>
								<div className="grid">
									<p className="my-auto leading-none font-medium text-base text-white">Apartments</p>
								</div>
							</div>
						</div>
						<div className="rounded-sm bg-opacity-50">
							<div className="flex px-4 py-3">
								<div className="grid w-5 h-5 mr-3 rounded-sm bg-white">
									<AiFillSetting className="w-4/5 h-4/5 m-auto text-indigo-700" />
								</div>
								<div className="grid">
									<p className="my-auto leading-none font-medium text-base text-white">Settings</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="content" className="w-full">
				<section className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
					<h1 className="text-2xl">Dashboard</h1>
					<div className="py-6 px-4 sm:p-6 md:py-10 md:px-8 bg-white">
						<div className="mb-4">
							<h1 className="text-2xl">Revenue</h1>
						</div>
						<div className="grid grid-cols-3">
							<div className="w-full h-full border-2 border-gray-100">
								<div className="py-4 px-4">
									<h1 className="font-medium leading-none text-gray-400">Revenue today</h1>
									<h1 className="mt-1 font-normal text-3xl text-gray-600">$43,25.50</h1>
								</div>
							</div>
							<div className="w-full h-full border-2 border-gray-100">
								<div className="py-4 px-4">
									<h1 className="font-medium leading-none text-gray-400">Revenue today</h1>
									<h1 className="mt-1 font-normal text-3xl text-gray-600">$43,25.50</h1>
								</div>
							</div>
							<div className="w-full h-full border-2 border-gray-100">
								<div className="py-4 px-4">
									<h1 className="font-medium leading-none text-gray-400">Revenue today</h1>
									<h1 className="mt-1 font-normal text-3xl text-gray-600">$43,25.50</h1>
								</div>
							</div>
						</div>
						<div className="">
							<canvas id="myChart" className="max-w-full"></canvas>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default Dashboard;
