/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import "../../css/styleV1.css";

export default function Sidebar() {
  return (
    <ul className="side_bar collection  white accent-4">
      <li>
        <Link className="side_link blue-grey-text  text-darken-4" to="/skills">
          <i className="fas fa-laptop-code blue-grey-text  text-darken-3"></i>
          <p>Skills</p>
        </Link>
      </li>

      <li>
        <Link
          className="side_link blue-grey-text  text-darken-4"
          to="/experience"
        >
          <i className="fas fa-user-clock blue-grey-text  text-darken-3"></i>
          <p>Experience</p>
        </Link>
      </li>

      <li>
        <Link
          className="side_link blue-grey-text  text-darken-4"
          to="/certification"
        >
          <i className="fas fa-graduation-cap blue-grey-text  text-darken-3"></i>
          <p>Certification</p>
        </Link>
      </li>

      <li>
        <Link
          className="side_link blue-grey-text  text-darken-4"
          to="/education"
        >
          <i className="fas fa-university   blue-grey-text  text-darken-3"></i>
          <p>Education</p>
        </Link>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/bindu-trikha-23b92440/"
          target="_blank"
          className="side_link blue-grey-text  text-darken-4"
        >
          <i className="fab fa-linkedin-in   blue-grey-text  text-darken-3"></i>
          <p>LinkedIn</p>
        </a>
      </li>

      <li>
        <a
          href="https://github.com/1208bindu"
          target="_blank"
          className="side_link blue-grey-text  text-darken-4"
        >
          <i className="fab fa-github   blue-grey-text  text-darken-3"></i>
          <p>GitHub </p>
        </a>
      </li>
    </ul>
  );
}
