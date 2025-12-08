import Counter from "../counter/Counter";

const styles = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

function Button() {
  return (
    <>
      <button style={styles} onClick={Counter}>Click Me</button>
    </>
  )
}

export default Button;