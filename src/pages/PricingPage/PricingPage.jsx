import React from 'react';
import PricingCard from '../../components/PricingCard/PricingCard';
import CTA from '../../components/CTA/CTA';
import { FaCheckCircle } from 'react-icons/fa';
import './PricingPage.css';

function PricingPage() {
  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="container pricing-hero-container">
          <div className="pricing-hero-content">
            <span className="badge">Monthly Assistance - Get upto %40 off</span>
            <h1>Design Solutions<br/>For You</h1>
            <p>With our advanced technology, you can enjoy a safe and private internet experience without compromising the performance of your computer and mobile devices.</p>
          </div>
          <div className="pricing-hero-image">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Design Solutions" />
          </div>
        </div>
      </section>

      <section className="pricing-plans-section">
        <div className="container">
          <div className="pricing-plans-header">
            <h2>Our Pricing</h2>
            <p>Shop, stream, bank and browse the web design & dev. by an industry-leader for all your devices.</p>
          </div>
          
          <div className="pricing-cards-grid">
            
            <PricingCard 
              price="50" 
              planName="App Design" 
              subtitle="Essential Services for a Startup App Design"
              isPopular={false}
              buttonText="Buy Now"
            >
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Only Android App</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Responsive Design</span>
              </div>
            </PricingCard>

            <PricingCard 
              price="499" 
              planName="Popular" 
              subtitle="Advanced Level Company App Design for Mobile"
              isPopular={true}
              buttonText="Buy Now"
            >
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Android Version App</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>iOS Version App</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Landing Page Design</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Responsive Designs</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Advertising Designs</span>
              </div>
            </PricingCard>

            <PricingCard 
              price="999" 
              planName="Premium Suite" 
              subtitle="VIP Level of Product Design Services"
              isPopular={false}
              buttonText="Buy Now"
            >
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Android App Version</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>iOS App Version</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Landing Page Design</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Web Application Design</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Marketing Materials</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Advertisement Design</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Dashboard Design</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Branding</span>
              </div>
            </PricingCard>

          </div>
        </div>
      </section>

      <CTA 
        title="Not sure which solution is best for you?"
        description="Don't worry, we can help match you to your perfect brand & product solution in just 30 seconds."
        buttonText="Help Me Choose"
        image="/imgs/4dd7f339db950da725b41aad46b9b063772fc9ab.jpg"
      />
    </div>
  );
}

export default PricingPage;
