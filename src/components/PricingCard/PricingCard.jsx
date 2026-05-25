import React from 'react';
import './PricingCard.css';

function PricingCard(props) {
  let cardClass = "pricing-card";
  if (props.isPopular) {
    cardClass = "pricing-card popular";
  }

  return (
    <div className={cardClass}>
      <div className="pricing-header">
        <h2 className="price">${props.price}<span>/hr</span></h2>
        <h3 className="plan-name">{props.planName}</h3>
        <p className="plan-subtitle">{props.subtitle}</p>
      </div>
      <div className="pricing-features">
        {props.children}
      </div>
      <button className="btn btn-primary buy-btn">
        {props.buttonText ? props.buttonText : 'Buy Now'}
      </button>
    </div>
  );
}

export default PricingCard;