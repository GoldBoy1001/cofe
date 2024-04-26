import { Link } from "react-router-dom";

interface NavProps {
  logo: string;
}

export default function Nav({ logo }: NavProps) {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <Link to={"/"} className="header__item">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to={"/"} className="header__item">
          Coffee house
        </Link>
        <Link to={"/products"} className="header__item">
          Our coffee
        </Link>
      </ul>
    </nav>
  );
}
