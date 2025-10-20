import "../styles/Hero.css"

function Hero() {
    return (
        <div className="container__hero">
            <section className="hero">
            <div className="hero--with-photo"></div>
            <header className="header__hero">
                <h1 className="title-hero">
                    Crunchi
                </h1>
                <p className="subtitle-hero">
                    Experience the <strong>perfect</strong> crunch.
                    Indulge in our signature crispy fried chicken, 
                    made with our secret blend of herbs and spices. 
                    Every bite is a celebration of flavor and crunch.
                </p>
            </header>
                <a 
                    href="#!"
                    className="view-menu-btn"
                >
                    View Full Menu →
                </a>
            </section>
        </div>
    );
}

export default Hero