import "./Cart.css";

function Cart() {
  return (
    <section className="cart">
      <h2>Your Cart</h2>
      <div className="cart-container">
        <div className="cart-items">
          <div className="cart-item">
            {/* <img src="https://via.placeholder.com/100" alt="item" /> */}
            <div>
              <h4>Sneakers</h4>
              <p>$49</p>
            </div>
          </div>
          <div className="cart-item">
            {/* <img src="https://via.placeholder.com/100" alt="item" /> */}
            <div>
              <h4>T-Shirt</h4>
              <p>$19</p>
            </div>
          </div>
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <p>Subtotal: $68</p>
          <button>Checkout</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
