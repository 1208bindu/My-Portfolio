import React from "react";
import "../../css/styleV1.css";
const Education = () => {
  return (
    <div className=" Box-education   ">
      <h2 className=" blue-grey-text   text-darken-4">Education</h2>

      <ul className=" list">
        <li>
          <span className="red-text ">
            <b>Dec 2003</b>
          </span>
          <p>Qualified UGC-NET</p>
        </li>
        <div className="divider"></div>

        <li>
          <span className="red-text ">
            <b>June 2000- June 2003</b>{" "}
          </span>
          <p>Master of Computer Applications (MCA)</p>
        </li>
        <div className="divider"></div>

        <li>
          <span className="red-text ">
            <b>June 1997- May 2000</b>{" "}
          </span>
          <p>B.Sc.(Physics, Chemistry, Maths)</p>
        </li>
        <div className="divider"></div>

        <li>
          <p className="indigo-text text-darken-4">
            <b>All the degrees are approved by NOKUT.no</b>
          </p>
        </li>
        <div className="divider"></div>
      </ul>
    </div>
  );
};

export default Education;
