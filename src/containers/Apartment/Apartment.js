import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import './Apartment.css';
import '../../assets/videojs/videojs.css';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import { GetApartment } from '../../components/ApartmentManager/ApartmentManager';

function Apartment() {
    let urlParams = useParams();

    const runCallback = (cb) => {
        return cb();
    };
    return (
        <>
            {
                runCallback(() => {
                    const row = [];

                    let apartments = null;
                    apartments = GetApartment(urlParams.apartment);
                    try {
                        apartments = JSON.parse(apartments);
                    } catch (error) {
                        console.log("json parse error");
                        window.location.replace('/')
                    }
                    if (apartments == "") {
                        console.log("apartments not found");
                        window.location.replace('/')
                    }

                    apartments.forEach(apartment => {
                        row.push(
                            <div id="main-content">
                                <div id="content">
                                    <div id="content-wrapper">
                                        <div id="apartment">
                                            <div className="apartment-top">
                                                <div className="title">
                                                    <span className="title-span">{apartment.title}</span>
                                                </div>
                                                <p className="address"><i className="fas fa-map-marker-alt"></i> Vrchlického 1240/23,
                                                    Teplice, 415 01, Czech Republic</p>
                                            </div>
                                            <div className="apartment-content">
                                                <div id="gallery" className="gallery">
                                                    <div className="gallery-main">
                                                        {
                                                            runCallback(() => {
                                                                const row = [];
    
                                                                try {
                                                                    if (require(`../../assets/video/${apartment.link}.mp4`)) {
                                                                        row.push(
                                                                            <div className="gallery-video">
                                                                                <video id="my-video" className="video-js" controls preload="auto" width="0"
                                                                                    height="0" poster="MY_VIDEO_POSTER.jpg" data-setup="{}">
                                                                                    <source src={require(`../../assets/video/${apartment.link}.mp4`).default} type="video/mp4" />
                                                                                    <source src="MY_VIDEO.webm" type="video/webm" />
                                                                                    <p className="vjs-no-js">
                                                                                        To view this video please enable JavaScript, and consider upgrading
                                                                                        to a
                                                                                        web browser that
                                                                                        <a href="https://videojs.com/html5-video-support/"
                                                                                            target="_blank">supports HTML5 video</a>
                                                                                    </p>
                                                                                </video>
                                                                            </div>
                                                                        );
                                                                    }
                                                                } catch (error) {
                                                                    try {
                                                                        if (require('../../assets/img/apartments/' + apartment.link + '/1.jpg')) {
                                                                            row.push(
                                                                                <div className="gallery-item">
                                                                                    <img className="gallery-img" src={require(`../../assets/img/apartments/${apartment.link}/1.jpg`).default} alt=""></img>
                                                                                </div>
                                                                            );
                                                                        }
                                                                    } catch (error) {
                                                                        row.push(
                                                                            <div className="gallery-item">
                                                                                {/*<img className="gallery-img" style="object-fit: none !important;" src="/assets/img/no-image.jpg" alt=""></img>*/}
                                                                                <img className="gallery-img" src={require(`../../assets/img/no-image.jpg`).default} alt=""></img>
                                                                            </div>
                                                                        );
                                                                    }
                                                                }
                                                                return row;
                                                            })
                                                        }
                                                    </div>
                                                    <div className="gallery-minor">
                                                        {
                                                            runCallback(() => {
                                                                const row = [];
    
                                                                let whileImg = true;
                                                                let imgCounter = 0;
                                                                while (whileImg) {
                                                                    imgCounter++;
                                                                    try {
                                                                        if (require('../../assets/img/apartments/' + apartment.link + '/' + imgCounter + '.jpg')) { }
                                                                    } catch (error) {
                                                                        imgCounter -= 1;
                                                                        whileImg = false;
                                                                    }
                                                                }
                                                                if (imgCounter > 2) {
                                                                    let showImgs = 6;
                                                                    //if (preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"])) {
                                                                    //    showImgs = 3;
                                                                    //} else {
                                                                    //    showImgs = 6;
                                                                    //}
                                                                    for (let forImg = 1; forImg <= imgCounter - 1; forImg++) {
                                                                        if (forImg == showImgs && imgCounter - 1 > showImgs) {
                                                                            row.push(
                                                                                <div className="gallery-item gallery-img-more">
                                                                                    <div className="gallery-img-overlay">
                                                                                        <div className="gallery-img-overlay-wrapper">
                                                                                            <span>+{imgCounter - 1 - showImgs} photos</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <img className="gallery-img" src={require(`../../assets/img/apartments/${apartment.link}/${forImg}.jpg`).default} alt=""></img>
                                                                                </div>
                                                                            );
                                                                        } else {
                                                                            if (forImg > showImgs) {
                                                                                row.push(
                                                                                    <div className="gallery-item" style={{ display: "none" }}>
                                                                                        <img className="gallery-img" src={require(`../../assets/img/apartments/${apartment.link}/${forImg}.jpg`).default} alt=""></img>
                                                                                    </div>
                                                                                );
                                                                            } else {
                                                                                row.push(
                                                                                    <div className="gallery-item">
                                                                                        <img className="gallery-img" src={require(`../../assets/img/apartments/${apartment.link}/${forImg}.jpg`).default} alt=""></img>
                                                                                    </div>
                                                                                );
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                return row;
                                                            })
                                                        }
                                                    </div>
                                                    <div id="gallery-display" style={{ display: "none" }}>
                                                        <div id="gallery-display__left">
                                                            <div id="gallery-display__left__closeBtn">
                                                                <i className="fas fa-times"></i>
                                                            </div>
                                                            <div id="gallery-display__left__previousBtn">
                                                                <i className="fas fa-chevron-left"></i>
                                                            </div>
                                                        </div>
                                                        <div className="gallery-display__middle">
                                                            <img src="" alt="" id="gallery-display-img"></img>
                                                        </div>
                                                        <div id="gallery-display__right">
                                                            <div id="gallery-display__right__nextBtn">
                                                                <i className="fas fa-chevron-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <script src="/assets/js/gallery.js"></script>
                                                <div className="description">
                                                    <div className="description-content">
                                                        <p>No information available.</p>
                                                    </div>
                                                </div>
                                                <div className="important-facilities">
                                                    <h3>Most popular facilities</h3>
                                                    <div className="important-facilities-content">
                                                        <div className="wrap-important-facilities"><i className="fas fa-smoking-ban"></i> Non-smoking rooms</div>
                                                        <div className="wrap-important-facilities"><i className="fas fa-parking"></i> Free Parking</div>
                                                        <div className="wrap-important-facilities"><i className="fas fa-wifi"></i> Free Wi-Fi
                                                        </div>
                                                        <div className="wrap-important-facilities"><i className="fas fa-paw"></i> Pet friendly</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="availability">
                                                <div className="section-header">
                                                    <h2>Availability</h2>
                                                </div>
    
                                                <form action="/posts/reserveApartment.php" method="post">
                                                    <input type="hidden" name="apartment" value="{{ $URL_apartment }}" />
                                                    <SearchPanel />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    });
                    return row;
                })
            }
        </>
    )
}

export default Apartment;