import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "../src/components/home/Home";
import Products from "../src/components/products/Products";
import Cart from "../src/components/cart/Cart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const productData = (product) => {
    setCartItems((prevCart) => {
      // Check if the product already exists in cart
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Update quantity or price if it already exists
        return prevCart.map(
          (item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                } // Clicked product edit and add it
              : item // UnClicked product as it is add it
        );
      } else {
        // Add new item to cart
        return [...prevCart, { ...product, quantity: 1,}];
      }
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products productData={productData} />,
        },
        {
          path: "/cart",
          element: <Cart cartItems={cartItems} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
