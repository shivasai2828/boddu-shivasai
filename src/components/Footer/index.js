import { Link } from "react-router-dom";
import "./index.css";
import { FaLinkedinIn } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
const Footer = (props) => {
  return (
    <>
      <div className="bg-footer">
        <div className="footer-conter">
          <ul className="footer-links">
            <li>
              <Link to="/" className="links-footer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="links-footer">
                About
              </Link>
            </li>
            <li>
              <Link to="/Projects" className="links-footer">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/LearnWithme" className="links-footer">
                Learn With Me
              </Link>
            </li>
          </ul>
          <ul className="footer-social-links">
            <li>
              <a
                href="https://linkedin.com/in/shivasai-boddu"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="social-link-footer" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/shivasai2828"
                target="_blank"
                className="links"
                rel="noreferrer"
              >
                <ImGithub className="social-link-footer" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/shivasai-boddu"
                target="_blank"
                className="links"
                rel="noreferrer"
              >
                <GrInstagram className="social-link-footer" />
              </a>
            </li>
          </ul>
          <p className="copys">
            Copyright ©2024 - 2030 Learn With <span>Shivasai Boddu</span> Inc.
            All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
