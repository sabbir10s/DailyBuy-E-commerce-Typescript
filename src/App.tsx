import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import ThemeSuspense from "./components/theme/ThemeSuspense";
import router from "./routes";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Suspense fallback={<ThemeSuspense />}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Suspense>
  );
}

export default App;
