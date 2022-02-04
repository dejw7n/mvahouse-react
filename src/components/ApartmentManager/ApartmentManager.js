import React, { useState, useEffect } from "react";
import Axios from "axios";

export function GetApartment(link) {
	const [apartment, setApartment] = useState([]);
	useEffect(() => {
		Axios.get(`https://162.55.238.33:25677/api/getApartment/${link}`).then((response) => {
			setApartment(response.data);
		});
	}, []);
	return apartment;
}

export function GetAllApartments() {
	const [apartmentList, setApartmentList] = useState([]);
	useEffect(() => {
		Axios.get(`https://162.55.238.33:25677/api/getAllApartments`).then((response) => {
			setApartmentList(response.data);
		});
	}, []);
	return apartmentList;
}
