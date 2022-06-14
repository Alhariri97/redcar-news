import React, { useState } from "react";
import { getArticles } from "../../../api";

const Search = ({ allArticles, setAllArticles }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const pressedToSearch = () => {
    getArticles(inputSearchValue).then(({ articles }) =>
      setAllArticles(articles)
    );
  };
  return (
    <div id="search">
      <input onChange={(e) => setInputSearchValue(e.target.value)}></input>
      <button onClick={pressedToSearch}>Seaech</button>
    </div>
  );
};

export default Search;
