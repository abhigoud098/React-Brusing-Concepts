import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function Increase() {
    if (count != 10) {
      setCount((prev) => prev + 1);
    }
  }

  function Decrease() {
    if (count != 1) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className="counter-container-div">
        <div className="show-increase-value-div">{count}</div>
        <div className="increase-decrease-value-button-">
          <button onClick={Increase}>Increase</button>
          <button onClick={Decrease}>Decrease</button>
        </div>
      </div>
    </>
  );
}

export default App;
