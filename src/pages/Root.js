// COMPONENTS
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Menu from "./Menu";
import Nav from "./Nav";
import Newsletter from "./Newsletter";

function Main() {
    return (
        <div className="container">
            <Nav />
            <Hero />
            <About />
            <Menu />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Main