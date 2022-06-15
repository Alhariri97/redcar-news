import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink
            to={`/${topic.slug}`}
            key={topic.slug}
            onClick={(e) => {
              setSearchTopic(topic.slug);
            }}
          >
            <h4>{topic.slug}</h4>
            <p>{topic.description}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
