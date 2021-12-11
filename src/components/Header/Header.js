import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-main">
                    <div className="header-logo">MVAhouse</div>
                    <div className="header-icon"><a><i className="fas fa-bars"></i></a></div>
                </div>
                <div className="header-links">
                    <div className="header-link"><a href="/">Home</a></div>
                </div>
            </div>
        </header>
    )
}

export default Header;