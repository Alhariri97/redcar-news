import { Link } from "react-router-dom";

const Article = ({ article }) => {
  return (
    <div className="article" key={article.article_id}>
      <h4 className="article-title">{article.title}</h4>
      <p className="article-body">{article.body}</p>
      <div className="btn-date-topice">
        <p className="article-topic">{article.topic}</p>
        <p className="article-date"> likes {article.votes}</p>
        <button>
          <Link to={`article/${article.article_id}`}>Read More</Link>
        </button>
      </div>
    </div>
  );
};

export default Article;
