import "./About.css";
import aboutMeImage from "../../assets/about-me.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="image-div">
          <img src={aboutMeImage} alt="About Me" />
        </div>
        <div className="text-div">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I am a passionate web developer with experience in creating dynamic
            and responsive websites. I love coding and continuously learning new
            technologies to enhance my skills.
          </p>
          <a href="#skills" className="hero-button">
            Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
