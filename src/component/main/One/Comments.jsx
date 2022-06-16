import React, { useEffect, useState } from "react";
import { getAtriclesCommets } from "../../../api";
import SpinnerLoading from "../../Spinner";

const Comments = ({ article_id }) => {
  const [allComments, setAllComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAtriclesCommets(article_id).then(({ comments }) => {
      setAllComments(comments);
      setIsLoading(false);
    });
  });
  if (isLoading) return <SpinnerLoading />;
  return (
    <div className="commetns">
      {allComments.map((c) => {
        return (
          <div key={c.comment_id}>
            <h4>{c.author}</h4>
            <p>{c.body}</p>
            <p>
              <span>Likes: {c.votes} </span>
              <span> Data: {c.created_at.split("T")[0]}</span>
            </p>
            <button style={{ cursor: "pointer" }}> Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
