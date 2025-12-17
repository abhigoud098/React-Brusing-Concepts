import "./App.css";
import Login from "./component/login/Login";
import Profile from "./component/profile/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return <UserContextProvider>
    <Login/>
    <Profile/>
  </UserContextProvider>;
}

export default App;
