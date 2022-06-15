import MainContent from "./mainComponent/MainContent";
import Sidebar from "./mainComponent/Sidebar";
import ArticlePage from "./One/ArticlePage";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main className="main">
      <div id="container">
        <Sidebar />
        <Routes>
          <Route
            path={`/`}
            element={
              <>
                <MainContent />
              </>
            }
          />
          <Route
            path={`/:topic`}
            element={
              <>
                <MainContent />
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
