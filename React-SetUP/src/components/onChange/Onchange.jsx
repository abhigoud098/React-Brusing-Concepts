import "./Onchange.css";

function Onchange() {
  const handleChange = (event) => {
    if (event.target.value.length > 5) {
      alert(event.target.value);
    }
  };
  return (
    <div className="onchange-container">
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Onchange;
