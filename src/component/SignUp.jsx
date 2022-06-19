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
  const [errorMsg, setErrorMsg] = useState("");

  if (user) {
    navigate("/");
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    if (
      !username.length ||
      !password.length ||
      !name.length ||
      !yourImage.length ||
      !email.length
    ) {
      setErrorMsg("Fill All inputs");
    } else {
      registerUser(username, name, yourImage, email, password).then((e) => {
        if (e.status === 201) {
          navigate("/login", {
            state: {
              name: e.data.newCreatedUser.name,
            },
          });
        } else {
          console.log(e.response.data.msg);
          setErrorMsg(e.response.data.msg);
        }
      });
    }
  };

  return (
    <div className="sign-up">
      <form
        onSubmit={(e) => {
          setErrorMsg("");
          handelSubmit(e);
        }}
      >
        <label htmlFor="username">
          Usernaem:
          <input
            id="username"
            name="username"
            onChange={(e) => {
              setErrorMsg("");
              setUsername(e.target.value);
            }}
          ></input>
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            name="password"
            onChange={(e) => {
              setErrorMsg("");
              setPassword(e.target.value);
            }}
          ></input>
        </label>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            name="name"
            onChange={(e) => {
              setErrorMsg("");
              setName(e.target.value);
            }}
          ></input>
        </label>
        <label htmlFor="avatar_url">
          Your Image:
          <input
            id="avatar_url"
            name="avatar_url"
            onChange={(e) => {
              setErrorMsg("");
              setYourImage(e.target.value);
            }}
          ></input>
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            onChange={(e) => {
              setErrorMsg("");
              setEmail(e.target.value);
            }}
          ></input>
          <button>Submit</button>
          {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null}
        </label>
      </form>
    </div>
  );
};

export default SignUp;
