import "./Cart.css";

function Cart({ cartItems }) {
  let totalAmt = 0;
  cartItems.forEach((element) => {
    totalAmt += element.price * element.quantity;
  });

  return (
    <section className="cart">
      <h2>Your Cart</h2>

      <div className="cart-container">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Qty: {item.quantity}</p>
              <p>Price: {item.price}</p>
            </div>
          ))
        ) : (
          <p>Cart is empty</p>
        )}

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <p>Total Amount: ${totalAmt}</p>
          <button>Checkout</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
