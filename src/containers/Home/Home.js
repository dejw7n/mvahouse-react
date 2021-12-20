import React, { useState, useEffect } from 'react';
import './Home.css';
import bgImg from '../../assets/img/header-min.webp';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import Axios from 'axios';

const submitReview = () => {
    const apartment = 'apartment2';
    const checkin = 'checkin2';
    const checkout = 'checkout2';
    const fname = 'fname2';
    const lname = 'lname2';
    const email = 'email2';
    const phone = 'phone2';
    const checkin_timeOfArrival = 'checkin_timeOfArrival2';
    Axios.post('http://localhost:3001/api/bookApartment', {
        apartment: apartment,
        checkin: checkin,
        checkout: checkout,
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        checkin_timeOfArrival: checkin_timeOfArrival
    }).then(() => {});
}

function Home() {
    submitReview();
    const [apartmentList, setApartmentList] = useState([]);
    const link = 'apartment-1';
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/getApartment/${link}`).then((response) => {
            setApartmentList(response.data);
        });
    }, []);
    console.log(apartmentList);
    {apartmentList.map((val) => {
        console.log(val.fname);
    })}
    return (
        <main id="main-content">
            <section className="section-header main-content-header">
                <img src={bgImg} alt=""></img>
            </section>
            <SearchPanel />
        </main>
    )
}

export default Home;