import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  function PassId(id) {
    console.log(id);
  }
  return (
    <>
      <h1>Home Page</h1>
      <div className="blogs-div">
        <div className="blog-card">
          <h3 className="blog-title">Blog1</h3>
          <p>Today's we are not Allow people do this..!</p>
          <Link to={`/blog/1`}>
            <button className="read-btn">Read More</button>
          </Link>
        </div>
        <div className="blog-card">
          <h3 className="blog-title">Blog2</h3>
          <p>Some time after PM Modi do this</p>
          <Link to={`/blog/2`}>
            <button className="read-btn">Read More</button>
          </Link>
        </div>
        <div className="blog-card">
          <h3 className="blog-title">Blog3</h3>
          <p>Give the most power of AI tolls by "Sem Alt Men"</p>
          <Link to={`/blog/3`}>
            <button className="read-btn">Read More</button>
          </Link>
        </div>
        <div className="blog-card">
          <h3 className="blog-title">Blog4</h3>
          <p>The biggest valuation in world "Space X"</p>
          <Link to={`/blog/4`}>
            <button className="read-btn">Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
