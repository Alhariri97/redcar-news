import Header from "./component/header/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";
import MainContent from "./component/main/mainComponent/MainContent";
import Sidebar from "./component/main/mainComponent/Sidebar";
import ArticlePage from "./component/main/One/ArticlePage";
import Login from "./component/Login";
import { UserContext } from "./component/context/UserContext";
import { useState } from "react";
import Account from "./component/main/Account";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Routes>
            {/* <Route path={`*`} element={<Main order={order} sortBy={sortBy} />} /> */}
            <Route
              path={`/`}
              element={
                <main className="main">
                  <div id="container">
                    <h3>this is the landing page</h3>
                  </div>
                </main>
              }
            />
            <Route
              path={`topic`}
              element={
                <main className="main">
                  <div id="container">
                    <Sidebar />
                    <MainContent />
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
                    <MainContent />
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
            <Route path="login" element={<Login />}></Route>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="account" element={<Account />} />
            <Route path="*" element={<> hello </>}></Route>
          </Routes>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
