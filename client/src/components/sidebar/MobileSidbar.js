import React from "react";
import { Link } from "react-router-dom";
import '../../css/styleV1.css'

export default function MobilSidebar() {
  return (
    <div className="row mobile-row">
      <div className="col s6">
    <ul className="mobile-side_bar  white accent-4 MobileSide">
      <li className="">
        <Link className="side_link blue-grey-text  text-darken-4" to="/skills">
          <i className="fas fa-laptop-code blue-grey-text  text-darken-3"></i>
          <p>skills</p>
        </Link>
      </li>

      <li className="">
      
        <Link className="side_link blue-grey-text  text-darken-4" to="/experience">
          <i className="fas fa-user-clock blue-grey-text  text-darken-3"></i>
          <p>Experience</p>
        </Link>
      </li>
      <li className="">
        <Link className="side_link blue-grey-text  text-darken-4" to="/certification">
          <i className="fas fa-graduation-cap blue-grey-text  text-darken-3"></i>
          <p>Certification</p>
        </Link>
      </li>
      </ul>
      </div>
      
      <div className="col s6">
      <ul className="mobile-side_bar  white accent-4 MobileSide">
      <li className="">
        <Link className="side_link blue-grey-text  text-darken-4" to="/education">
          <i className="fas fa-university   blue-grey-text  text-darken-3"></i>
          <p>Education</p>
        </Link>
      </li>
      <li >
        <a href="https://www.linkedin.com/in/bindu-trikha-23b92440/" target="_blank" className="side_link blue-grey-text  text-darken-4" >
          <i className="fab fa-linkedin-in   blue-grey-text  text-darken-3"></i>
          <p>LinkedIn</p>
        </a>
      </li>
      <li >
      <a href="https://github.com/1208bindu" target="_blank" className="side_link blue-grey-text  text-darken-4" >
          <i className="fab fa-github   blue-grey-text  text-darken-3"></i>
          <p>GitHub </p>
        </a>
      </li>

    </ul>
    </div>
    </div>
  );
}
