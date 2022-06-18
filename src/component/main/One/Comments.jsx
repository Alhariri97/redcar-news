import React, { useEffect, useState } from "react";
import { getAtriclesCommets, deleteComment } from "../../../api";
import SpinnerLoading from "../../Spinner";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import LikeComment from "./LikeComment";

// Here is the comments component
const Comments = ({ article_id }) => {
  const [allComments, setAllComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isItDelelted, setIsItDelelted] = useState(false);
  const { user } = useContext(UserContext); // destracutar the state you want to use and here

  useEffect(() => {
    getAtriclesCommets(article_id).then(({ comments }) => {
      setAllComments(comments);
      setIsLoading(false);
    });
  }, [allComments, article_id]);

  const deletAComment = (id) => {
    deleteComment(id).then(() => {
      setIsItDelelted(true);
      setTimeout(() => {
        setIsItDelelted(false);
      }, 1500);
    });
  };
  //

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
            {user ? (
              <>
                {user.username === c.author ? (
                  <button
                    onClick={() => deletAComment(c.comment_id)}
                    style={{ cursor: "pointer" }}
                  >
                    Delete
                  </button>
                ) : null}
              </>
            ) : null}
            {user ? (
              <>
                {user.username !== c.author ? (
                  <LikeComment comment_id={c.comment_id} />
                ) : null}
              </>
            ) : null}{" "}
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
