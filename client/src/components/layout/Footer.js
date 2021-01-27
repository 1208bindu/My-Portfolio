import React from "react";
import { Link } from "react-router-dom";
import "../../css/styleV1.css";
const Footer = () => {
  return (
    <footer className="page-footer">
     {/* <div className="container">
        <div className="row">
          <div className=" colmns">
             <div className="col l4 offset-l2 s12 footer_list">
              <ul className="footer_list">
                <li>
                  <Link className="grey-text text-lighten-3" to="/skills">
                   Skills
                  </Link>
                </li>

                <li>
                  {" "}
                  <Link className="grey-text text-lighten-3" to="/experience">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    className="grey-text text-lighten-3"
                    to="/certification"
                  >
                    Certification
                  </Link>
                </li>
                <li>
                  <Link className="grey-text text-lighten-3" to="/education">
                    Education
                  </Link>
                </li>
              </ul>
            </div>
            <div className="icons">
              
             
            <a href="https://github.com/1208bindu" target="_blank" >
                <i className="fab fa-github"></i>
            </a>

              <a href="https://www.linkedin.com/in/bindu-trikha-23b92440/" target="_blank" >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="contact_info">
              <div className="email">
                <i className="far fa-envelope"></i> email.com
              </div>
              <div className="phone">
                <i className="fas fa-mobile-alt"></i> +78945613
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="footer-copyright ">
        <div className="container">
          © Bindu trikha
          <br/><i className="far fa-envelope"></i> bindu.trikha@gmail.com
          <br/><i className="fas fa-mobile-alt"></i> +47 40969175
        </div>
      </div>
    </footer>
  );
};

export default Footer;
