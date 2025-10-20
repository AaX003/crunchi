import "../styles/About.css"

function About() {
    const cards = [
        {
            title: "Quality = Quantity",
            desc: 
                "Crunchi ensures there's an equal balance between quality and quantity in their chicken."
        },
        {
            title: "Always Fresh",
            desc: 
                "Crunchi chicken should never be frozen. Ours is always fresh and cooked to perfection--hot from the fryer!"
        },
        {
            title: "Made with Love",
            desc: 
                "Each chicken, whether it's the arm, leg, or thigh, is hand-breaded and seasoned with not only our signature recipe, but our hearts (not literally)."
        }
    ]
    return (
        <div className="container__about">
            <section className="hero__about">
                <main className="hero">
                <header className="title__hero">
                    <h5 className="breadcrumb">Our STORY</h5>
                    <h3 className="title-about">
                        Satisfy Your <strong>"Savory"</strong> Tooth
                    </h3>
                    <p className="subtitle-about">
                        Established in 2010, Crunchi has made a 
                        promise that they will either provide a community 
                        with high-quality service <strong>and</strong> delicious chicken.
                        Oh, would you look at that! 
                        They got the best of both worlds!
                    </p>
                    <a 
                        href="#!"
                        className="read-btn"
                    >
                        Read our Full Story ▶︎
                    </a>
                </header>
            </main>
        </section>
        <section className="about-display">
            {cards.map((c, idx) => (
                <article key={idx} className="about-cards">
                    <h3 className="card-title">{c.title}</h3>
                    <p className="card-info">{c.desc}</p>
                </article>
            ))}
            <ul className="stats">
                <li className="stat">
                    <span className="value">30+ restaurants,</span>
                    <span className="text">6 countries</span>
                </li>
                <li className="stat">
                    <span className="value">3x</span>
                    <span className="text">Michelin-starred</span>
                </li>
                <li className="stat">
                    <span className="value">100%</span>
                    <span className="text">Fresh Ingredients</span>
                </li>
                <li className="stat">
                    <span className="value">1000%</span>
                    <span className="text">Love (& Southern)</span>
                </li>
            </ul>
        </section>
    </div>
    );
}

export default About