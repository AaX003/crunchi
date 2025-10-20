import '../styles/Footer.css';
import { FaInstagram, FaFacebook, FaX } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="container__footer" aria-labelledby="site-footer">
      <section className="footer-hero">
        <div className="hero__footer">
          <h2 id="site-footer" className="title__footer">CRUNCHI</h2>
        </div>

        <div className="footer-content">
          <nav className="main-content" aria-label="Footer navigation">
            <div className="footer-col">
              <h3 className="nav-link-title">Contact</h3>
              <address className="contact-block">
                <div>211 Gypsy Rd</div>
                <div>Columbus, OH 34901</div>
                <a href="tel:+15553429843">+1 (555) 342-9843</a><br />
                <a href="mailto:crunchi@chicken.com">crunchi@chicken.com</a>
              </address>
            </div>
          </nav>

          <div className="footer-divider" aria-hidden="true" />

          <div className="add-content">
            <h4 className="social-title">Follow Us</h4>
            <ul className="social-links" aria-label="Social media">
              <li className="social-tag">
                <a href="#!" aria-label="Instagram">
                  <FaInstagram aria-hidden="true" /> Instagram
                </a>
              </li>
              <li className="social-tag">
                <a href="#!" aria-label="Facebook">
                  <FaFacebook aria-hidden="true" /> Facebook
                </a>
              </li>
              <li className="social-tag">
                <a href="#!" aria-label="X (formerly Twitter)">
                  <FaX aria-hidden="true" /> Twitter
                </a>
              </li>
            </ul>
            <small className="rights-reserved-msg">© 2025 Crunchi. All rights reserved.</small>
          </div>
        </div>

        {/* Contact form */}
        <section className="container__form" aria-labelledby="contact-form-title">
          <h3 id="contact-form-title" className="form-title">Submit a meal request</h3>
          <form
            className="form"
            onSubmit={(e) => e.preventDefault()}
            aria-describedby="form-status"
          >
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" autoComplete="email" required />
            </div>

            <div className="form-row">
              <div>
                <label htmlFor="fname">First Name</label>
                <input id="fname" type="text" placeholder="First name" autoComplete="given-name" required />
              </div>
              <div>
                <label htmlFor="lname">Last Name</label>
                <input id="lname" type="text" placeholder="Last name" autoComplete="family-name" required />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Write your request here..." required />
            </div>

            <button className="send-btn" type="submit">Submit Request</button>
            <p id="form-status" className="sr-only" aria-live="polite"></p>
          </form>
        </section>
      </section>
    </footer>
  );
}

export default Footer;