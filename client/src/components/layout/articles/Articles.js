/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import ArticleContext from "../../../context/article/articleContext";
import "../../../css/styleV1.css";
import { useHistory } from "react-router-dom";

export default function Acticles() {
  const articleContext = useContext(ArticleContext);
  const { articles, StartLoading } = articleContext;
  const history = useHistory();

  return (
    <div className="posts-box-container ">
      {articles.length
        ? articles.map((article) => {
            return (
              <div
                key={`${article.title}_${article._id}`}
                className="post-box "
              >
                <a
                  href="#"
                  className="blue-grey-text  text-darken-4 post"
                  onClick={() => {
                    StartLoading();
                    history.push("/articledetail/" + article._id);
                  }}
                >
                  <p>{article.content} </p>
                </a>
                <div className="divider"></div>
              </div>
            );
          })
        : null}
    </div>
  );
}
