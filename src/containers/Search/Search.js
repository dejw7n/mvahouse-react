import React from 'react';
import './Search.css';
import bgImg from '../../assets/img/header-min.webp';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import {getAllApartments} from '../../components/ApartmentManager/ApartmentManager';

function Search() {
    return (
        <main id="main-content">
            <section className="section-home-header content-header">
                <img src={bgImg} alt=""></img>
            </section>
            <SearchPanel />

            <div id="items">
                {
                    runCallback(() => {
                        const row = [];

                        let items = getAllApartments();
                        items = json_decode(items);
                        foreach(items as item) {
                            itemConfig = item -> configuration;
                            itemConfig = json_decode(itemConfig);
                            itemClass = "item";
                            if (itemConfig -> choice == "favorite") {
                                itemClass = itemClass + " item--best-choice";
                            }
                            row.push(


                                <div className={itemClass}>
                                    {
                                        runCallback(() => {
                                            const row = [];

                                            if (file_exists($_SERVER["DOCUMENT_ROOT"] + '/public/assets/img/apartments/' + $item -> link + '/1.jpg')) {
                                                row.push(
                                                    <div className="item-img">
                                                        <img className="lazy"
                                                            data-src="/assets/img/apartments/{{ $item->link }}/1.jpg" alt="Loading..." width="200"
                                                            height="200"></img>

                                                    </div>
                                                );
                                            } else {
                                                row.push(
                                                    <div className="item-img">


                                                        <img className="lazy" data-src="/assets/img/no-image.jpg" alt="No image found!" width="200"
                                                            height="200"></img>

                                                    </div>
                                                );
                                            }
                                            return row;
                                        })
                                    }

                                    <div className="item-content">
                                        <div className="item-top">
                                            <div className="item-top__title">
                                                <span className="item-title">{{ $item-> title}}</span>
                                            </div>
                                            {
                                                runCallback(() => {
                                                    const row = [];

                                                    if ($itemConfig -> choice == "favorite") {
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

                                                        $unitConfig = '';
                                                        if ($itemConfig -> WC > 0) {
                                                            $unitConfig = $unitConfig.$itemConfig -> WC. ' WC';
                                                        }

                                                        $bedConfig = '';
                                                        if ($itemConfig -> bedrooms > 0) {
                                                            $bedConfig = $bedConfig.$itemConfig -> bedrooms. ' bedroom/s (';

                                                            if ($itemConfig -> singleBeds > 0) {
                                                                $bedConfig = $bedConfig.$itemConfig -> singleBeds. ' single bed/s, ';
                                                            }
                                                            if ($itemConfig -> doubleBeds > 0) {
                                                                $bedConfig = $bedConfig.$itemConfig -> doubleBeds. ' double bed/s';
                                                            }
                                                            $bedConfig = $bedConfig. ')';
                                                        }
                                                        if ($unitConfig == '') {
                                                            $unitConfig = 'No information available';
                                                        } else {
                                                            $unitConfig = 'Entire apartment • '.$unitConfig;
                                                        }

                                                        row.push(
                                                            <div className="room-info">
                                                                <div className="unit-configuration">
                                                                    <span className="unit-configuration-span">{{ $unitConfig }}</span>
                                                                </div>
                                                                <div className="bed-configuration">
                                                                    <span className="bed-configuration-span">{{ $bedConfig }}</span>
                                                                </div>
                                                            </div>
                                                        );
                                                        return row;
                                                    })
                                                }
                                            </div>
                                            <div className="bottom-right">
                                                <div className="bottom-right-wrapper">
                                                    <span
                                                        className="default">{{ __('search.item__length-of-nights') }}</span>
                                                </div>
                                                <div className="bottom-right-wrapper">
                                                    <span className="price">{{ $item-> price * 3}} Kč</span>
                                                </div>
                                                <div className="bottom-right-wrapper">
                                                    <span className="taxes-and-fees"><i className="fas fa-check"></i>
                                                        {{ __('search.item__price-contains') }}</span>
                                                </div>
                                                <a href="apartment/<?php echo $item->link; ?>"
                                                    className="bottom-right-button">{{ __('search.item__see-availability') }}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }


                        return row;
                    })
                }
            </div>

        </main>
    )
}

export default Search;