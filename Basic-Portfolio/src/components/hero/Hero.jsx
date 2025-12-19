import "./Hero.css";

const Hero = ({ myInfo }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <h2 className="hero-title">{myInfo.name}</h2>
        <p className="hero-subtitle">{myInfo.aboutMe}</p>
        <a href="#about" className="hero-button">
          About Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
