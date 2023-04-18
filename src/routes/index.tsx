// import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Cart from "src/pages/Cart";
import Categories from "src/pages/Categories";
import Checkout from "src/pages/Checkout";
import ProductDetails from "src/pages/ProductDetails";
import Wishlist from "src/pages/Wishlist";
import Layout from "../layouts/Layout";
import AboutUs from "../pages/AboutUs";
import BlogDetails from "../pages/BlogDetails";
import BlogPage from "../pages/BlogPage";
import ContactUs from "../pages/ContactUs";
import Error from "../pages/Error";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Invoice from "src/components/screen/Invoice";
import AboutV2 from "src/components/screen/AboutV2";
import OrderTrack from "src/pages/OrderTrack";
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
        path: "/product/:itemId",
        element: <ProductDetails />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/blog/:blogId",
        element: <BlogDetails />,
      },
      {
        path: "/invoice",
        element: <Invoice />,
      },
      {
        path: "/orders",
        element: <OrderTrack />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/aboutV2",
        element: <AboutV2 />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
  },
]);

export default router;
