import React from "react";
import "../../css/styleV1.css";
const Experience = () => {
  return (
    <div className=" Box-education   ">
      <h2 className=" blue-grey-text   text-darken-4">Experience</h2>

      <ul className=" list">
        <li>
          <span className="red-text ">
            <b>Sept 2020 - Ongoing</b>
          </span>
          <p>
            Visiting Faculty (Online Classes)
            <br />
            IMS Ghaziabad, India
          </p>
        </li>
        <div className="divider"></div>

        <li>
          <span className="red-text ">
            <b>Aug 2020- Dec 2020</b>{" "}
          </span>
          <p>
            Online FullStack Boot Camp Instructor
            <br />
            Codify College AB, Sweden
          </p>
        </li>
        <div className="divider"></div>

        <li>
          <span className="red-text ">
            <b>Aug 2006 - Feb 2020</b>{" "}
          </span>
          <p>
            Assistant Professor
            <br />
            IMS Ghaziabad, University Courses Campus, India
          </p>
        </li>
        <div className="divider"></div>

        <li>
          <span className="red-text ">
            <b>July 2004 - July 2006</b>{" "}
          </span>
          <p>
            Lecturer
            <br />
            Banasthali VidhyaPith, India
          </p>
        </li>

        <div className="divider"></div>

        <li>
          <span className="red-text ">
            <b>July 2003 - July 2004</b>{" "}
          </span>
          <p>
            Lecturer
            <br />
            Shri A.V. Jain Girls College, Sriganganagar, India
          </p>
        </li>

        <div className="divider"></div>
      </ul>
    </div>
  );
};

export default Experience;
