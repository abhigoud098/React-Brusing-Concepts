import "./App.css";
import Profile from "./components/profile/profile";
import ProfileAnother from "./components/profileanother/ProfileAnother";

function App() {
  const personTwo = {
    name: "Usha",
    age: 22,
    bio: "Engineer",
  };
  return (
    <div>
      <Profile>
        {
          {
          name: "Abhihek",
          age: 22,
          bio: "Developer",
          }
        }
      </Profile>
      <ProfileAnother personTwo={personTwo} />
    </div>
  );
}

export default App;
