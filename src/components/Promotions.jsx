import React, { useState } from "react";
import "./../styles/promotions.less";
import Service1 from "./../assets/images/service1.jpg";
import Service2 from "./../assets/images/service2.jpg";
import Service3 from "./../assets/images/service3.jpg";

const promotions = [
  {
    title: "Responsive Websites",
    description:
      "We build responsive websites with rich functionality, resulting in great customer experiences and increased engagement. Our sites are all SEO friendly and offer some great advantages over our competitors.",
    image: Service1,
  },
  {
    title: "Dedicated Customer Support",
    description:
      "The Click Dealer team is extremely friendly and dedicated, with many years of automotive experience between us you can expect incredible service and fast responses 7 days a week. We love customer feedback.",
    image: Service2,
  },
  {
    title: "SEO & Marketing",
    description:
      "Our in house SEO and Social Media experts can help to build, optimise and improve your online visibility. Whether it’s advice and guidance you’re after or training on our automated marketing tools, we are always here to help.",
    image: Service3,
  },
];

const Promotions = () => {
  const middlePromotion = promotions[1];
  console.log(middlePromotion);

  const [showMiddle, setShowMiddle] = useState(true);

  const toggleMiddleColumn = () => {
    setShowMiddle((prev) => !prev);
  };

  return (
    <section className="promotions">
      <div className="promotions__container">
        {promotions.map((promo, index) => {
          // If the middle element is hidden, skip rendering it
          if (index === 1 && !showMiddle) {
            return null;
          }

          return (
            <div key={index} className="promotions__item">
              <img
                src={promo.image}
                alt={promo.title}
                className="promotions__image"
              />
              <h3 className="promotions__title">{promo.title}</h3>
              <p className="promotions__description">{promo.description}</p>
              <button className="promotions__cta">
                Learn More <i class="fa-solid fa-chevron-right ml-1.5"></i>
              </button>
            </div>
          );
        })}
      </div>
      {/* Toggle Button */}
      <button onClick={toggleMiddleColumn} className="toggle-btn">
        {showMiddle ? "Hide Middle Promotion" : "Show Middle Promotion"}
      </button>
    </section>
  );
};

export default Promotions;
