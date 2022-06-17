import Header from "./component/header/header/Header";
// import Main from "./component/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";
import { useState } from "react";
import MainContent from "./component/main/mainComponent/MainContent";
import Sidebar from "./component/main/mainComponent/Sidebar";
import ArticlePage from "./component/main/One/ArticlePage";

function App() {
  const [order, setOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("");
  return (
    <BrowserRouter>
      <div className="App">
        <Header setOrder={setOrder} setSortBy={setSortBy} />
        <Routes>
          {/* <Route path={`*`} element={<Main order={order} sortBy={sortBy} />} /> */}
          <Route
            path={`/`}
            element={
              <main className="main">
                <div id="container">
                  <Sidebar />
                  <MainContent order={order} sortBy={sortBy} />
                </div>
              </main>
            }
          />
          <Route
            path={`topic/:topic`}
            element={
              <main className="main">
                <div id="container">
                  <Sidebar />
                  <MainContent order={order} sortBy={sortBy} />
                </div>
              </main>
            }
          />
          <Route
            path={`/:topic/:article_id`}
            element={
              <main className="main">
                <div id="container">
                  <Sidebar />
                  <ArticlePage />
                </div>
              </main>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<> hello </>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
