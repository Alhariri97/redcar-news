import React, { useEffect, useState } from "react";
import { getArticles } from "../../../api";
import Article from "./article";
import { useParams } from "react-router-dom";

const MainContent = () => {
  const [allArticles, setAllArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then(({ articles }) => {
      setAllArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);
  if (isLoading) return <p>....Loading</p>;
  return (
    <div className="main-container">
      <div className="main-contant">
        {allArticles.map((article) => {
          return <Article key={article.article_id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default MainContent;
