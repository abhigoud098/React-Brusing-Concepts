import "./Counter.css";

function Counter() {
  const value = 0; // Initial counter value
  const currentValue = value + 1;
  if(currentValue < 0){
     return <p className="counter-value">{currentValue}</p>
  }else {
     return <p className="counter-value">{value}</p>
  }
}

export default Counter;
