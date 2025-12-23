import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>Discover Your Style</h1>
        <p>Trendy collections just for you.</p>
        <Link to="./products">Shop Now</Link>
      </div>
    </section>
  );
}

export default Home;
