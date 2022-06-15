import { Link } from "react-router-dom";

const Article = ({ article }) => {
  return (
    <div className="article" key={article.article_id}>
      <h4 className="article-title">{article.title}</h4>
      <p className="article-body">
        {article.body.split(" ").slice(0, 45).join(" ") + "... "}
        <Link
          to={`/${article.topic}/${article.article_id}`}
          className="read-more"
        >
          Read More
        </Link>
      </p>
      <div className="btn-date-topice">
        <p className="article-topic">{article.topic}</p>
        <p className="article-date"> likes {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
      </div>
    </div>
  );
};

export default Article;
