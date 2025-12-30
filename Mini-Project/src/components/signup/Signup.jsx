import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPass, setConformPass] = useState("");

  function handleData(e) {
    e.preventDefault();

    if (password === conformPass) {
      const userInfo = {
        name: firstName + " " + lastName,
        email: email,
        password: password,
      };

      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      existingUsers.push(userInfo);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      window.location.reload();
    } else {
      alert("Your password and conform password is not match please refill");
    }
  }
  return (
    <>
      <form className="form" onSubmit={handleData}>
        <p className="title">SignIn</p>
        <p className="message">Login now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input
              required
              placeholder="FirstName"
              type="text"
              className="input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            <input
              required
              placeholder="LastName"
              type="text"
              className="input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
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
            placeholder="Confirm password"
            type="password"
            className="input"
            value={conformPass}
            onChange={(e) => setConformPass(e.target.value)}
          />
        </label>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Signup;
