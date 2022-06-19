import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const arrayOfPhotos = [
    {
      header: "Redcar Blog",
      body: "you want know how cool it is till you try it",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/43/Redcar_%2833306974732%29.jpg",
    },
    {
      header: "Redcar News",
      body: "Holly Yesss",
      src: "https://cloudinary.parallax.dev/yorkshire/image/upload/f_auto,c_scale,dpr_2,q_100,w_500/media/media/10901/redcar-beacon-2.jpg",
    },
    {
      header: "But How !",
      body: "You will never Know",
      src: "https://media.thelogcompany.com/20200825213315/Redcar.jpg",
    },
    {
      header: "Is not that cool? ",
      body: "defenatley it's is!",
      src: "https://www.picturesofengland.com/img/X/1192208.jpg",
    },
    {
      header: "Opps , Alls Work well,",
      body: "It's not nesscery to always be somthing went Wrong",
      src: "https://upload.wikimedia.org/wikipedia/commons/7/75/High_Street_from_the_west_-_geograph.org.uk_-_797956.jpg",
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
    <div style={{ width: "100%", height: "92vh" }}>
      <div id="landing-container" style={{}}>
        <img
          id="photo-landing"
          alt={chosen.name}
          src={chosen.src}
          style={{}}
        ></img>
        <div className="center-photo-text">
          <h3>{chosen.header}</h3>
          <p>{chosen.body}</p>
          <button onClick={() => navigate("/topic")} className="explor-btn">
            Explor the Blog
          </button>
        </div>
      </div>
      <div className="only-phone"></div>
    </div>
  );
};

export default Home;
