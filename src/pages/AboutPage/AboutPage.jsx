import React from 'react';
import NewsCard from '../../components/NewsCard/NewsCard';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container about-hero-container">
          <div className="about-hero-content">
            <h1>About Yogi</h1>
            <p>We free and empower consumers and families to confidently enjoy life online.</p>
            <button className="btn btn-primary">Corporate Fact Sheet</button>
          </div>
          <div className="about-hero-image">
            <div className="dots-pattern"></div>
            <img src="/imgs/643d58094f464d9267d142445a80291c243d03ab (1).jpg" alt="About Yogi" />
          </div>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          <div className="news-header">
            <h2>What's happening at Yogi ?</h2>
          </div>
          <div className="news-cards-grid">
            
            <NewsCard 
              image="/imgs/3fb27dc0dda381024b572294d42a8aab6d71be85.jpg"
              title="Awards"
              description="See product evaluations from third-party analysts."
              date="9 September, 2019"
            />

            <NewsCard 
              image="/imgs/4dd7f339db950da725b41aad46b9b063772fc9ab.jpg"
              title="Company"
              description="Access the latest press releases and other resources for the media."
              date="9 September, 2019"
            />

            <NewsCard 
              image="/imgs/a5afb9f6a9095b1e85706baaaf533f81725ccddd.jpg"
              title="Works"
              description="Inclusion at McAfee is about the power of working together and creating a culture where all voices are valued."
              date="9 September, 2019"
            />

          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
