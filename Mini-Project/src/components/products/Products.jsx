import "./Products.css";

function Products(props) {
  const sampleProducts = [
    {
      id: 1,
      name: "Sneakers",
      price: "49",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "T-Shirt",
      price: "19",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Backpack",
      price: "59",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {sampleProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => props.productData(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
