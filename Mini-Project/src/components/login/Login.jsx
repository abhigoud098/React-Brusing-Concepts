import "./login.css";

function login() {
  return (
    <div>
      <form className="form">
        <p className="title">Login</p>
        <p className="message">Login now and get full access to our app. </p>

        <label>
          <input required placeholder type="email" className="input" />
          <span>Email</span>
        </label>
        <label>
          <input required placeholder type="password" className="input" />
          <span>Password</span>
        </label>
        <label>
          <input required placeholder type="password" className="input" />
          <span>Confirm password</span>
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

export default login;
