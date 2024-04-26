import About from "../components/About";

import "./products.scss";

import girl from "../img/girl-865304_1920.jpeg";
import line from "../img/Line.png";
import Card from "../components/Card";
import { data } from "../data/data";

export default function Products() {
  return (
    <article className="products">
      <section className="products__about">
        <img className="products__img" src={girl} alt="" />
        <About></About>
      </section>
      <img className="products__line" src={line} alt="line" />
      <article className="products__filter">
        <div className="filter">
          <div className="filter__type">
            <div className="type">
              <div className="type__search">
                <label className="type__label" htmlFor="search">
                  Lookiing for
                </label>
                <input
                  className="type__input"
                  id="search"
                  type="text"
                  placeholder="start typing here..."
                />
              </div>
              <div className="type__buttons">
                <h3 className="type__title">Or filter</h3>
                <button className="type__btn">Brazil</button>
                <button className="type__btn">Kenya</button>
                <button className="type__btn">Columbia</button>
              </div>
            </div>
          </div>
          <div className="filter__cards">
            {data.map((product, i) => (
              <Card
                key={i}
                img={product.img}
                name={product.name}
                price={product.price}
                country={product.country}
              ></Card>
            ))}
          </div>
        </div>
      </article>
    </article>
  );
}
