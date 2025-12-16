import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUser] = useState([]);
  const [singleUsers, setSingleUser] = useState({});

  async function getData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url);
    const data = await res.json();
    setUser(data);
  }

  useEffect(() => {
    let i = 1;
    const user = users?.[i];
    setSingleUser(user);
  }, [users]);

  // useEffect(() => {
  //   console.log(singleUsers);
  // }, [singleUsers]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Fetching Data</h1>
      <h2>User Name : {singleUsers?.name}</h2>
    </>
  );
}

export default App;
