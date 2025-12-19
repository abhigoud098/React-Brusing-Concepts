import "./App.css";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/skills.jsx";
import Education from "./components/education/Education.jsx";

function App() {
  const myInfo = {
    name: "Abhihsek",
    age: 22,
    aboutMe: "I am Developer...!",
  };
  return (
    <>
      <Hero myInfo={myInfo} />
      <About />
      <Skills />
      <Education />
    </>
  );
}

export default App;
