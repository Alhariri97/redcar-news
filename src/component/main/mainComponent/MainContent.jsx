import React, { useEffect, useState } from "react";
import { getArticles } from "../../../api";
import Article from "./article";
import { useParams } from "react-router-dom";

const MainContent = () => {
  const [allArticles, setAllArticles] = useState([]);

  const [order, setOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("");
  const [chosenOrder, setChosenOrder] = useState("desc");
  //
  const [chosenSortBy, setChossenSortBy] = useState("");

  useEffect(() => {
    setOrder(chosenOrder);
    setSortBy(chosenSortBy);
  }, [chosenOrder, chosenSortBy, setOrder, setSortBy]);

  const [isLoading, setIsLoading] = useState(true);
  const [topicNotFound, setTopicNotFound] = useState(false);

  const { topic } = useParams();
  useEffect(() => {
    getArticles(topic, order, sortBy).then((data) => {
      if (data.articles) {
        setAllArticles(data.articles);
        setIsLoading(false);
        setTopicNotFound(false);
      } else {
        setIsLoading(false);
        setTopicNotFound(true);
      }
    });
  }, [topic, order, sortBy]);

  if (isLoading) return <p>....Loading</p>;

  return (
    <div className="main-container">
      <div className="main-contant">
        <div>
          <select onChange={(e) => setChosenOrder(e.target.value)}>
            <option value={"asc"}>Ascend</option>
            <option value={"desc"}>Descen</option>
          </select>
          <select onChange={(e) => setChossenSortBy(e.target.value)}>
            <option value={""}>Date</option>
            <option value={"votes"}>Votes</option>
            <option value={"article_id"}>Article ID</option>
          </select>
        </div>
        {topicNotFound ? (
          <div
            style={{
              display: "flex",
              height: "100vh",
              width: "100%",
            }}
          >
            <h4 style={{ width: "50%", margin: "auto" }}>
              Ooops seemed {topic} not there
            </h4>
          </div>
        ) : null}
        {allArticles.map((article) => {
          return <Article key={article.article_id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default MainContent;
