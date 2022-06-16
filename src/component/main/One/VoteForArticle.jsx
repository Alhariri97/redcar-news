import React, { useEffect, useState } from "react";

import { faAllergies, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { voteForTheArticle, ulikeArticle, getOnArticle } from "../../../api";

const VoteForArticle = ({ article_id, setAllVotes }) => {
  const [isHeLikedit, setIsHeLikedit] = useState(false);
  const [newVotes, setNewVotes] = useState(0);
  const [err, setErr] = useState(false);

  useEffect(() => {
    getOnArticle(article_id).then(({ article }) =>
      setNewVotes(article[0].votes)
    );
  }, [newVotes]);
  const votePlus = () => {
    if (!isHeLikedit) {
      setAllVotes(newVotes + 1);
      setIsHeLikedit(true);
      document.getElementById("liking").style.color = "blue";
      voteForTheArticle(article_id).then(({ article }) => {
        if (article) {
          setErr(false);
        } else {
          setErr(true);
        }
      });
    } else {
      setAllVotes(newVotes);
      setIsHeLikedit(false);
      document.getElementById("liking").style.color = "black";
      ulikeArticle(article_id).then(({ article }) => {
        if (article) {
          setErr(false);
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
