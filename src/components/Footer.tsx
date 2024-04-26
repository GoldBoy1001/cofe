import Nav from "./Nav";
import "./footer.scss";
import logoAfter from "../img/Beans logo.svg";
import logo from "../img/logo-footer.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__list">
          <Link to={"/"} className="footer__item">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to={"/"} className="footer__item">
            Coffee house
          </Link>
          <Link to={"/products"} className="footer__item">
            Our coffee
          </Link>
          <Link to={"/products"} className="footer__item">
            For your pleasure
          </Link>
        </ul>
      </nav>
      <img src={logoAfter} alt="" />
    </footer>
  );
}
