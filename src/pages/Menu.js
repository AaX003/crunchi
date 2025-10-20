import "../styles/Menu.css";

// IMAGES
import chickenClassic from "../images/chickenOg.jpg";
import spicyChickenClassic from "../images/spicyChicken.jpg";
import chickenClassicSandwich from "../images/chickenSandOg.jpg";
import spicyChickenSandwich from "../images/spicyChickenSandOg.jpg";
import chickenClassicTenders from "../images/chickenTenderOg.jpg";
import spicyChickenTenders from "../images/spicyChickenTenders.jpg";
import chickenClassicLongwich from "../images/chickenSandWide.jpg";
import spicyChickenLongwich from "../images/spicyChickenSandWide.jpg";

import { IoMdStar } from "react-icons/io";

function Menu() {
  const items = [
    { img: chickenClassic, name: "Classic Crunchi Chicken", popular: true, rating: "4.9", sizes: ["S","M","L"] },
    { img: spicyChickenClassic, name: "Spicy Crunchi Chicken", spicy: true, rating: "4.5", sizes: ["S","M","L"] },
    { img: chickenClassicSandwich, name: "Classic Crunchi Chicken Sandwich", popular: true, rating: "4.9", sizes: ["S","M","L"] },
    { img: spicyChickenSandwich, name: "Spicy Crunchi Chicken Sandwich", spicy: true, rating: "4.9", sizes: ["S","M","L"] },
    { img: chickenClassicTenders, name: "Classic Crunchi Chicken Tenders", popular: true, rating: "4.9", sizes: ["S","M","L"] },
    { img: spicyChickenTenders, name: "Spicy Crunchi Chicken Tenders", spicy: true, rating: "4.8", sizes: ["S","M","L"] },
    { img: chickenClassicLongwich, name: "Crunchi Chicken Longwich", new: true, rating: "4.5", sizes: ["S","M","L"] },
    { img: spicyChickenLongwich, name: "Spicy Crunchi Chicken Longwich", new: true, rating: "4.5", sizes: ["S","M","L"] },
  ];

  return (
    <div className="container__menu">
      <section className="title__menu">
        <header className="menu-header">
          <h5 className="breadcrumb">Our Menu</h5>
          <h3 className="menu-title">Chicken Specials</h3>
          <div className="decorative-divider" />
          <p className="menu-subtitle">
            Browse our crispy crowd-pleasers! If you see something you like, don’t be <strong>chicken</strong>—check the full menu. Bawk!
          </p>
        </header>
      </section>

      <section className="showcase__menu">
        <div className="menu-display" role="list">
          {items.map((i) => (
            <article key={i.name} className="menu-item" role="listitem">
              <div className="img-wrap">
                <img src={i.img} alt={i.name} loading="lazy" />
                <div className="badges">
                  {i.popular && <span className="badge popular">Popular</span>}
                  {i.spicy && <span className="badge spicy">Spicy</span>}
                  {i.new && <span className="badge new">New</span>}
                </div>
              </div>

              <h2 className="item-name">{i.name}</h2>

              <div className="meta-row">
                <span className="rating" aria-label={`Rated ${i.rating} out of 5`}>
                  <IoMdStar aria-hidden="true" /> {i.rating}
                </span>
                <ul className="sizes" aria-label="Available sizes">
                  {i.sizes.map((s) => (
                    <li key={s} className="size-pill">{s}</li>
                  ))}
                </ul>
              </div>

              <button className="view-btn" type="button">
                View ▶︎
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;