import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import homePage from "../images/Sign up-bro.png";
const Home = () => {
  const arrayOfPhotos = [
    {
      header: "Redcar Blog",
      body: "you won't know how cool it is till you try it",
    },
    {
      header: "Redcar News",
      body: "Holly Yesss",
    },
    {
      header: "But How !",
      body: "You will never Know",
    },
    {
      header: "Is not that cool? ",
      body: "Defenatley it is!",
    },
    {
      header: "Opps , Alls Work well",
      body: "It's not necessary be something went Wrong!",
    },
  ];
  const [indexofphot, setIndex] = useState(0);
  const chosen = arrayOfPhotos[indexofphot];
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if (indexofphot <= arrayOfPhotos.length - 2) {
        setIndex(indexofphot + 1);
      } else {
        setIndex(0);
      }
    }, 5000);
  }, [arrayOfPhotos.length, indexofphot]);

  return (
    <div id="landing-container" style={{ width: "100%", height: "92vh" }}>
      <img className="img-home" src={homePage} alt="home page"></img>
      <div className="div-home" style={{ width: "" }}>
        <div className="center-photo-text">
          <button onClick={() => navigate("/topic")} className="explor-btn">
            Explor the Blog
          </button>
          <h3>{chosen.header}</h3>
          <p>{chosen.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
