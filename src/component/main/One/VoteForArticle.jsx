import React, { useState } from "react";

import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { voteForTheArticle, ulikeArticle } from "../../../api";
const VoteForArticle = ({ article_id, setOneAritcle }) => {
  const [isHeLikedit, setIsHeLikedit] = useState(false);
  const [err, setErr] = useState(false);

  const votePlus = () => {
    if (!isHeLikedit) {
      voteForTheArticle(article_id).then(({ article }) => {
        if (article) {
          setOneAritcle(article);
          setErr(false);
          setIsHeLikedit(true);
          document.getElementById("liking").style.color = "blue";
        } else {
          setErr(true);
        }
      });
    } else {
      ulikeArticle(article_id).then(({ article }) => {
        if (article) {
          setOneAritcle(article);
          setErr(false);
          setIsHeLikedit(false);
          document.getElementById("liking").style.color = "black";
        } else {
          setErr(true);
        }
      });
    }
  };

  return (
    <span
      id="liking"
      onClick={votePlus}
      style={{ cursor: "pointer", color: "black" }}
    >
      <FontAwesomeIcon id="like-icon" icon={faThumbsUp} />
      {err ? <p>Opps Somthing went wrong...</p> : null}
    </span>
  );
};

export default VoteForArticle;
