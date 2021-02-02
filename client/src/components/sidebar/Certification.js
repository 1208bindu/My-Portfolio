import React from "react";
import "../../css/styleV1.css";
import python from "../../images/certificates/python.jpg";
import R from "../../images/certificates/R.jpg";
import JS from "../../images/certificates/JS.png";
import psbasic from "../../images/certificates/psbasic.png";
import psinter from "../../images/certificates/psinter.png";

const Certification = () => {
  var x = document.getElementById("python");
  var y = document.getElementById("R");
  var z = document.getElementById("JS");
  var p = document.getElementById("psbasic");
  var q = document.getElementById("psinter");

  function displayPython() {
    if (x.style.display === "block") x.style.display = "none";
    else {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      p.style.display = "none";
      q.style.display = "none";
    }
  }

  function displayR() {
    if (y.style.display === "block") y.style.display = "none";
    else x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
    p.style.display = "none";
    q.style.display = "none";
  }

  function displayJS() {
    if (z.style.display === "block") z.style.display = "none";
    else x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    p.style.display = "none";
    q.style.display = "none";
  }

  function displayPsBasic() {
    if (p.style.display === "block") p.style.display = "none";
    else x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    p.style.display = "block";
    q.style.display = "none";
  }

  function displayPsinter() {
    if (q.style.display === "block") q.style.display = "none";
    else x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    p.style.display = "none";
    q.style.display = "block";
  }
  return (
    <div className=" Box-education   ">
      <h2 className=" blue-grey-text   text-darken-4">Certifications</h2>

      <ul className=" list_certificates">
        <li>
          <p onClick={() => displayPython()}>
            The joy of computing using Python - NPTEL Online Certification{" "}
          </p>

          <div id="python">
            <img src={python} alt="nptel" />
          </div>
        </li>
        <div className="divider"></div>

        <li>
          <p onClick={() => displayR()}>
            Introduction to R - NPTEL Online Certification{" "}
          </p>
          <div id="R">
            <img src={R} alt="nptel" />
          </div>
        </li>
        <div className="divider"></div>

        <li>
          <p onClick={() => displayJS()}>JavaScript Basics - HackerRank </p>
          <div id="JS">
            <img src={JS} alt="nptel" />
          </div>
        </li>
        <div className="divider"></div>

        <li>
          <p onClick={() => displayPsBasic()}>
            Programming Skills Basics - HackerRank{" "}
          </p>
          <div id="psbasic">
            <img src={psbasic} alt="nptel" />
          </div>
        </li>
        <div className="divider"></div>

        <li>
          <p onClick={() => displayPsinter()}>
            Programming Skills Intermediate - HackerRank{" "}
          </p>
          <div id="psinter">
            <img src={psinter} alt="nptel" />
          </div>
        </li>
        <div className="divider"></div>
      </ul>
    </div>
  );
};

export default Certification;
