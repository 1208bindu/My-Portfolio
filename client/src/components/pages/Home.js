/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import Sidebar from "../sidebar/Sidebar";
import MobilSidebar from "../sidebar/MobileSidbar";
import Articles from "../layout/articles/Articles";
import ArticleContext from "../../context/article/articleContext";
import AuthContext from "../../context/auth/authContext";
import AddArticleBtn from "../layout/articles/Add_articleBtn";
import "../../css/mediaQ/MQHome.css";
import bindu from "../../images/bindu.jpg";

const Home = () => {
  const { Token, isTokenValid } = useContext(AuthContext);
  const { getArticle, error } = useContext(ArticleContext);

  useEffect(() => {
    isTokenValid(Token);
    getArticle();
  }, [Token]);

  return (
    <div className="home ">
      <div className="container home-container">
        <div className="row">
          {/* sidbar  */}
          <div className="card side_bar_menu1 col l2 left hide-on-med-and-down navbar">
            <Sidebar />
          </div>

          <div className="home-row col s12 m12 l10 offset-l2 ">
            {/* middleCard */}
            <div className="card person_card white z-depth-3 col s12 m7 l6 offset-l1  center ">
              <div className="middle_section blue-grey-text  text-darken-4">
                <div className=" row">
                  <div className="col s10 m8 offset-m2 img-section">
                    <div className="img_box center" id="img_box">
                      <img src={bindu} alt="prof" />
                    </div>
                    <h4 className="center">Bindu Trikha</h4>
                  </div>
                </div>

                <div className=" row">
                  <div className="col s12 m12 l12  card_info">
                    <h2> FullStack Developer</h2>
                    <p>
                      An enthusiastic, self-motivated & a passion-driven
                      professional having good theoretical and hands-on
                      experience gained during 16+ years of teaching of software
                      related subjects and programming languages to the
                      engineering students. I have a good insight in the logical
                      concepts and reasoning and have a practical approach
                      towards learning computer languages. I am an adaptive
                      learner with a flair to learn new technologies and I am a
                      quick self-learner
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile sidbar  */}
              <div className="card mobile_menu col s12 left hide-on-large-only ">
                <MobilSidebar />
              </div>
            </div>

            {/* Article section */}
            <div className="card right-box col s12 m4 l4 offset-l1 right center ">
              <i className="fas fa-book-open blue-grey-text  text-darken-3 "></i>
              <p className="blue-grey-text  text-darken-4">
                Articles & Research Papers{" "}
              </p>
              <div className="divider"></div>

              {/**  render the Add button if the token is valid only**/}
              {Token ? <AddArticleBtn /> : null}

              {error ? (
                <p className="center red viewPostErro"> error </p>
              ) : null}

              <Articles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
