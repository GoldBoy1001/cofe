import { Link } from "react-router-dom";

interface CardProps {
  img: string;
  name: string;
  price: string;
  country: string;
}

export default function Card({ img, name, price, country }: CardProps) {
  return (
    <Link to={"/card"}>
      <article className="card card-shadow">
        <img className="card__img" src={img} alt="img"></img>
        <h3 className="card__name">{name}</h3>
        <h3 className="card__country">{country}</h3>
        <span className="card__price">{price}</span>
      </article>
    </Link>
  );
}
