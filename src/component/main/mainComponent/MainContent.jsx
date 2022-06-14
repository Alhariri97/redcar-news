import React, { useEffect, useState } from "react";
import { getArticles } from "../../../api";
import Article from "./article";

const MainContent = ({ allArticles, setAllArticles, searchByToic }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(searchByToic).then(({ articles }) => {
      setAllArticles(articles);
      setIsLoading(false);
    });
  }, [searchByToic, setAllArticles]);
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
