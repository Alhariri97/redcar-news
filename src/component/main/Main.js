import MainContent from "./mainComponent/MainContent";
import Sidebar from "./mainComponent/Sidebar";
import ArticlePage from "./One/ArticlePage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const Main = ({ searchByToic, setSearchTopic }) => {
  const [allArticles, setAllArticles] = useState([]);
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
          <Route
            path={`/:topic`}
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
          <Route path={`/:topic/:article_id`} element={<ArticlePage />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
