import React, { useState, useEffect } from 'react';
import './Search.css';
import './Items.css';
import bgImg from '../../assets/img/header-min.webp';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import { GetAllApartments } from '../../components/ApartmentManager/ApartmentManager';

const tryRequire = (path) => {
    try {
        return require(`${path}`);
    } catch (err) {
        return null;
    }
};


function Search() {
    const runCallback = (cb) => {
        return cb();
    };
    return (
        <main id="main-content">
            <section className="section-header main-content-header">
                <img src={bgImg} alt=""></img>
            </section>
            <div id="content">
                <div className="content-search">
                    <SearchPanel />
                </div>
                <div id="items">
                    {
                        runCallback(() => {
                            const row = [];

                            let items = GetAllApartments();
                            try {
                                items = JSON.parse(items);
                            } catch (error) {

                            }
                            items.forEach(item => {
                                let itemConfig = item.configuration;
                                try {
                                    itemConfig = JSON.parse(itemConfig);
                                } catch (error) {

                                }
                                let itemClass = "item";
                                if (itemConfig.choice == "favorite") {
                                    itemClass = itemClass + " item--best-choice";
                                }
                                row.push(


                                    <div className={itemClass}>
                                        {
                                            runCallback(() => {
                                                const row = [];

                                                try {
                                                    if (require(`../../assets/img/apartments/${item.link}/1.jpg`)) {
                                                        row.push(
                                                            <div className="item-img">
                                                                <img className="lazy" src={require(`../../assets/img/apartments/${item.link}/1.jpg`).default} alt="Loading..." width="200" height="200"></img>
                                                            </div>
                                                        );
                                                    }
                                                } catch (error) {
                                                    row.push(
                                                        <div className="item-img">
                                                            <img className="lazy" src={require(`../../assets/img/no-image.jpg`).default} alt="No image found!" width="200" height="200"></img>
                                                        </div>
                                                    );
                                                }
                                                return row;
                                            })
                                        }

                                        <div className="item-content">
                                            <div className="item-top">
                                                <div className="item-top__title">
                                                    <span className="item-title">{item.title}</span>
                                                </div>
                                                {
                                                    runCallback(() => {
                                                        const row = [];

                                                        if (itemConfig.choice == "favorite") {
                                                            row.push(
                                                                <div className="item-top__choice">
                                                                    <div className="item-top__choice-container">
                                                                        <span>Favorite</span>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                        return row;
                                                    })
                                                }

                                            </div>
                                            <div className="item-bottom">
                                                <div className="bottom-left">
                                                    {
                                                        runCallback(() => {
                                                            const row = [];

                                                            let unitConfig = '';
                                                            if (itemConfig.WC > 0) {
                                                                unitConfig = unitConfig + itemConfig.WC + ' WC';
                                                            }

                                                            let bedConfig = '';
                                                            if (itemConfig.bedrooms > 0) {
                                                                bedConfig = bedConfig + itemConfig.bedrooms + ' bedroom/s (';

                                                                if (itemConfig.singleBeds > 0) {
                                                                    bedConfig = bedConfig + itemConfig.singleBeds + ' single bed/s, ';
                                                                }
                                                                if (itemConfig.doubleBeds > 0) {
                                                                    bedConfig = bedConfig + itemConfig.doubleBeds + ' double bed/s';
                                                                }
                                                                bedConfig = bedConfig + ')';
                                                            }
                                                            if (unitConfig == '') {
                                                                unitConfig = 'No information available';
                                                            } else {
                                                                unitConfig = 'Entire apartment • ' + unitConfig;
                                                            }

                                                            row.push(
                                                                <div className="room-info">
                                                                    <div className="unit-configuration">
                                                                        <span className="unit-configuration-span">{unitConfig}</span>
                                                                    </div>
                                                                    <div className="bed-configuration">
                                                                        <span className="bed-configuration-span">{bedConfig}</span>
                                                                    </div>
                                                                </div>
                                                            );
                                                            return row;
                                                        })
                                                    }
                                                </div>
                                                <div className="bottom-right">
                                                    <div className="bottom-right-wrapper">
                                                        <span className="default">Length of nights</span>
                                                    </div>
                                                    <div className="bottom-right-wrapper">
                                                        <span className="price">{item.price * 3} Kč</span>
                                                    </div>
                                                    <div className="bottom-right-wrapper">
                                                        <span className="taxes-and-fees"><i className="fas fa-check"></i>Price contains</span>
                                                    </div>
                                                    <a href={`apartment/${item.link}`} className="bottom-right-button">See availability</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                            return row;
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default Search;