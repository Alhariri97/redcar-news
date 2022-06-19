import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTopics } from "../../../api";

const Sidebar = () => {
  const [allTopics, setAllTopics] = useState([]);
  useEffect(() => {
    getTopics().then(({ topics }) => {
      setAllTopics(topics);
    });
  }, []);
  const { topic } = useParams();
  let chosenTopic = topic;
  return (
    <div className="sid-bar">
      {allTopics.map((topic) => {
        return (
          <Link
            className={topic.slug === chosenTopic ? "slected" : ""}
            to={`/topic/${topic.slug}`}
            key={topic.slug}
          >
            <h4># {topic.slug}</h4>
            <p>{topic.description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
