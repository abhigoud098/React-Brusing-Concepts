import "./Hero.css";
// import Profile from "../profileCard/Profile";
import Product from "../listOfProduct/Product";
import Button from "../button/Button";
import Counter from "../counter/Counter";
import LikeBtn from "../likeBtn/likeBtn";
import Onchange from "../onChange/Onchange";

function Hero() {
  // const user = {
  //   name: "Snapcode",
  //   avatar:
  //     "https://imgs.search.brave.com/-ERRrrvHYrr5Y5lAE7qd8hyHK3PRgQyNALdLMxjaH2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvc2FkLWFuaW1l/LWJveS1waWN0dXJl/cy14ZzNybWQ5dXpk/YW0zbWd2LmpwZw",
  //   bio: "Full-Stack Developer | 30 Days of Learning React Day 3 🚀",
  //   Topics: "Component, Props",
  // };

  const tasks = [
    { id: 1, task: "Go to Market", completed: true },
    { id: 2, task: "Do something useful", completed: true },
    { id: 3, task: "3 hour study session", completed: false },
    { id: 3, task: "Make food", completed: false },
  ];

  return (
    <div className="hero-section">
      {/* <Profile user={user} /> */}
      <LikeBtn />
      <Onchange />
    </div>
  );
}

export default Hero;
