// import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import AboutUs from "../pages/AboutUs";
import Error from "../pages/Error";
// import FAQ from "../pages/FAQ";
// const Home = lazy(() => import("../pages/Home"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <Home />,
      // },
      // {
      //   path: "/home",
      //   element: <Home />,
      // },
      // {
      //   path: "/contact",
      //   element: <ContactUs />,
      // },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
