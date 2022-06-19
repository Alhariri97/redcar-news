import React, { useEffect, useState } from "react";
import { getArticles } from "../../../api";
import Article from "./article";
import { Link, useParams, useLocation } from "react-router-dom";
// import WriteAnArticle from "./WriteAnArticle";

const MainContent = () => {
  const [allArticles, setAllArticles] = useState([]);

  const [order, setOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("");
  const [chosenOrder, setChosenOrder] = useState("desc");
  const [, setWriteAritcle] = useState(false);
  //
  const [chosenSortBy, setChossenSortBy] = useState("");
  //
  const [hepupleshed, setHepupleshed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOrder(chosenOrder);
    setSortBy(chosenSortBy);
    if (location.state) {
      setHepupleshed(true);
      setTimeout(() => {
        setHepupleshed(false);
      }, 1500);
    }
  }, [chosenOrder, chosenSortBy, setOrder, setSortBy, location.state]);

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
      {hepupleshed ? (
        <div
          style={{
            display: "flex",
            zIndex: "2",
            width: "100%",
            height: "30%",
            position: "fixed",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            textAlign: "center",
            paddingTop: "20px",
            left: 0,
            top: 0,
          }}
        >
          <p
            style={{
              width: "40%",
              textAlign: "center",
              paddingTop: "10px",
              height: "40px",
              backgroundColor: "rgba(0 ,165 ,44, 0.4)",
            }}
          >
            You pupleshed {location.state.title} succesfully
          </p>
        </div>
      ) : null}
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
          <Link
            to="/create"
            onClick={() => setWriteAritcle(true)}
            style={{ backgroundColor: "blue", color: "gray" }}
          >
            Write an artilce
          </Link>
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
