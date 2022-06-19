import React, { useState } from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { likeCommentApi, unLikeCommentApi } from "../../../api";
const LikeComment = ({ comment_id }) => {
  const [colorchosed, setColorchosed] = useState("black");
  const [isHeLikedit, setIsHeLikedit] = useState(false);

  const pressedToLikeComment = () => {
    if (!isHeLikedit) {
      likeCommentApi(comment_id).then((e) => setColorchosed("blue"));
      setIsHeLikedit(true);
    } else {
      unLikeCommentApi(comment_id).then((e) => setColorchosed("black"));
      setIsHeLikedit(false);
    }
  };
  return (
    <span
      onClick={() => pressedToLikeComment()}
      style={{ cursor: "pointer", color: colorchosed }}
    >
      <FontAwesomeIcon id="like-icon" icon={faThumbsUp} />
    </span>
  );
};

export default LikeComment;
