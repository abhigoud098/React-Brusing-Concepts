import "./Product.css";

function Product(props) {
  return (
    <div className="main-div">
      <div className="product-card">
        <h3 className="product-name">Wireless Headphones</h3>
        <p className="product-price">₹2,499</p>

        <button className="add-btn" onClick={() => props.addToCart("Wireless Headphones, 2,499")}>Add to Cart</button>
      </div>

      <div className="product-card">
        <h3 className="product-name">Wireless Mouse</h3>
        <p className="product-price">₹1,499</p>

        <button className="add-btn">Add to Cart</button>
      </div>

      <div className="product-card">
        <h3 className="product-name">Wireless Keyboard</h3>
        <p className="product-price">₹3,499</p>

        <button className="add-btn">Add to Cart</button>
      </div>

      <div className="product-card">
        <h3 className="product-name">Wireless Machine</h3>
        <p className="product-price">₹12,499</p>

        <button className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
