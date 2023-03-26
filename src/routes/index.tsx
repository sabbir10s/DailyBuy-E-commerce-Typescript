// import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import AboutUs from "../pages/AboutUs";
import BlogDetails from "../pages/BlogDetails";
import BlogPage from "../pages/BlogPage";
import ContactUs from "../pages/ContactUs";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:blogId",
        element: <BlogDetails />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
