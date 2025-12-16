import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());
  const [theme, setTheme] = useState("");

  useEffect(() => {
    // get the last saved theme or default to light
    const last = localStorage.getItem("theme") || "light-theme";

    // flip theme on refresh
    const next = last === "light-theme" ? "dark-theme" : "light-theme";

    setTheme(next);
    localStorage.setItem("theme", next);
  }, []);

  useEffect(() => {
    if (theme) document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <h1>Switching light and dark mood background after refresh page or mount my component</h1>
      <div style={{ fontSize: "2rem", fontFamily: "monospace" }}>
        {time.toLocaleTimeString()}
      </div>
    </>
  );
}

export default App;
