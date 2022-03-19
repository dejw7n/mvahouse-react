import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/css/videojs.css";
import Helmet from "react-helmet";

import useScript from "./components/UseScript/UseScript";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import Search from "./containers/Search/Search";
import Apartment from "./containers/Apartment/Apartment";
import BookApartment from "./containers/BookApartment/BookApartment";

import AdminDashboard from "./containers/Admin/Dashboard/Dashboard";

const UseScripts = (props) => {
	useScript("/assets/js/header.js");
	useScript("/assets/js/calendar.js");
	useScript("/assets/js/lazyLoad.js");
	useScript("/assets/js/gallery.js");
	useScript("https://vjs.zencdn.net/7.17.0/video.min.js");
};

function App() {
	//UseScripts();
	return (
		<BrowserRouter>
			<div className="App">
				<Helmet>
					<script src="/assets/js/header.js" type="text/javascript" />
					<script src="/assets/js/calendar.js" type="text/javascript" />
					<script src="/assets/js/lazyLoad.js" type="text/javascript" />
					<script src="/assets/js/gallery.js" type="text/javascript" />
					<script src="/assets/js/bookApartment.js" type="text/javascript" />
					<script src="https://vjs.zencdn.net/7.17.0/video.min.js" type="text/javascript" />
				</Helmet>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/search" element={<Search />}></Route>
					<Route path="/apartment/:apartment" element={<Apartment />}></Route>
					<Route path="/bookApartment/" element={<BookApartment />}></Route>
					<Route path="/Admin/" element={<AdminDashboard />}></Route>
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
