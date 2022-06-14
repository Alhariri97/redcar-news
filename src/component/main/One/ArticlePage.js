import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOnArticle } from "./../../../api";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [oneAricle, setOneAritcle] = useState([]);

  useEffect(() => {
    getOnArticle(article_id)
      .then(({ article }) => {
        setOneAritcle(article);
      })
      .catch((err) => {});
  }, [article_id]);
  return (
    <div className="main-container">
      {oneAricle.map((a) => {
        return (
          <div id="full-article" key={a.article_id}>
            <h3>{a.title}</h3>
            <p>{a.body}</p>
            <p>{a.author}</p>
            <p>{a.topic}</p>
            <p>{a.votes}</p>
            <p>{a.careated_at}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlePage;
