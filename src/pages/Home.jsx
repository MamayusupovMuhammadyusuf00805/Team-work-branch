import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PricingCard from "../components/PricingCard/PricingCard";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="heroText">
          <span>Monthly Assistance - Get upto %40 off</span>

          <h1>
            Design Solutions <br /> For You
          </h1>

          <p>
            With our advanced technology, you can enjoy
            safe internet experience.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt=""
        />
      </section>

      <section className="pricing">
        <h2>Our Pricing</h2>

        <div className="cards">
          <PricingCard price="50" title="App Design" />
          <PricingCard price="499" title="Popular" />
          <PricingCard price="999" title="Premium" />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;