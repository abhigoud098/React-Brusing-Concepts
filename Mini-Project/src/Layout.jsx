import { Outlet, Link } from "react-router-dom";
import "./App.css";

function Layout() {
  return (
    <>
      <div className="app">
        <nav className="navbar">
          <h2 className="logo">ShopEase</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
