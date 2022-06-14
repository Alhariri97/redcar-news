import MainContent from "./mainComponent/MainContent";
import Sidebar from "./mainComponent/Sidebar";
import ArticlePage from "./One/ArticlePage";
import { Routes, Route } from "react-router-dom";

const Main = ({
  allArticles,
  setAllArticles,
  searchByToic,
  setSearchTopic,
}) => {
  return (
    <main className="main">
      <div id="container">
        <Sidebar setSearchTopic={setSearchTopic} />
        <Routes>
          <Route
            path={`/`}
            element={
              <>
                <MainContent
                  searchByToic={searchByToic}
                  allArticles={allArticles}
                  setAllArticles={setAllArticles}
                />
              </>
            }
          />
          <Route path={`/article/:article_id`} element={<ArticlePage />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
