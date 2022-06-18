import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOnArticle } from "./../../../api";
import Comments from "./Comments";
import WriteComment from "./WriteComment";
import SpinnerLoading from "../../Spinner";
import VoteForArticle from "./VoteForArticle";

import { UserContext } from "../../context/UserContext"; //<----and this
import { useContext } from "react"; //<------------------- this
const ArticlePage = () => {
  const { article_id } = useParams();
  const [oneAricle, setOneAritcle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [allVotes, setAllVotes] = useState(0);
  const { user } = useContext(UserContext); // destracutar the state you want to use and here
  const navigate = useNavigate();
  useEffect(() => {
    getOnArticle(article_id)
      .then(({ article }) => {
        setOneAritcle(article);
        setIsLoading(false);
        setAllVotes(article[0].votes);
      })
      .catch((err) => {});
  }, [article_id]);
  return (
    <div className="main-container">
      <h3
        className="comments-word"
        style={{ color: "red", paddingTop: "20px" }}
      >
        Comments
      </h3>
      {oneAricle.map((a) => {
        return (
          <div key={a.article_id} id="full-article">
            <div id="all-comments">
              <Comments article_id={a.article_id} />
            </div>
            {isLoading ? (
              <SpinnerLoading />
            ) : (
              <div id="one-article">
                <div className="article-content" key={a.article_id}>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                  <p>{a.author}</p>
                  <p>{a.topic}</p>
                  <p className="like-date">
                    <span>Date: {a.created_at.split("T")[0]}</span>
                    <VoteForArticle
                      article_id={article_id}
                      setAllVotes={setAllVotes}
                    />
                    <span>Likes {allVotes}</span>
                    {user ? (
                      <>
                        {user.username === a.author ? (
                          <>
                            <button
                              onClick={() =>
                                navigate("/create", {
                                  state: { article_id: a.article_id },
                                })
                              }
                              style={{ cursor: "pointer" }}
                            >
                              {" "}
                              Edite
                            </button>
                            <button style={{ cursor: "pointer" }}>
                              {" "}
                              Delete
                            </button>
                          </>
                        ) : null}
                      </>
                    ) : null}
                  </p>
                </div>
                <div>
                  <WriteComment
                    setOneAritcle={setOneAritcle}
                    article_id={a.article_id}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ArticlePage;
