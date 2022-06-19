import React, { useState } from "react";
import { UserContext } from "./context/UserContext"; //<----and this
import { useContext } from "react"; //<------------------- this
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const SignUp = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext); // destracutar the state you want to use and here
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [yourImage, setYourImage] = useState("");
  const [email, setEmail] = useState("");

  if (user) {
    navigate("/");
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    registerUser(username, name, yourImage, email, password).then((e) =>
      console.log(e)
    );
  };

  return (
    <div>
      <form onSubmit={(e) => handelSubmit(e)}>
        <label htmlFor="username">
          Usernaem:
          <input
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <label htmlFor="avatar_url">
          Your Image:
          <input
            id="avatar_url"
            name="avatar_url"
            onChange={(e) => setYourImage(e.target.value)}
          ></input>
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SignUp;
