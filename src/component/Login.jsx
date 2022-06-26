import { useEffect, useState } from "react";
import { login } from "../api";
import { UserContext } from "./context/UserContext"; //<----and this
import { useContext } from "react"; //<------------------- this
// import both react useContext and my context wich is in this case is the userCotext
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [userNameInput, setUserNameInput] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    if (userNameInput.length === 0 || password.length === 0) {
      setError("Fille the inputs ");
    } else {
      console.log(password.length, userNameInput);

      setError(false);
      login(userNameInput, password).then((res) => {
        if (res.status === 200) {
          setUser(res.data);
          navigate("/account");
        }
        if (res.response.status !== 200) {
          if (res.response.data.msg) {
            setError(res.response.data.msg);
          }
        }
      });
    }
  };
  //
  const location = useLocation();
  const [showWellcome, setShowWellcome] = useState(false);
  useEffect(() => {
    if (location.state) {
      setShowWellcome(true);
      setTimeout(() => {
        setShowWellcome(false);
      }, 9000);
    }
  }, [location.state]);

  return (
    <div id="login">
      {showWellcome ? (
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: "10vh",
          }}
        >
          <p
            style={{
              backgroundColor: "rgb(148 255 93 / 57%)",
              padding: "20px",
            }}
          >
            Your are wellcome {location.state.name}, You can now Log in with
            your Username and Password. Enjoy :)
          </p>
        </div>
      ) : null}
      <form onSubmit={handelSubmit}>
        <label>
          Username:
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
            placeholder="Enter Your Passwor"
            onChange={(e) => {
              setError("");
              setPassword(e.target.value);
            }}
          ></input>
        </label>
        <button type="submit">Login</button>
        {error.length ? <p style={{ color: "red" }}>{error}</p> : null}
        <p style={{}}>
          Don't have an Acount!
          <Link
            to="/sign-up"
            style={{
              color: "green",
            }}
          >
            {" "}
            Create
          </Link>{" "}
          Now
        </p>
      </form>
    </div>
  );
};

export default Login;
