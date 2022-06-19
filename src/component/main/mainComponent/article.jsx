import { Link } from "react-router-dom";
import {
  faComments,
  faHistory,
  faHashtag,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Article = ({ article }) => {
  const articleBodyDisplayFunc = (text) => {
    const textArray = text.split(" ");

    if (textArray.length < 45) {
      isLong = false;
      return text;
    } else {
      isLong = true;
      let joining = textArray.slice(0, 45).join(" ") + "...";
      return joining;
    }
  };
  let isLong;
  return (
    <div className="article" key={article.article_id}>
      <h4>
        {" "}
        <Link
          to={`/${article.topic}/${article.article_id}`}
          className="article-title"
        >
          {article.title}
        </Link>
      </h4>
      <p className="article-body">
        {/* {article.body.split(" ").slice(0, 45).join(" ") + "... "}
        <Link
          to={`/${article.topic}/${article.article_id}`}
          className="read-more"
        >
        
          Read More
        </Link> */}
        {articleBodyDisplayFunc(article.body)}
        {isLong ? (
          <Link
            to={`/${article.topic}/${article.article_id}`}
            className="read-more"
          >
            Read more
          </Link>
        ) : null}
      </p>
      <div className="btn-date-topice">
        <p className="article-topic">
          <FontAwesomeIcon className="article-icon" icon={faHashtag} />{" "}
          {article.topic}
        </p>
        <p className="article-date">
          <FontAwesomeIcon className="article-icon" icon={faThumbsUp} />{" "}
          {article.votes}
        </p>
        <p>
          <FontAwesomeIcon className="article-icon" icon={faComments} />{" "}
          {article.comment_count}
        </p>
        <p>
          <FontAwesomeIcon className="article-icon" icon={faHistory} />{" "}
          {article.created_at.split("T")[0]}
        </p>
      </div>
    </div>
  );
};

export default Article;
