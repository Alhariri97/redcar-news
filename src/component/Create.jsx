import React, { useEffect, useState } from "react";
import { getTopics, postAnArticle, getOnArticle, updateArticle } from "../api";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "./context/UserContext"; //<----and this
import { useContext } from "react"; //<------------------- this

const Create = () => {
  const [allTopics, setAllTopics] = useState([]);
  const [topicChosen, setTopicChosen] = useState("");
  const [articleTitle, setArticleTitle] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const location = useLocation();
  const { user } = useContext(UserContext); // destracutar the state you want to use and here
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    getTopics().then(({ topics }) => setAllTopics(topics));
    console.log(location);
    console.log(!location.state);
    if (location.state) {
      // console.log(location.state.article_id);
      getOnArticle(location.state.article_id).then(({ article }) => {
        setArticleTitle(article[0].title);
        setArticleBody(article[0].body);
        setTopicChosen(article[0].topic);
        // console.log(article[0]);
      });
    }
  }, [location, navigate, user]);
  const handelSubmit = (e) => {
    console.log(user.username);
    e.preventDefault();
    // console.log(topicChosen, articleTitle, articleBody);

    if (location.state) {
      if (!topicChosen.length || !articleTitle.length || !articleBody.length) {
        console.log("first");
      } else {
        updateArticle(
          articleTitle,
          articleBody,
          topicChosen,
          location.state.article_id
        ).then(({ article }) => {
          navigate("/topic");
        });
      }
    } else {
      if (!topicChosen.length || !articleTitle.length || !articleBody.length) {
        console.log("first");
      } else {
        postAnArticle(
          user.username,
          articleTitle,
          articleBody,
          topicChosen
        ).then((data) => {
          console.log(data);
          if (data.createdArticle) {
            navigate("/topic", { state: { title: articleTitle } });
          } else {
          }
        });
      }
    }
  };
  return (
    <div id="write-article">
      <span
        style={{ float: "right", margin: "10px 30px" }}
        onClick={() => navigate("/topic")}
      >
        {" "}
        close
      </span>
      <div>
        <h4>Write an article</h4>
        <form className="titel" onSubmit={(e) => handelSubmit(e)}>
          <label htmlFor="title">
            Article Title:
            <input
              id="title"
              type="text"
              name="title"
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
            ></input>
          </label>
          <label htmlFor="title">
            Article Conent:
            <textarea
              id="title"
              type="text"
              name="title"
              value={articleBody}
              onChange={(e) => setArticleBody(e.target.value)}
            ></textarea>
          </label>
          <select
            onChange={(e) => setTopicChosen(e.target.value)}
            value={topicChosen}
          >
            {allTopics.map((t) => {
              return (
                <option key={t.slug} value={t.slug}>
                  {t.slug}
                </option>
              );
            })}
          </select>

          {location.state ? (
            <button type="submit">Update</button>
          ) : (
            <button type="submit">Pulblish</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Create;
