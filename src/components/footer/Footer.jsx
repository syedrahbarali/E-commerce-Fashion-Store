import { FaAngleUp } from "react-icons/fa";
import "./footer.css";
import { footerLinks } from "../../data";
import { Link } from "react-router-dom";

const Footer = () => {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <button onClick={backToTop} className="back-to-top">
        <FaAngleUp />
        Back to top
      </button>

      <div className="links__container container">
        {Object.keys(footerLinks).map((title, index) => (
          <div key={index} className="links__item">
            <span className="title">{title}</span>
            <ul>
              {footerLinks[title].map((link, index) => (
                <li key={index} className="links">
                  <Link>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="copyright__info">
        <div className="footer__icons">
          <img height={"50px"} src="./assets/logo.png" alt="" />
          <span>
            <img height={"16px"} src="./assets/india-flag-icon.svg" alt="" />
            India
          </span>
        </div>

        <p>&copy; 2024. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
