import Header from "./component/header/header/Header";
import Main from "./component/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("");
  return (
    <BrowserRouter>
      <div className="App">
        <Header setOrder={setOrder} setSortBy={setSortBy} />
        <Routes>
          <Route path={`*`} element={<Main order={order} sortBy={sortBy} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
