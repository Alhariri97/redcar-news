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
      {allTopics.map((topic) => {
        return (
          <Link to={`/topic/${topic.slug}`} key={topic.slug}>
            <h4># {topic.slug}</h4>
            <p>{topic.description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
