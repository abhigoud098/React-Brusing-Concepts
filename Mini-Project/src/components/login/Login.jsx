import { useState } from "react";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConPass] = useState("");

  function dataHandler(e) {
    e.preventDefault();
    const userOfSignup = JSON.parse(localStorage.getItem("users"));
    userOfSignup.map((user) => {
      if (user.email === email && user.password === password) {
        console.log("Authriesed user");
        window.location.reload();
      } else {
        alert("Enter right email or password");
      }
    });
  }

  return (
    <div>
      <form className="form" onSubmit={dataHandler}>
        <p className="title">Login</p>
        <p className="message">Login now and get full access to our app. </p>
        <label>
          <input
            required
            placeholder="Email"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            required
            placeholder="Password"
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <input
            required
            placeholder="Conform Password"
            type="password"
            className="input"
            value={confPass}
            onChange={(e) => setConPass(e.target.value)}
          />
        </label>
        <button className="submit" type="submit">
          Submit
        </button>
        <p className="signin">
          Already have an acount ? <a href="/signup">Signin</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
