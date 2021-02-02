/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
import ArticleContext from "./../../../context/article/articleContext";
// import {Document , Page} from 'react-pdf';
import PdfAllPages from "../../layout/resume/Pdf_All_Pages";
import { useHistory } from "react-router-dom";
import AuthContext from "./../../../context/auth/authContext";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ArticleDetail(props) {
  const history = useHistory();
  const articleContext = useContext(ArticleContext);
  const {
    viewArticle,
    currentArticle,
    deleteArticle,
    addSuccess,
    isLoading,
  } = articleContext;
  const { Token, isTokenValid } = useContext(AuthContext);

  const [id, setID] = useState("");

  // const [numPages, setNumPages] = useState(null);

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  // };

  useEffect(() => {
    isTokenValid(Token);
    viewArticle(props.match.params.id);

    //console.log(id)
  }, [Token, props.match.params.id]);

  useEffect(() => {
    if (addSuccess && !isLoading) {
      history.push("/");
    }
    setID(props.match.params.id);
  }, [history, addSuccess, isLoading, id]);

  return (
    <div className="atricle_details">
      {currentArticle ? (
        <div className="actual_post">
          {Token ? (
            <button
              className="btn btn-floating waves-effect waves-light red deleteBtn"
              onClick={() => {
                deleteArticle(currentArticle._id);
              }}
            >
              <i className="material-icons">delete</i>
            </button>
          ) : null}

          <PdfAllPages pdf={`/uploads/${currentArticle.title}`} />
        </div>
      ) : null}
    </div>
  );
}
