import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const OrderTrack = lazy(() => import("../pages/OrderTrack"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const AboutUsV2 = lazy(() => import("../pages/AboutUsV2"));
const BlogDetails = lazy(() => import("../pages/BlogDetails"));
const BlogPage = lazy(() => import("../pages/BlogPage"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Invoice = lazy(() => import("../pages/Invoice"));
const FAQ = lazy(() => import("../pages/FAQ"));
const TermsCondition = lazy(() => import("../pages/TermsCondition"));
const Cart = lazy(() => import("../pages/Cart"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const Checkout = lazy(() => import("../pages/Checkout"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Categories = lazy(() => import("../pages/Categories"));
const Layout = lazy(() => import("../layouts/Layout"));
const Home = lazy(() => import("../pages/Home"));
const Error = lazy(() => import("../pages/Error"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Profile = lazy(() => import("../pages/Profile"));
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
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/product/:itemId",
        element: <ProductDetails />,
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
        path: "/aboutV2",
        element: <AboutUsV2 />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/termsCondition",
        element: <TermsCondition />,
      },
      {
        path: "/invoice",
        element: <Invoice />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/orders/:id",
        element: <OrderTrack />,
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
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/terms",
        element: <TermsCondition />,
      },
    ],
  },
]);

export default router;
