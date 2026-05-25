import React from 'react';
import './CTA.css';

function CTA(props) {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <div className="cta-content">
          <h2>{props.title}</h2>
          <div className="cta-line"></div>
          <p>{props.description}</p>
          <button className="btn btn-primary">{props.buttonText}</button>
        </div>
        <div className="cta-image">
          <img src={props.image} alt="Call to action" />
        </div>
      </div>
    </section>
  );
}

export default CTA;
