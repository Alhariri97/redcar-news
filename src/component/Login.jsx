import { useEffect, useState } from "react";
import { login } from "../api";
import { UserContext } from "./context/UserContext"; //<----and this
import { useContext } from "react"; //<------------------- this
// import both react useContext and my context wich is in this case is the userCotext
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [userNameInput, setUserNameInput] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext); // destracutar the state you want to use and here
  // I want to set the user not useing it .
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    if (userNameInput.length || password.length) {
      console.log(userNameInput, password);
      setError(false);
      login(userNameInput, password).then(({ data }) => {
        console.log(data);
        // navigate("/topic");
        setUser(data);
      });
    } else {
      setError("Write a user name to Login ");
    }
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label>
          username:
          <input
            placeholder="Enter Your UseName"
            onChange={(e) => {
              setError("");
              setUserNameInput(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Password:
          <input
            placeholder="Enter Your UseName"
            onChange={(e) => {
              setError("");
              setPassword(e.target.value);
            }}
          ></input>
        </label>
        <button type="submit">Login</button>
        {error.length ? <p>{error}</p> : null}
      </form>
      <p>
        Dont have an Acount!
        <Link to="/sign-up" style={{ color: "green" }}>
          {" "}
          Create
        </Link>{" "}
        Now
      </p>
    </div>
  );
};

export default Login;
