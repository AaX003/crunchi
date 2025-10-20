import "../styles/Newsletter.css";

function Newsletter() {
    return (
         <div className="newsletter-container">
             <section className="title__about">
                <header className="newsletter-header">
                    <h2 className="newsletter-title">
                        Join The Crunchi Fam
                    </h2>
                    <div className="decorative-divider"></div>
                    <p className="newsletter-subtitle">
                        Subscribe to us for exclusive recipes,
                        discounts, limited-time only meals, and
                        raffle opportunities!
                    </p>
                </header>
            </section>
            <section className="form-section">
                <form className="newsletter-form">
                    <label htmlFor="nl-email">Email</label>
                    <input
                        id="nl-email"
                        name="email"
                        type="email"
                        placeholder="Enter Your Email"
                        autoComplete="email"
                        required
                    />
                    <button type="submit" className="subscribe-btn">Become a Crunchi</button>
                </form>
            </section>
        </div>
    );
}

export default Newsletter