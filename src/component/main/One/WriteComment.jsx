import React, { useState } from "react";
import { postAcomment } from "../../../api";

const WriteComment = ({ article_id, setOneAritcle }) => {
  const [commentInput, setCommentInput] = useState("");
  const [showMessageDone, setShowMessageDone] = useState(false);
  const [bor, setBor] = useState("none");

  const sumitComment = (e) => {
    setCommentInput("");
    e.preventDefault();
    setBor("none");
    const testRegx = /[a-z]+/gi;
    if (testRegx.test(commentInput)) {
      postAcomment(article_id, commentInput);
      setShowMessageDone(true);
      setShowMessageDone(true);
      setTimeout(() => {
        setShowMessageDone(false);
      }, 1500);
    } else {
      setCommentInput("");
      setBor("1px solid red");
    }
  };
  return (
    <div style={{}}>
      {showMessageDone ? (
        <div
          style={{
            position: "absolute",
            top: "5vh",
            width: "80vw",
            margin: "20px",
            backgroundColor: "green",
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          You have added a new comment Sucsessfully
        </div>
      ) : null}
      <form className="comment-write" onSubmit={(e) => sumitComment(e)}>
        <input
          type="text"
          id="comment-input"
          value={commentInput}
          onChange={(e) => {
            setCommentInput(e.target.value);
          }}
          placeholder="Write a comment"
          style={{
            width: "85%",
            height: "3vh",
            resize: "none",
            border: bor,
          }}
        ></input>
        <button type="submit" style={{ cursor: "pointer", height: "3vh" }}>
          comment
        </button>
      </form>
    </div>
  );
};

export default WriteComment;
