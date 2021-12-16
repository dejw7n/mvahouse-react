import React from 'react';

function Footer() {
    return (
        <footer>
            <div id="footer-wrapper">
                <div className="footer-wrap">
                    <div className="footer-contact">
                        <div className="footer-left">
                            <div className="footer-logo">MVAhouse.cz</div>
                        </div>
                    </div>
                </div>
                <div className="footer-wrap">
                    <div id="footer-links">
                        <div className="links-block">
                            <h4>Address</h4>
                            <hr></hr>
                            <p><i className="fas fa-map-marker-alt"></i> Vrchlického 1240/23<br></br>415 01 Teplice</p>
                        </div>
                        <div className="links-block">
                            <h4>Contact</h4>
                            <hr></hr>
                            <p><i className="fas fa-phone-alt"></i> +420 000 000 000</p>
                            <p><i className="fas fa-at"></i> contact@mvahouse.cz</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;