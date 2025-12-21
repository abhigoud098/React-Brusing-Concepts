import "./App.css";
import Product from "./components/product/Product";

function App() {
  const allCarts = [];
  const addToCart = (data) => {
    console.log(data);
    allCarts.push(data);
  };
  return (
    <>
      <Product addToCart={addToCart}/>
    </>
  );
}
 
export default App;
