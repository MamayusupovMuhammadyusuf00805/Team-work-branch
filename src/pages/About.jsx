import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      <section className="aboutHero">
        <div>
          <h1>About Yogi</h1>

          <p>
            We empower consumers and families
            to confidently life online.
          </p>

          <button>Corporate Fact Sheet</button>
        </div>

        <img
          src="/imgs/643d58094f464d9267d142445a80291c243d03ab (1).jpg"
          alt=""
        />
      </section>

      <section className="news">
        <h2>What's happening at Yogi?</h2>

        <div className="newsCards">
          <div className="newsCard">
            <img
              src="/imgs/3fb27dc0dda381024b572294d42a8aab6d71be85.jpg"
              alt=""
            />
            <h3>Awards</h3>
            <p>See product evaluations from third-party analysts.</p>
          </div>

          <div className="newsCard">
            <img
              src="/public/imgs/4dd7f339db950da725b41aad46b9b063772fc9ab.jpg"
              alt=""
            />
            <h3>Company</h3>
            <p>Access latest press releases.</p>
          </div>

          <div className="newsCard">
            <img
              src="/imgs/a5afb9f6a9095b1e85706baaaf533f81725ccddd.jpg"
              alt=""
            />
            <h3>Works</h3>
            <p>Creative teamwork and value.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;