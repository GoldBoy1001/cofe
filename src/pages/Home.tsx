import "./home.scss";

import titleAfter from "../img/Beans logo.svg";
import card1 from "../img/card-1.png";
import card2 from "../img/card-2.png";
import card3 from "../img/card-3.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <article className="home">
        <section className="home__about">
          <div className="about">
            <h2 className="about__title">About Us</h2>
            <img className="about__img" src={titleAfter} alt="img"></img>
            <p className="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.
            </p>
            <p className="about__text">
              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </p>
          </div>
        </section>
        <section className="home__best">
          <div className="best">
            <h2 className="best__title">Our best</h2>
            <div className="best__cards">
              <Link to={"/card"}>
                <article className="card">
                  <img className="card__img" src={card1} alt="img"></img>
                  <h3 className="card__name">Solimo Coffee Beans 2 kg</h3>
                  <span className="card__price">10.73$</span>
                </article>
              </Link>
              <Link to={"/card"}>
                <article className="card">
                  <img className="card__img" src={card2} alt="img"></img>
                  <h3 className="card__name">Presto Coffee Beans 1 kg</h3>
                  <span className="card__price">15.99$</span>
                </article>
              </Link>
              <Link to={"/card"}>
                <article className="card">
                  <img className="card__img" src={card3} alt="img"></img>
                  <h3 className="card__name">AROMISTICO Coffee 1 kg</h3>
                  <span className="card__price">6.99$</span>
                </article>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
