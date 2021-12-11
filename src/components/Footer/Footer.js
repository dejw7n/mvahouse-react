import React from 'react';

function Footer() {
    return (
        <footer>
            <div id="footer-wrapper">
                <div class="footer-wrap">
                    <div class="footer-contact">
                        <div class="footer-left">
                            <div class="footer-logo">MVAhouse.cz</div>
                        </div>
                    </div>
                </div>
                <div class="footer-wrap">
                    <div id="footer-links">
                        <div class="links-block">
                            <h4>Address</h4>
                            <hr></hr>
                            <p><i class ="fas fa-map-marker-alt"></i> Vrchlického 1240/23<br></br>415 01 Teplice</p>
                        </div>
                        <div class="links-block">
                            <h4>Contact</h4>
                            <hr></hr>
                            <p><i class ="fas fa-phone-alt"></i> +420 000 000 000</p>
                            <p><i class ="fas fa-at"></i> contact @mvahouse.cz</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;