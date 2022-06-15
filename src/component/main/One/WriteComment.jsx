import React, { useState } from "react";
import { postAcomment } from "../../../api";
const WriteComment = ({ article_id }) => {
  const [commentInput, setCommentInput] = useState("");
  const sumitComment = () => {
    postAcomment(article_id, commentInput);
    document.getElementById("comment-input").value = "";
  };
  return (
    <div className="comment-write" style={{}}>
      <p style={{ cursor: "pointer", margin: "0 3vw" }}>+</p>
      <p style={{ cursor: "pointer", margin: "0 3vw" }}>-</p>
      <input
        id="comment-input"
        onChange={(e) => setCommentInput(e.target.value)}
        placeholder="Write a comment"
        style={{ width: "75%", height: "3vh" }}
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
