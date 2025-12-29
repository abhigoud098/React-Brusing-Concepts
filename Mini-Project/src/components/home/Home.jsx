import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>Discover Your Style</h1>
        <p>Trendy collections just for you.</p>
        <br />
        <Link to="/login">Login</Link>
        <Link to="/SignUp">Sign Up</Link>
      </div>
    </section>
  );
}

export default Home;
