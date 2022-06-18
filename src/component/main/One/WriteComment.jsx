import React, { useState } from "react";
import { postAcomment } from "../../../api";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const WriteComment = ({ article_id, setOneAritcle }) => {
  const [commentInput, setCommentInput] = useState("");
  const [showMessageDone, setShowMessageDone] = useState(false);
  const [bor, setBor] = useState("none");
  const { user } = useContext(UserContext); // destracutar the state you want to use and here
  const sumitComment = (e) => {
    if (user) {
      setCommentInput("");
      e.preventDefault();
      setBor("none");
      const testRegx = /[a-z]+/gi;
      if (testRegx.test(commentInput)) {
        setShowMessageDone(true);
        setShowMessageDone(true);
        postAcomment(article_id, commentInput, user.username);
        setTimeout(() => {
          setShowMessageDone(false);
        }, 1500);
      } else {
        setCommentInput("");
        setBor("1px solid red");
      }
    } else {
    }
  };
  return (
    <div style={{ position: "relative" }}>
      {showMessageDone ? (
        <div
          style={{
            position: "absolute",
            top: "5vh",
            width: "100%",
            backgroundColor: "green",
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: "0.8",
          }}
        >
          <p>You have added a new comment Sucsessfully</p>
        </div>
      ) : null}
      {user ? (
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
      ) : (
        <Link
          to="/login"
          style={{
            cursor: "pointer",
            height: "3vh",
            marginTop: "20px",
            color: "green",
          }}
        >
          You need to login to write comments!
        </Link>
      )}
    </div>
  );
};

export default WriteComment;
