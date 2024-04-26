import "./aboutCard.scss";

import card from "../img/Mask Group.jpeg";
import cofe from "../img/Beans logo.svg";

export default function AboutCard() {
  return (
    <article className="card-about">
      <div className="about-card">
        <img className="about-card__img" src={card} alt="img"></img>
        <section className="about-card__about">
          <h2 className="about-card__about-title">About it</h2>
          <img className="about-card__about-img" src={cofe} alt="img" />
          <div className="about-card__about-country">
            <span>Country:</span> Brasil
          </div>
          <p className="about-card__about-description">
            <span>Description:</span> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <span className="about-card__about-price">
            <span>Price:</span> 16.99$
          </span>
        </section>
      </div>
    </article>
  );
}
