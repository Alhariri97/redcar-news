import React, { useEffect, useState } from "react";
import { getAtriclesCommets, deleteComment } from "../../../api";
import SpinnerLoading from "../../Spinner";

// Here is the comments component
const Comments = ({ article_id }) => {
  const [allComments, setAllComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isItDelelted, setIsItDelelted] = useState(false);

  useEffect(() => {
    getAtriclesCommets(article_id).then(({ comments }) => {
      setAllComments(comments);
      setIsLoading(false);
    });
  });
  const deletAComment = (id) => {
    deleteComment(id);
    setIsItDelelted(true);
    setTimeout(() => {
      setIsItDelelted(false);
    }, 1500);
  };
  if (isLoading) return <SpinnerLoading />;
  return (
    <div className="commetns" style={{ position: "relative" }}>
      {allComments.map((c) => {
        return (
          <div key={c.comment_id}>
            <h4>{c.author}</h4>
            <p>{c.body}</p>
            <p>
              <span> Likes: {c.votes} </span>
              <span> Data: {c.created_at.split("T")[0]}</span>
            </p>
            <button
              onClick={() => deletAComment(c.comment_id)}
              style={{ cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        );
      })}
      {isItDelelted ? (
        <div
          style={{
            backgroundColor: "red",
            position: "absolute",
            width: "98%",
            margin: "auto",
            top: "0",
            justifyContent: "center",
            display: "flex",
            opacity: "0.9",
          }}
        >
          <p>Comment Delelted</p>
        </div>
      ) : null}
    </div>
  );
};

export default Comments;
