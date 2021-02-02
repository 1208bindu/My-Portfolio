/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import Sidebar from "../Sidebar";
import Articles from "../../layout/articles/Articles";
import ArticleContext from "../../../context/article/articleContext";
import "../../../css/mediaQ/MQHome.css";
import ExperienceComponent from "../Experience";
import MobilSidebar from "../../sidebar/MobileSidbar";
import AddArticleBtn from "../../layout/articles/Add_articleBtn";
import AuthContext from "../../../context/auth/authContext";

const Experience = () => {
  const { getArticle, error } = useContext(ArticleContext);
  const { Token, isTokenValid } = useContext(AuthContext);

  useEffect(() => {
    isTokenValid(Token);
    getArticle();
    window.scrollTo(0, 0);
  }, [Token]);

  return (
    <div className="home ">
      <div className="container home-container">
        <div className="row home-row">
          {/* sidbar  */}
          <div className="card side_bar_menu col s12 l2 left hide-on-med-and-down navbar">
            <Sidebar />
          </div>

          {/* middleCard */}
          <div className="card person_card white z-depth-3 col s12 m8 l5 offset-l1 center ">
            <div className="middle_section blue-grey-text  text-darken-4">
              <ExperienceComponent />
            </div>
            {/* Mobile sidbar  */}
            <div className="card side_bar_menu mobile_menu col s12 left hide-on-large-only">
              <MobilSidebar />
            </div>
          </div>

          <div className="card right-box col s12 m3 l3 right center ">
            <i className="fas fa-book-open blue-grey-text  text-darken-3 "></i>
            <p className="blue-grey-text  text-darken-4">
              Articles & Research Papers
            </p>
            <div className="divider"></div>

            {/**  render the Add button if the token is valid only**/}
            {Token ? <AddArticleBtn /> : null}

            {error ? <p className="center red viewPostErro"> error </p> : null}

            <Articles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
