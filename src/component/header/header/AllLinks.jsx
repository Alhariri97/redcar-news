import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext"; //<----and this
import { useContext } from "react"; //<------------------- this

const AllLinks = ({ setShowMpileBar }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext); // destracutar the state you want to use and here
  return (
    <>
      {user ? (
        <div
          className="profile"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (setShowMpileBar) {
              setShowMpileBar(false);
            }
            navigate("/account");
          }}
        >
          <img
            style={{
              width: "20px",
              borderRadius: "100%",
              cursor: "pointer",
              display: "block",
              margin: "auto",
            }}
            src={user.avatar_url}
            alt="profil page"
          ></img>
          <p>{user.name}</p>
        </div>
      ) : null}
      <Link
        to={"/"}
        className="link-to"
        onClick={() => {
          if (setShowMpileBar) {
            setShowMpileBar(false);
          }
        }}
      >
        Home
      </Link>

      <Link
        to={"/topic"}
        className="link-to"
        onClick={() => {
          if (setShowMpileBar) {
            setShowMpileBar(false);
          }
        }}
      >
        Blog
      </Link>
      {!user ? (
        <Link
          to={"/login"}
          className="link-to"
          onClick={() => {
            if (setShowMpileBar) {
              setShowMpileBar(false);
            }
          }}
        >
          Login
        </Link>
      ) : null}
      <Link
        to={"/contact"}
        className="link-to"
        onClick={() => {
          if (setShowMpileBar) {
            setShowMpileBar(false);
          }
        }}
      >
        Contact
      </Link>
      <Link
        to={"/about"}
        className="link-to"
        onClick={() => {
          if (setShowMpileBar) {
            setShowMpileBar(false);
          }
        }}
      >
        About
      </Link>
    </>
  );
};

export default AllLinks;
