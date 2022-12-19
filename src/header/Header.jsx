import './header.css';

export default function Header() {
    return (
        <header className="header">

            <div className="header__player"> 
                <img src="https://www.last.fm/static/images/defaults/player_default_album.430223706b14.png"></img>
            </div>

            <div className="header__logo">
                <a href="#" className="header__link">
                    <img src="https://www.last.fm/static/images/logo_animate.e1b8206ad4c7.gif"></img>
                </a>
            </div>

            <nav className="header__nav">
                <a href="./search.html" className="header__link">Search</a>
                <a href="./index.html" className="header__link">Home</a>
                <a href="#" className="header__link">Live</a>
                <a href="#" className="header__link">Music</a>
                <a href="#" className="header__link">Charts</a>
                <a href="#" className="header__link">Events</a>
                <a href="#" className="header__link">Features</a>
            </nav>

        </header>
    );
}
