import React, {useEffect} from 'react';
import './BookApartment.css';
import Cookies from 'universal-cookie';
import { GetApartment } from '../../components/ApartmentManager/ApartmentManager';

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}

function BookApartment() {
    const cookies = new Cookies();
    let apartment = null;
    let checkin = null;
    let checkout = null;
    let days = null;
    useEffect(() => {
        try {
            apartment = GetApartment(cookies.get('book-apartment'));
            let checkinDate = new Date(cookies.get('book-checkin'));
            let checkoutDate = new Date(cookies.get('book-checkout'));
            checkin = cookies.get('book-checkin');
            checkout = cookies.get('book-checkout');
            days = datediff(checkinDate, checkoutDate);
        } catch (error) {
            window.location.replace('/');
        }
        if (apartment === undefined) {
            window.location.replace('/');
        }
    }, []);
    return (
        <div id="main-content">
            <div id="content">
                <div id="content-wrapper">
                    <div id="booking__details">
                        <div id="booking__details-content">
                            <section className="card">
                                <div className="card-content">
                                    <div className="card__title">
                                        <p>Your booking details</p>
                                    </div>
                                    <div className="card__dates">
                                        <div className="date-item">
                                            <div className="date-title">
                                                <p>Check-in</p>
                                            </div>
                                            <div className="date">
                                                <div className="title">{checkin}</div>
                                                <div className="subtitle"><span className="data_subtitle">3:00 PM -
                                                    12:00 AM</span></div>
                                            </div>
                                        </div>
                                        <div className="date-item">
                                            <div className="date-title">
                                                <p>Check-out</p>
                                            </div>
                                            <div className="date">
                                                <div className="title">{checkout}</div>
                                                <div className="subtitle"><span className="data_subtitle">3:00 PM -
                                                    12:00 AM</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="date-length">
                                        <p className="date-length__title">Total length of stay</p>
                                        <p className="date-length__subtitle">{days} nights</p>
                                    </div>
                                </div>
                            </section>
                            <section className="card">
                                <div className="card-content">
                                    <div className="card__title">
                                        <p>Your price summary</p>
                                    </div>
                                    <div className="card__price-details">
                                        <div className="price-details__charge-line">
                                            <div className="price-details__charge-type">Apartment</div>
                                            <div className="price-details__charge-value">{apartment.price * days}
                                                Kč</div>
                                        </div>
                                        <div className="price-details__charge-line">
                                            <div className="price-details__charge-type">10% VAT</div>
                                            <div className="price-details__charge-value">308 Kč</div>
                                        </div>
                                        <div className="price-details__charge-line">
                                            <div className="price-details__charge-type">Cleaning fee</div>
                                            <div className="price-details__charge-value">1300 Kč</div>
                                        </div>
                                        <div className="price-details__charge-line">
                                            <div className="price-details__charge-type">City tax</div>
                                            <div className="price-details__charge-value">249 Kč</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-details__total">
                                    <div className="price-details__total-content">
                                        <div className="price-details__charge-type">
                                            <div className="price-details__charge-name">
                                                <p>Price</p>
                                            </div>
                                            <div className="price-details__charge-description">
                                                <p>(your currency)</p>
                                            </div>
                                        </div>
                                        <div className="price-details__charge-value">
                                            <span>{apartment.price * days + 308 + 1300 + 249} Kč *</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div id="booking">
                        <div id="booking-wrapper">
                            <form action="/posts/bookApartment.php" method="post">
                                <div className="form">
                                    <div className="form__title">
                                        <p>Enter your details</p>
                                    </div>
                                    <div className="form__wrapper">
                                        <label for="fname">First Name</label>
                                        <input type="text" id="fname" name="fname" required></input>
                                        <label for="lname">Last Name</label>
                                        <input type="text" id="lname" name="lname" required></input>
                                        <div className="form__flex">
                                            <div className="form__flex__inside">
                                                <label for="email">E-mail</label>
                                                <input type="text" id="email" name="email" required></input>
                                            </div>
                                            <div className="form__flex__inside">
                                                <label for="phone">Tell</label>
                                                <input type="text" id="phone" name="phone" required></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form">
                                    <div className="form__title">
                                        <p>Special Requests</p>
                                    </div>
                                    <div className="form__wrapper">
                                        <input name="parking_please" id="parking_please" type="checkbox" className="form__input-checkbox" value="1"></input>
                                        <label for="parking_please">I'd like private parking on site</label>
                                    </div>
                                </div>
                                <div className="form">
                                    <div className="form__title">
                                        <p>Your arrival time</p>
                                    </div>
                                    <div className="form__wrapper">
                                        <label for="fname">Add your estimated arrival time</label>
                                        <div className="form__input-select_disabled">
                                            <select name="checkin_timeOfArrival" id="checkin_timeOfArrival"
                                                className="form__input-select">
                                                <option value disabled selected>Please select</option>
                                                <option value="-1">I don't know</option>
                                                <option value="12">12:00 PM – 1:00 PM </option>
                                                <option value="13">1:00 PM – 2:00 PM </option>
                                                <option value="14">2:00 PM – 3:00 PM </option>
                                                <option value="15">3:00 PM – 4:00 PM </option>
                                                <option value="16">4:00 PM – 5:00 PM </option>
                                                <option value="17">5:00 PM – 6:00 PM </option>
                                                <option value="18">6:00 PM – 7:00 PM </option>
                                                <option value="19">7:00 PM – 8:00 PM </option>
                                                <option value="20">8:00 PM – 9:00 PM </option>
                                                <option value="21">9:00 PM – 10:00 PM </option>
                                                <option value="22">10:00 PM – 11:00 PM </option>
                                                <option value="23">11:00 PM – 12:00 AM </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form">
                                    <div className="form__title">
                                        <p>Review House Rules</p>
                                    </div>
                                    <div className="form__wrapper">
                                        <p>Your host would like you to agree to the following house rules:</p>
                                        <ul>
                                            <li>No smoking</li>
                                            <li>No parties/events</li>
                                            <li>Quiet hours are between 10:00 PM and 9:00 AM</li>
                                        </ul>
                                        <p>Quiet hours are between 10:00 PM and 9:00 AM</p>
                                    </div>
                                </div>
                                <div className="form">
                                    <div className="form__title">
                                        <p>Payment method</p>
                                    </div>
                                    <div className="form__wrapper">
                                        <p>Not availaible</p>
                                    </div>
                                </div>
                                <input type="hidden" name="apartment" value={apartment.link}></input>
                                <input type="hidden" name="checkin" value={checkin}></input>
                                <input type="hidden" name="checkout" value={checkout}></input>
                                <button type="submit" className="form__submit">Complete the reservation</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BookApartment;