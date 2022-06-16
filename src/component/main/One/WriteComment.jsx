import React, { useState } from "react";
import { postAcomment } from "../../../api";

const WriteComment = ({ article_id, setOneAritcle }) => {
  const [commentInput, setCommentInput] = useState("");
  const sumitComment = () => {
    postAcomment(article_id, commentInput);
    document.getElementById("comment-input").value = "";
  };
  return (
    <div className="comment-write" style={{}}>
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
