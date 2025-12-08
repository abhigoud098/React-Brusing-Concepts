import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          Discover my projects, skills, and aboutMe in web development.
        </p>
        <a href="#about" className="hero-button">
          About Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
