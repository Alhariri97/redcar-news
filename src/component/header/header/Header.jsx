import React from "react";
import Navbar from "./Navbar";

const Header = ({ allArticles, setAllArticles, setSearchTopic }) => {
  return (
    <header>
      <Navbar
        allArticles={allArticles}
        setAllArticles={setAllArticles}
        setSearchTopic={setSearchTopic}
      />
    </header>
  );
};

export default Header;
