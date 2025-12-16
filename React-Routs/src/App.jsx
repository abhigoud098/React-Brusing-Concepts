import "./App.css";
import Home from "./components/home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import BlogDetails from "./components/blogDetails/BlogDetails";

function App() {
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
          path: "blog/:id",
          element: <BlogDetails />,
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
