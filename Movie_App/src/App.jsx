import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <header className="header">
          <h1>🎬 MovieFinder</h1>
          <p>Search movies. Discover vibes.</p>
        </header>

        <div className="search-box">
          <input type="text" placeholder="Search for a movie..." />
          <button>Search</button>
        </div>

        <section className="movies">
          <div className="movie-card">
            <div className="poster"></div>
            <h3>Movie Title</h3>
            <span>⭐ 8.5</span>
          </div>

          <div className="movie-card">
            <div className="poster"></div>
            <h3>Movie Title</h3>
            <span>⭐ 7.9</span>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
