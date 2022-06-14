import { useState } from "react";
import Header from "./component/header/header/Header";
import Main from "./component/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [searchByToic, setSearchTopic] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          allArticles={allArticles}
          setAllArticles={setAllArticles}
          setSearchTopic={setSearchTopic}
        />
        <Routes>
          <Route
            path={`*`}
            element={
              <Main
                allArticles={allArticles}
                setAllArticles={setAllArticles}
                setSearchTopic={setSearchTopic}
                searchByToic={searchByToic}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
