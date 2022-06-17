import React, { useEffect, useState } from "react";
import { getArticles } from "../../../api";

const Search = ({ setOrder, setSortBy }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [chosenOrder, setChosenOrder] = useState("asc");
  //
  const [chosenSortBy, setChossenSortBy] = useState("");
  //

  const pressedToSearch = () => {
    getArticles(inputSearchValue).then(({ articles }) => setOrder(articles));
  };

  useEffect(() => {
    setOrder(chosenOrder);
    setSortBy(chosenSortBy);
  }, [chosenOrder, chosenSortBy, setOrder, setSortBy]);
  return (
    <div id="search">
      <select onChange={(e) => setChosenOrder(e.target.value)}>
        <option value={"asc"}>Ascend</option>
        <option value={"desc"}>Descen</option>
      </select>
      <select onChange={(e) => setChossenSortBy(e.target.value)}>
        <option value={""}>Date</option>
        <option value={"votes"}>Votes</option>
        <option value={"article_id"}>Article ID</option>
      </select>
      <input onChange={(e) => setInputSearchValue(e.target.value)}></input>
      <button onClick={pressedToSearch}>Seaech</button>
    </div>
  );
};

export default Search;
