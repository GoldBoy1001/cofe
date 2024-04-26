import { Link, useLocation } from "react-router-dom";
import logo from "../img/Vector.svg";
import bg from "../img/Main bg.jpeg";
import bg2 from "../img/Mask Group-1.jpeg";
import titleAfter from "../img/Beans logo-1.svg";
import "./header.scss";
import Nav from "./Nav";

export default function Header() {
  const { pathname } = useLocation();
  const homeTitle = "Everything You Love About Coffee";
  const title = "Our Coffee";

  return (
    <header className="header">
      <img
        className="header__img"
        src={pathname === "/" ? bg : bg2}
        alt="Background"
      ></img>

      <Nav logo={logo}></Nav>

      <article className="header__title">
        <div className="title">
          <h1 className="title__title">
            {pathname === "/" ? homeTitle : title}
          </h1>

          {pathname === "/" && (
            <div>
              <img src={titleAfter} alt="title__img" className="title__img" />
              <p className="title__text">
                We makes every day full of energy and taste{" "}
                <span>Want to try our beans?</span>
              </p>
              <Link to={"/products"} className="title__btn">
                More
              </Link>
            </div>
          )}
        </div>
      </article>
    </header>
  );
}
