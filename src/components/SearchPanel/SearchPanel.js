import React from 'react';
import './SearchPanel.css';
import DateCalendar from '../DateCalendar/DateCalendar';

function SearchPanel() {
    return (
        <div className="searchPanel">
            <form action="/search" method="get">
                <div className="search-form">
                    <div className="search-form__option">
                        <div className="search-form__option__wrap">
                            <div className="search-form__option__title">Check-in</div>
                            <div className="search-form__option__content">
                                <div className="searchbox__checkin" tabIndex="1">
                                    <div className="searchbox__check__icon-calendar">
                                        {/*<i className="far fa-calendar-plus" style="font-size:24px"></i>*/}
                                    </div>
                                    <div className="searchbox__checkin-text">Check-in Date</div>
                                    <input type="hidden" name="checkin" id="calendar-checkin-input" value=""></input>
                                    <div className="calendar-checkin" style={{display: "none"}}>
                                        <DateCalendar />
                                    </div>
                                    {/*<input type="date" name="checkin" id="" required>*/}
                                    {/*<div className="searchbox__check__icon-arrow">
                                <i className="fas fa-angle-down" style="font-size:24px"></i>
    </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-form__border"></div>
                    <div className="search-form__option">
                        <div className="search-form__option__wrap">
                            <div className="search-form__option__title">Check-out</div>
                            <div className="search-form__option__content">
                                <div className="searchbox__checkout" tabIndex="1">
                                    <div className="searchbox__check__icon-calendar">
                                        {/*<i className="far fa-calendar-plus" style="font-size:24px"></i>*/}
                                    </div>
                                    <div className="searchbox__checkout-text">Check-out Date</div>
                                    <input type="hidden" name="checkout" id="calendar-checkout-input" value=""></input>
                                    <div className="calendar-checkout" style={{display: "none"}}>
                                        <DateCalendar />
                                    </div>
                                    {/*<div className="searchbox__check__icon-arrow">
                                <i className="fas fa-angle-down" style="font-size:24px"></i>
</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-form__border"></div>
                    <div className="search-form__advance"></div>
                    <div className="search-form__border"></div>
                    <button type="submit" className="search-form__searchBtn">
                        <div className="search-form__searchBtn__wrap">
                            <span>{/*<i className="fas fa-search"></i>*/}Search</span>
                        </div>
                    </button>
                </div>
            </form>

            <div className="coronavirus-card">
                <p>{/*<i className="fas fa-info-circle"></i>*/} Get the advice you need. Check the latest COVID-19 restrictions before you travel.</p>
            </div>
        </div>
    )
}

export default SearchPanel;