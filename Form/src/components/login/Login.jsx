import "./login.css";
import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

  //  set the current {UserName} which is typed by user in input field.
  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function handelUserPass(e) {
    setUserPass(e.target.value);
  }


// Validation check
  function Submit() {
    if (userName === "" || userPass === "") {
      alert("Enter username & password");
    }
  }

  return (
    <>
      <div className="form-container">
        <p className="title">Login</p>
        <form className="form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your user name"
              value={userName}
              onChange={handleUserName}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={userPass}
              onChange={handelUserPass}
              required
            />
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">
                Forgot Password ?
              </a>
            </div>
          </div>
          <button className="sign" onClick={Submit}>
            Login in
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
