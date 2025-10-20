import { useState } from "react";
import "../styles/Nav.css"

// SVGS
import { RxHamburgerMenu } from "react-icons/rx";
import { CiMedal, CiSearch, CiShoppingCart, CiShoppingTag, CiUser } from "react-icons/ci";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container__nav">
            <nav className="nav">
                <h1 className="nav-title">
                    CRUNCHI
                </h1>
                <div className="nav-links">
                    <a href="menu">Menu</a>
                    <a href="story">Story</a>
                    <a href="reviews">Reviews</a>
                    <a href="newsletter">Newsletter</a>
                </div>
                <button 
                    id="menu-btn"
                    className="hamburger-menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-label="Toggle menu"
                    aria-controls="supple-links__nav"
                >
                <RxHamburgerMenu />
            </button>
             <div id="supple-links__nav" className={`supple-links ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
                <a href="#!">
                    <span className="link-svg"><CiSearch /></span>
                    Search
                </a>
                <a href="#!">
                    <span className="link-svg"><CiUser /></span>
                    Account
                </a>
                <a href="#!">
                    <span className="link-svg"><CiShoppingCart /></span>
                    Cart
                </a>
                <a href="#!">
                    <span className="link-svg"><CiMedal /></span>
                    Rewards
                </a>
                <a href="#!">
                    <span className="link-svg"><CiShoppingTag /></span>
                    Deals
                </a>
            </div>
            </nav>
        </div>
    );
}

export default Nav