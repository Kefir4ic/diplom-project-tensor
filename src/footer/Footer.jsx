import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__links">
                <div className="footer__nav">
                    <div className="footer__nav__title">COMPANY</div>
                    <ul>
                    <li className="li__footer"><a href="#" className="footer__link">About</a></li>
                    <li className="li__footer"><a href="#" className="footer__link">Contact Us</a></li>
                    <li className="li__footer"><a className="footer__link">Jobs</a></li>
                    </ul>
                </div>

                <div className="footer__nav">
                    <div className="footer__nav__title">HELP</div>
                    <ul>
                    <li className="li__footer"><a href="#" className="footer__link">Track My Music</a></li>
                    <li className="li__footer"><a href="#" className="footer__link">Community Support</a></li>
                    <li className="li__footer"><a href="#" className="footer__link">Community Guidelines</a></li>
                    <li className="li__footer"><a href="#" className="footer__link">Help</a></li>
                    </ul>
                </div>

                <div className="footer__nav">
                    <div className="footer__nav__title">GOODIES</div>
                    <ul>
                    <li className="li__footer"><a href="#" className="footer__link">Download Scrobbler</a></li>
                    <li className="li__footer"><a href="#" className="footer__link">Developer API</a></li>
                    <li className="li__footer"><a href="#" className="footer__link">Free Music Downloads</a></li>
                    <li className="li__footer"><a href="#" className="footer__link">Merchandise</a></li>
                    </ul>
                </div>

                <div className="footer__nav">
                    <div className="footer__nav__title">ACCOUNT</div>
                    <ul>
                    <li className="li__footer"><a href="#" className="footer__link">Sign Up</a></li>
                    <li className="li__footer"><a href="#" className="footer__link">Log In</a></li>
                    <li className="li__footer"><a href="#" className="footer__link">Subscribe</a></li>
                    </ul>
                </div>

                <div className="footer__nav">
                    <div className="footer__nav__title">FOLLOW US</div>
                    <ul>
                    <li className="li__footer"><a href="#" className="footer__link">Facebook</a></li>
                    <li className="li__footer"><a href="#" className="footer__link">Twitter</a></li>
                    <li className="li__footer"><a href="#" className="footer__link">Instagram</a></li>
                    <li className="li__footer"><a href="#" className="footer__link">YouTube</a></li>
                    </ul>
                </div>
            </div>

            <hr className="footer__hr"></hr>

            <div className="footer__languages">
                <a href="#" className="footer__link__language">English</a>
                <a href="#" className="footer__link__language">Deutsch</a>
                <a href="#" className="footer__link__language">Español</a>
                <a href="#" className="footer__link__language">Français</a>
                <a href="#" className="footer__link__language">Italiano</a>
                <a href="#" className="footer__link__language">日本語</a>
                <a href="#" className="footer__link__language">Polski</a>
                <a href="#" className="footer__link__language">Português</a>
                <a href="#" className="footer__link__language">Русский</a>
                <a href="#" className="footer__link__language">Svenska</a>      
                <a href="#" className="footer__link__language">Türkçe</a>
                <a href="#" className="footer__link__language">简体中文</a>
            </div>

            <div className="footer__timezone">
                Time zone:
                <div className="footer__timezone__current">Europe/Moscow</div>
            </div>
            <div className="footer__copyright">
                CBS Interactive © 2022 Last.fm Ltd. All rights reserved Terms of Use Privacy 
                Policy Legal Policies Cookies Policy Cookie Information Jobs at ViacomCBS 
                Last.fm Music
            </div>
        </footer>
    )
}