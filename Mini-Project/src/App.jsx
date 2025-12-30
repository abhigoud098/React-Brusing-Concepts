import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const productData = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Products productData={productData} /> },
        { path: "/cart", element: <Cart cartItems={cartItems} /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
  ]);

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
