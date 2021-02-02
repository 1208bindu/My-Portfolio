import React from "react";
import "../../css/styleV1.css";
import cplus from "../../images/skills/cplus.png";
import php from "../../images/skills/php.png";
import cssjs from "../../images/skills/cssjs.png";
import python from "../../images/skills/python.png";
import sql from "../../images/skills/sql.png";
const Skills = () => {
  return (
    <div className=" Box-education   ">
      <h2 className=" blue-grey-text   text-darken-4">Technical Skills</h2>

      <ul className=" list_skills">
        <li>
          <span>
            <b>OOP Concepts & C++</b>
          </span>
          <div className="row">
            <div className="col l9">
              <p>
                Classes & objects, inheritance, abstraction, encapsulation,
                private & public methods, polymorphism- dynamic & static,
                association, aggregation, arrays, string, functions, structures,
                unions and file handling operations, function overloading,
                virtual functions
              </p>
            </div>
            <div className="col l3 right">
              <div className="icon_holder">
                <img src={cplus} alt="aa" />
              </div>
              <div className="progress power">
                <div className="determinate" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
        </li>
        <div className="divider"></div>

        <li>
          <span>
            <b>HTML5, CSS, JAVASCRIPT, JQUERY, REACT JS</b>
          </span>
          <div className="row">
            <div className="col l3 ">
              <div className="icon_holder">
                <img src={cssjs} alt="aa" />
              </div>
              <div className="progress power">
                <div className="determinate" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="col l9 right">
              <p>
                Using text, lists, tables, frames, hyperlinks, images,
                multimedia, forms and control, style sheet, CSS properties,
                styling, ID and class, creating page layout & site designs.
                Using ReactJS basics, React Hooks and State management using
                React Redux designing SPA's.
              </p>{" "}
            </div>
          </div>
        </li>
        <div className="divider"></div>

        <li>
          <span>
            <b>PHP, Node Js, & Express</b>
          </span>
          <div className="row">
            <div className="col l9">
              <p>
                Backend Programming, creating RESTful API endpoints for
                providing interaction between client side requets and server
                side responses, JWT Authentication, Authorization and Role based
                Access.
              </p>
            </div>
            <div className="col l3 right">
              <div className="icon_holder">
                <img src={php} alt="aa" />
              </div>
              <div className="progress power">
                <div className="determinate" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </li>
        <div className="divider"></div>

        <li>
          <span>
            <b>Python & R-language</b>
          </span>
          <div className="row">
            <div className="col l3 ">
              <div className="icon_holder">
                <img src={python} alt="aa" />
              </div>
              <div className="progress power">
                <div className="determinate" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="col l9 right">
              <p>
                Python functions, modules & packages, list & dictionary
                expressions, file operations and regular expressions, DB
                interaction, R-language data frames, listing, sorting, importing
                data, correlation & regression, aggregate functions, data
                analysis, box plotter, histogram, random tree etc
              </p>{" "}
            </div>
          </div>
        </li>
        <div className="divider"></div>

        <li>
          <span>
            <b>SQL & NoSQL - MongoDB</b>
          </span>
          <div className="row">
            <div className="col l9">
              <p>
                Data extraction, update, cleansing & creating data reports using
                SQL queries by using inner and outer joins on multiple files on
                various types of data.{" "}
              </p>{" "}
            </div>
            <div className="col l3 right">
              <div className="icon_holder">
                <img src={sql} alt="aa" />
              </div>
              <div className="progress power">
                <div className="determinate" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
        </li>
        <div className="divider"></div>
      </ul>
    </div>
  );
};

export default Skills;
