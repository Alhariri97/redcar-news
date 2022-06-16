import React, { useEffect, useState } from "react";

import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { voteForTheArticle, ulikeArticle, getOnArticle } from "../../../api";

const VoteForArticle = ({ article_id, setAllVotes }) => {
  const [isHeLikedit, setIsHeLikedit] = useState(false);
  const [newVotes, setNewVotes] = useState(0);
  const [colorchosed, setColorchosed] = useState("black");
  const [err, setErr] = useState(false);

  useEffect(() => {
    getOnArticle(article_id).then(({ article }) =>
      setNewVotes(article[0].votes)
    );
  }, [article_id]);
  const votePlus = () => {
    if (!isHeLikedit) {
      setAllVotes(newVotes + 1);
      setIsHeLikedit(true);
      setColorchosed("blue");
      voteForTheArticle(article_id).then((data) => {
        console.log(data.article);
        if (data.article) {
          setErr(false);
        } else {
          setErr(true);
        }
      });
    } else {
      setAllVotes(newVotes);
      setIsHeLikedit(false);
      setColorchosed("black");
      ulikeArticle(article_id).then((data) => {
        console.log(data.article);
        if (data.article) {
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
      style={{ cursor: "pointer", color: colorchosed }}
    >
      <span>
        {" "}
        <FontAwesomeIcon id="like-icon" icon={faThumbsUp} />
      </span>
      {err ? <apan>Opps Somthing went wrong...</apan> : null}
    </span>
  );
};

export default VoteForArticle;
