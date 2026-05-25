import React from 'react';
import './NewsCard.css';

function NewsCard(props) {
  return (
    <div className="news-card">
      <div className="news-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="news-content">
        <h3 className="news-title">{props.title}</h3>
        <p className="news-description">{props.description}</p>
        <span className="news-date">{props.date}</span>
      </div>
    </div>
  );
}

export default NewsCard;
