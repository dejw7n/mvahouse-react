import React from 'react';
import './Home.css';
import bgImg from '../../assets/img/header-min.webp';
import SearchPanel from '../../components/SearchPanel/SearchPanel';

function Home() {
    return (
        <main id="main-content">
            <section className="section-home-header content-header">
                <img src={bgImg} alt=""></img>
            </section>
            <SearchPanel />
        </main>
    )
}

export default Home;