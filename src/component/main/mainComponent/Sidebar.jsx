import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../../../api";

const Sidebar = ({ setSearchTopic }) => {
  const [allTopics, setAllTopics] = useState([]);
  useEffect(() => {
    getTopics().then(({ topics }) => {
      setAllTopics(topics);
    });
  }, []);
  return (
    <div className="sid-bar">
      {allTopics.map((topice) => {
        return (
          <Link
            to={`/`}
            key={topice.slug}
            onClick={() => setSearchTopic(topice.slug)}
          >
            <h4>{topice.slug}</h4>
            <p>{topice.description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
