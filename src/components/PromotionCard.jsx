import React from "react";

const PromotionCard = ({ image, icon, title, description, cta }) => {
  return (
    <div className="promotion-card">
      <img src={image} alt={title} className="promo-image" />
      <div className="promo-content">
        <div className="promo-icon">{icon}</div>
        <h3 className="promo-title">{title}</h3>
        <p className="promo-description">{description}</p>
        <button className="promo-cta">{cta}</button>
      </div>
    </div>
  );
};

export default PromotionCard;
