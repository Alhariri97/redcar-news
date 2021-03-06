import Header from "./component/header/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";
import MainContent from "./component/main/mainComponent/MainContent";
import Sidebar from "./component/main/mainComponent/Sidebar";
import ArticlePage from "./component/main/One/ArticlePage";
import Login from "./component/Login";
import { UserContext } from "./component/context/UserContext";
import { useEffect, useState } from "react";
import NotFound from "./component/NotFound";
import Account from "./component/main/Account";
import Create from "./component/Create";
import SignUp from "./component/SignUp";
import Home from "./component/Home";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUser(JSON.parse(sessionStorage.getItem("user")));
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Routes>
            {/* <Route path={`*`} element={<Main order={order} sortBy={sortBy} />} /> */}
            <Route path={`/`} element={<Home />} />
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
            <Route path="sign-up" element={<SignUp />}></Route>
            <Route path="create" element={<Create />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
