import React, { useState } from "react";
import { postAcomment } from "../../../api";
import VoteForArticle from "./VoteForArticle";

const WriteComment = ({ article_id, setOneAritcle }) => {
  const [commentInput, setCommentInput] = useState("");
  const sumitComment = () => {
    postAcomment(article_id, commentInput);
    document.getElementById("comment-input").value = "";
  };
  return (
    <div className="comment-write" style={{}}>
      <p style={{ cursor: "pointer", margin: "0 1vw" }}>
        <VoteForArticle article_id={article_id} setOneAritcle={setOneAritcle} />
      </p>
      <input
        id="comment-input"
        onChange={(e) => setCommentInput(e.target.value)}
        placeholder="Write a comment"
        style={{ width: "85%", height: "3vh" }}
      ></input>
      <button
        style={{ cursor: "pointer", height: "3vh" }}
        onClick={sumitComment}
      >
        comment
      </button>
    </div>
  );
};

export default WriteComment;
