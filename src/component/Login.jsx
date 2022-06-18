import { useEffect, useState } from "react";
import { getUser } from "../api";
import { UserContext } from "./context/UserContext"; //<----and this
import { useContext } from "react"; //<------------------- this
// import both react useContext and my context wich is in this case is the userCotext
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userNameInput, setUserNameInput] = useState("");
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
    if (userNameInput.length) {
      setError(false);
      getUser(userNameInput).then((data) => setUser(data)); //here I'm usening it
      navigate("/");
    } else {
      setError("Write a user name to Login ");
    }
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          placeholder="Enter Your UseName"
          onChange={(e) => {
            setError("");
            setUserNameInput(e.target.value);
          }}
        ></input>
        <button type="submit">Login</button>
        {error.length ? <p>{error}</p> : null}
      </form>
    </div>
  );
};

export default Login;
