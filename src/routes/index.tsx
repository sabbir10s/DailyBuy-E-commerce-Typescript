import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Error from "../pages/Error";
const Home = lazy(() => import("../pages/Home"));
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
    ],
  },
]);

export default router;
