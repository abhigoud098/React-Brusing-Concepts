import useCounter from "./useCounter";
import "./App.css";

function App() {
  const { count, increase, decrease } = useCounter();
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

export default App;
